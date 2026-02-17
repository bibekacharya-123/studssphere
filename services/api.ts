// API Service for frontend
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role?: string;
}

export interface AuthResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    user: {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      role: string;
      created_at: string;
      updated_at: string;
    };
    token: string;
  };
}

export interface ErrorResponse {
  success: boolean;
  statusCode: number;
  message: string;
  error?: string;
}

export interface College {
  id: number;
  name: string;
  location: string;
  affiliation: string;
  type: string;
  verified: boolean;
  popular: boolean;
  rating: number;
  reviews: number;
  programs: number;
  description?: string;
  website?: string;
  email?: string;
  phone?: string;
  image_url?: string;
  featured_programs?: string[];
  amenities?: string[];
  courses?: string | any;
  scholarships?: string | any;
  gallery?: string | any;
  programs_list?: string | any;
  about?: string | any;
  admissions?: string | any;
  departments?: string | any;
  college_reviews?: string | any;
}

export interface CollegesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    colleges: College[];
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private getHeaders(token?: string) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  }

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseURL}/auth/register`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          first_name: payload.first_name,
          last_name: payload.last_name,
          role: payload.role || "student",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async login(payload: LoginPayload): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseURL}/auth/login`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getProfile(token: string) {
    try {
      const response = await fetch(`${this.baseURL}/profile`, {
        method: "GET",
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch profile");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
  async savePreferences(
    token: string,
    preferences: {
      preference_role: string;
      preference_flow: string;
      preferences: Record<string, any>;
    },
  ) {
    try {
      const response = await fetch(`${this.baseURL}/preferences`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify(preferences),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save preferences");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  // College endpoints (public)
  async getColleges(params?: {
    location?: string;
    affiliation?: string;
    type?: string;
    verified?: boolean;
    popular?: boolean;
    minRating?: number;
    search?: string;
    sort?: string;
    order?: "ASC" | "DESC";
    page?: number;
    pageSize?: number;
  }): Promise<CollegesResponse> {
    try {
      const query = new URLSearchParams();
      if (params) {
        if (params.location) query.append("location", params.location);
        if (params.affiliation) query.append("affiliation", params.affiliation);
        if (params.type) query.append("type", params.type);
        if (params.verified !== undefined)
          query.append("verified", String(params.verified));
        if (params.popular !== undefined)
          query.append("popular", String(params.popular));
        if (params.minRating)
          query.append("minRating", String(params.minRating));
        if (params.search) query.append("search", params.search);
        if (params.sort) query.append("sort", params.sort);
        if (params.order) query.append("order", params.order);
        if (params.page) query.append("page", String(params.page));
        if (params.pageSize) query.append("pageSize", String(params.pageSize));
      }

      const response = await fetch(
        `${this.baseURL}/colleges?${query.toString()}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch colleges");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCollegeById(
    id: number,
  ): Promise<{ success: boolean; data?: College; message: string }> {
    try {
      const response = await fetch(`${this.baseURL}/colleges/${id}`, {
        method: "GET",
        headers: this.getHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch college");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Admin college endpoints
  async createCollege(
    token: string,
    college: {
      name: string;
      location: string;
      affiliation?: string;
      type?: string;
      verified?: boolean;
      popular?: boolean;
      rating?: number;
      reviews?: number;
      programs?: number;
      description?: string;
      website?: string;
      email?: string;
      phone?: string;
      image_url?: string;
      featured_programs?: string[];
      amenities?: string[];
    },
  ): Promise<{ success: boolean; data?: College; message: string }> {
    try {
      const response = await fetch(`${this.baseURL}/admin/colleges`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify(college),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create college");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateCollege(
    token: string,
    id: number,
    updates: Partial<College>,
  ): Promise<{ success: boolean; data?: College; message: string }> {
    try {
      const response = await fetch(`${this.baseURL}/admin/colleges/${id}`, {
        method: "PUT",
        headers: this.getHeaders(token),
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update college");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteCollege(
    token: string,
    id: number,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${this.baseURL}/admin/colleges/${id}`, {
        method: "DELETE",
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete college");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
  // Store token in localStorage
  setToken(token: string) {
    localStorage.setItem("authToken", token);
  }

  // Get token from localStorage
  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  // Remove token from localStorage
  removeToken() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
  }

  // Store user data in localStorage
  setUser(user: any) {
    localStorage.setItem("authUser", JSON.stringify(user));
  }

  // Get user data from localStorage
  getUser() {
    const user = localStorage.getItem("authUser");
    return user ? JSON.parse(user) : null;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Clear all auth data
  logout() {
    this.removeToken();
  }
}

export const apiService = new ApiService(API_BASE_URL);
