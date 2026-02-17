package handlers

import (
	"encoding/json"
	"strconv"

	"studsphere/backend/config"
	"studsphere/backend/models"
	"studsphere/backend/utils"

	"github.com/gin-gonic/gin"
)

// GetColleges retrieves all colleges with optional filtering and pagination
func GetColleges(c *gin.Context) {
	var colleges []models.College
	query := config.GetDB()

	// Filter by location
	if location := c.Query("location"); location != "" {
		query = query.Where("location ILIKE ?", "%"+location+"%")
	}

	// Filter by affiliation (university)
	if affiliation := c.Query("affiliation"); affiliation != "" {
		query = query.Where("affiliation ILIKE ?", "%"+affiliation+"%")
	}

	// Filter by type (Public/Private)
	if collegeType := c.Query("type"); collegeType != "" {
		query = query.Where("college_type = ?", collegeType)
	}

	// Filter by verified status
	if verified := c.Query("verified"); verified == "true" {
		query = query.Where("verified = ?", true)
	}

	// Filter by popular status
	if popular := c.Query("popular"); popular == "true" {
		query = query.Where("popular = ?", true)
	}

	// Filter by minimum rating
	if minRating := c.Query("minRating"); minRating != "" {
		rating, err := strconv.ParseFloat(minRating, 64)
		if err == nil {
			query = query.Where("rating >= ?", rating)
		}
	}

	// Search by name
	if search := c.Query("search"); search != "" {
		query = query.Where("name ILIKE ? OR affiliation ILIKE ?", "%"+search+"%", "%"+search+"%")
	}

	// Sorting
	sort := c.DefaultQuery("sort", "rating")
	order := c.DefaultQuery("order", "DESC")
	if sort == "rating" || sort == "name" || sort == "reviews" {
		query = query.Order(sort + " " + order)
	}

	// Pagination
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	pageSize, _ := strconv.Atoi(c.DefaultQuery("pageSize", "10"))
	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 100 {
		pageSize = 10
	}

	offset := (page - 1) * pageSize

	// Get total count for pagination
	var total int64
	config.GetDB().Model(&models.College{}).Where(query).Count(&total)

	// Execute query with pagination
	if err := query.Offset(offset).Limit(pageSize).Find(&colleges).Error; err != nil {
		utils.ErrorResponse(c, 500, "Failed to fetch colleges")
		return
	}

	utils.SuccessResponse(c, 200, "Colleges retrieved successfully", gin.H{
		"colleges": colleges,
		"pagination": gin.H{
			"page":       page,
			"pageSize":   pageSize,
			"total":      total,
			"totalPages": (total + int64(pageSize) - 1) / int64(pageSize),
		},
	})
}

// GetCollegeByID retrieves a single college by ID
func GetCollegeByID(c *gin.Context) {
	collegeID := c.Param("id")

	var college models.College
	if err := config.GetDB().First(&college, collegeID).Error; err != nil {
		utils.ErrorResponse(c, 404, "College not found")
		return
	}

	utils.SuccessResponse(c, 200, "College retrieved successfully", college)
}

// CreateCollege creates a new college (admin only)
func CreateCollege(c *gin.Context) {
	var req models.CreateCollegeRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		utils.ErrorResponse(c, 400, err.Error())
		return
	}

	// Convert arrays to JSON for storage
	var featuredPrograms []byte
	var amenities []byte
	var err error

	if len(req.FeaturedPrograms) > 0 {
		featuredPrograms, err = json.Marshal(req.FeaturedPrograms)
		if err != nil {
			utils.ErrorResponse(c, 400, "Invalid featured programs format")
			return
		}
	}

	if len(req.Amenities) > 0 {
		amenities, err = json.Marshal(req.Amenities)
		if err != nil {
			utils.ErrorResponse(c, 400, "Invalid amenities format")
			return
		}
	}

	college := models.College{
		Name:             req.Name,
		Location:         req.Location,
		Affiliation:      req.Affiliation,
		CollegeType:      req.CollegeType,
		Verified:         req.Verified,
		Popular:          req.Popular,
		Rating:           req.Rating,
		Reviews:          req.Reviews,
		Programs:         req.Programs,
		Description:      req.Description,
		Website:          req.Website,
		Email:            req.Email,
		Phone:            req.Phone,
		ImageURL:         req.ImageURL,
		FeaturedPrograms: featuredPrograms,
		Amenities:        amenities,
	}

	if err := config.GetDB().Create(&college).Error; err != nil {
		utils.ErrorResponse(c, 500, "Failed to create college")
		return
	}

	utils.SuccessResponse(c, 201, "College created successfully", college)
}

// UpdateCollege updates an existing college (admin only)
func UpdateCollege(c *gin.Context) {
	collegeID := c.Param("id")

	var college models.College
	if err := config.GetDB().First(&college, collegeID).Error; err != nil {
		utils.ErrorResponse(c, 404, "College not found")
		return
	}

	var req models.UpdateCollegeRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		utils.ErrorResponse(c, 400, err.Error())
		return
	}

	// Update fields if provided
	if req.Name != "" {
		college.Name = req.Name
	}
	if req.Location != "" {
		college.Location = req.Location
	}
	if req.Affiliation != "" {
		college.Affiliation = req.Affiliation
	}
	if req.CollegeType != "" {
		college.CollegeType = req.CollegeType
	}
	if req.Verified != nil {
		college.Verified = *req.Verified
	}
	if req.Popular != nil {
		college.Popular = *req.Popular
	}
	if req.Rating != nil {
		college.Rating = *req.Rating
	}
	if req.Reviews != nil {
		college.Reviews = *req.Reviews
	}
	if req.Programs != nil {
		college.Programs = *req.Programs
	}
	if req.Description != "" {
		college.Description = req.Description
	}
	if req.Website != "" {
		college.Website = req.Website
	}
	if req.Email != "" {
		college.Email = req.Email
	}
	if req.Phone != "" {
		college.Phone = req.Phone
	}
	if req.ImageURL != "" {
		college.ImageURL = req.ImageURL
	}

	if len(req.FeaturedPrograms) > 0 {
		if data, err := json.Marshal(req.FeaturedPrograms); err == nil {
			college.FeaturedPrograms = data
		}
	}

	if len(req.Amenities) > 0 {
		if data, err := json.Marshal(req.Amenities); err == nil {
			college.Amenities = data
		}
	}

	if err := config.GetDB().Save(&college).Error; err != nil {
		utils.ErrorResponse(c, 500, "Failed to update college")
		return
	}

	utils.SuccessResponse(c, 200, "College updated successfully", college)
}

// DeleteCollege deletes a college (admin only)
func DeleteCollege(c *gin.Context) {
	collegeID := c.Param("id")

	var college models.College
	if err := config.GetDB().First(&college, collegeID).Error; err != nil {
		utils.ErrorResponse(c, 404, "College not found")
		return
	}

	if err := config.GetDB().Delete(&college).Error; err != nil {
		utils.ErrorResponse(c, 500, "Failed to delete college")
		return
	}

	utils.SuccessResponse(c, 200, "College deleted successfully", nil)
}
