import React, { useState } from "react";
import Navbar from "./components/Navbar";
import JobNavbar from "./components/Jobs/JobNavbar";
import HomeView from "./components/Home/HomeView";
import Footer from "./components/Footer";
import AboutPage from "./components/About/AboutPage";
import OnboardingFlow from "./components/Onboarding/OnboardingFlow";
import AuthContainer from "./components/Auth/AuthContainer";
import ContactPage from "./components/Contact/ContactPage";
import RewardsPage from "./components/Rewards/RewardsPage";
import RewardStore from "./components/Rewards/RewardStore";
import PartnerPage from "./components/Partner/PartnerPage";
import AdvertisePage from "./components/Advertise/AdvertisePage";
import ServicesPage from "./components/Services/ServicesPage";
import JobsPage from "./components/Jobs/JobsPage";
import JobFeedPage from "./components/Jobs/JobFeedPage";
import JobRecommendations from "./components/Jobs/JobRecommendations";
import SphereInvites from "./components/Jobs/SphereInvites";
import ApplicationTracker from "./components/Jobs/ApplicationTracker";
import JobAlerts from "./components/Jobs/JobAlerts";
import SavedJobs from "./components/Jobs/SavedJobs";
import CompaniesPage from "./components/Jobs/CompaniesPage";
import CompanyDetailsPage from "./components/Jobs/CompanyDetailsPage";
import JobDetailsPage from "./components/Jobs/JobDetailsPage";
import ResumeBuilder from "./components/Resume/ResumeBuilder";
import ResumeChecker from "./components/Resume/ResumeChecker";
import CoverLetterBuilder from "./components/Resume/CoverLetterBuilder";
import CareerBlogs from "./components/Resume/CareerBlogs";
import EmployerZone from "./components/Partner/EmployerZone";
import InstitutionZone from "./components/Partner/InstitutionZone";
import EducationPage from "./components/Education/EducationPage";
import EducationNavbar from "./components/Education/EducationNavbar";
import FindCollegePage from "./components/Education/FindCollege/FindCollegePage";
import CourseFinderPage from "./components/Education/CourseFinder/CourseFinderPage";
import CourseDetailsPage from "./components/Education/CourseDetails/CourseDetailsPage";
import CollegeDetailsPage from "./components/Education/FindCollege/CollegeDetailsPage";
import ExamsPage from "./components/Education/Exams/ExamsPage";
import ExamDetailsPage from "./components/Education/Exams/ExamDetailsPage";
import UniversitiesPage from "./components/Education/Universities/UniversitiesPage";
import UniversityDetailsPage from "./components/Education/Universities/UniversityDetailsPage";
import RankingsPage from "./components/Education/Rankings/RankingsPage";
import AdmissionsDiscoveryPage from "./components/Education/Admissions/AdmissionsDiscoveryPage";
import EntranceDiscoveryPage from "./components/Education/Entrance/EntranceDiscoveryPage";
import CampusForumPage from "./components/Education/Forum/CampusForumPage";
import ScholarshipMainPage from "./components/Education/Scholarships/ScholarshipMainPage";
import ScholarshipHubDetailsPage from "./components/Education/Scholarships/ScholarshipHubDetailsPage";
import ScholarshipCategoryPage from "./components/Education/Scholarships/ScholarshipCategoryPage";
import ScholarshipInquiryForm from "./components/Education/Scholarships/ScholarshipInquiryForm";
import ScholarshipApplicationPage from "./components/Education/Scholarships/ScholarshipApplicationPage";
import ScholarshipFinderPage from "./components/Education/Scholarships/ScholarshipFinderPage";
import ScholarshipDetailsPage from "./components/Education/Scholarships/ScholarshipDetailsPage";
import ResourcesPage from "./components/Education/Resources/ResourcesPage";
import NewsPage from "./components/News/NewsPage";
import NewsDetailsPage from "./components/News/NewsDetailsPage";
import BlogPage from "./components/Blog/BlogPage";
import BlogDetailsPage from "./components/Blog/BlogDetailsPage";
import EventsPage from "./components/Events/EventsPage";
import EventDetailsPage from "./components/Events/EventDetailsPage";

type currentView =
  | "home"
  | "about"
  | "onboarding"
  | "login"
  | "signup"
  | "contact"
  | "rewards"
  | "rewardStore"
  | "partner"
  | "advertise"
  | "services"
  | "jobsPage"
  | "jobFeed"
  | "jobRecommendations"
  | "sphereInvites"
  | "applicationTracker"
  | "jobAlerts"
  | "savedJobs"
  | "companiesPage"
  | "companyDetails"
  | "jobDetails"
  | "resumeBuilder"
  | "resumeChecker"
  | "coverLetterBuilder"
  | "careerBlogs"
  | "employerZone"
  | "institutionZone"
  | "educationPage"
  | "findCollege"
  | "courseFinder"
  | "courseDetails"
  | "collegeDetails"
  | "examsPage"
  | "examDetails"
  | "universitiesPage"
  | "universityDetails"
  | "rankingsPage"
  | "admissionsDiscovery"
  | "entranceDiscovery"
  | "campusForum"
  | "scholarshipMain"
  | "scholarshipHubDetails"
  | "scholarshipCategory"
  | "scholarshipInquiry"
  | "scholarshipApplication"
  | "scholarshipFinder"
  | "scholarshipDetails"
  | "studyResources"
  | "newsPage"
  | "newsDetails"
  | "blogPage"
  | "blogDetails"
  | "eventsPage"
  | "eventDetails";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "about"
    | "onboarding"
    | "login"
    | "signup"
    | "contact"
    | "rewards"
    | "rewardStore"
    | "partner"
    | "advertise"
    | "services"
    | "jobsPage"
    | "jobFeed"
    | "jobRecommendations"
    | "sphereInvites"
    | "applicationTracker"
    | "jobAlerts"
    | "savedJobs"
    | "companiesPage"
    | "companyDetails"
    | "jobDetails"
    | "resumeBuilder"
    | "resumeChecker"
    | "coverLetterBuilder"
    | "careerBlogs"
    | "employerZone"
    | "institutionZone"
    | "educationPage"
    | "findCollege"
    | "courseFinder"
    | "courseDetails"
    | "collegeDetails"
    | "examsPage"
    | "examDetails"
    | "universitiesPage"
    | "universityDetails"
    | "rankingsPage"
    | "admissionsDiscovery"
    | "entranceDiscovery"
    | "campusForum"
    | "scholarshipMain"
    | "scholarshipHubDetails"
    | "scholarshipCategory"
    | "scholarshipInquiry"
    | "scholarshipApplication"
    | "scholarshipFinder"
    | "scholarshipDetails"
    | "studyResources"
    | "newsPage"
    | "newsDetails"
    | "blogPage"
    | "blogDetails"
    | "eventsPage"
    | "eventDetails"
  >("home");
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
  } | null>(null);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedCollegeId, setSelectedCollegeId] = useState<number | null>(
    null,
  );
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [selectedUniversityId, setSelectedUniversityId] = useState<
    string | null
  >(null);
  const [selectedScholarshipId, setSelectedScholarshipId] = useState<
    string | null
  >(null);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const navigateTo = (view: any, data?: any) => {
    if (view === "jobDetails" && data) setSelectedJobId(data.id);
    if (view === "courseDetails" && data) setSelectedCourseId(data.id);
    if (view === "collegeDetails" && data) setSelectedCollegeId(data.id);
    if (view === "examDetails" && data) setSelectedExamId(data.id);
    if (view === "universityDetails" && data) setSelectedUniversityId(data.id);
    if (view === "scholarshipDetails" && data)
      setSelectedScholarshipId(data.id);
    if (view === "scholarshipHubDetails" && data)
      setSelectedScholarshipId(data.id);
    if (view === "scholarshipInquiry" && data)
      setSelectedScholarshipId(data.id);
    if (view === "scholarshipApplication" && data)
      setSelectedScholarshipId(data.id);
    if (view === "newsDetails" && data) setSelectedNewsId(data.id);
    if (view === "blogDetails" && data) setSelectedBlogId(data.id);
    if (view === "eventDetails" && data) setSelectedEventId(data.id);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = (userData: {
    name: string;
    email: string;
    role: string;
  }) => {
    setUser(userData);
    navigateTo("home");
  };

  const handleSignupSuccess = (userData: {
    name: string;
    email: string;
    role: string;
  }) => {
    setUser(userData);
    navigateTo("onboarding");
  };

  const handleLogout = () => {
    setUser(null);
    navigateTo("home");
  };

  const isAuthView = currentView === "login" || currentView === "signup";
  const isJobView = [
    "jobsPage",
    "jobFeed",
    "jobRecommendations",
    "sphereInvites",
    "applicationTracker",
    "jobAlerts",
    "savedJobs",
    "companiesPage",
    "companyDetails",
    "jobDetails",
    "resumeBuilder",
    "resumeChecker",
    "coverLetterBuilder",
    "careerBlogs",
    "employerZone",
  ].includes(currentView);
  const isEducationView = [
    "educationPage",
    "institutionZone",
    "findCollege",
    "courseFinder",
    "courseDetails",
    "collegeDetails",
    "examsPage",
    "examDetails",
    "universitiesPage",
    "universityDetails",
    "rankingsPage",
    "admissionsDiscovery",
    "entranceDiscovery",
    "campusForum",
    "scholarshipMain",
    "scholarshipHubDetails",
    "scholarshipCategory",
    "scholarshipInquiry",
    "scholarshipFinder",
    "scholarshipDetails",
    "studyResources",
    "newsPage",
    "newsDetails",
    "blogPage",
    "blogDetails",
    "eventsPage",
    "eventDetails",
  ].includes(currentView);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden ${currentView !== "home" ? "bg-slate-50" : "bg-white"}`}
    >
      {!isAuthView && currentView !== "onboarding" && (
        <>
          {isJobView ? (
            <JobNavbar onNavigate={navigateTo} user={user} />
          ) : isEducationView ? (
            <EducationNavbar onNavigate={navigateTo} user={user} />
          ) : (
            <Navbar
              onNavigate={navigateTo}
              currentView={currentView as any}
              user={user}
              onLogout={handleLogout}
            />
          )}
        </>
      )}

      {currentView === "home" && (
        <HomeView onNavigate={navigateTo} user={user} />
      )}

      {currentView === "educationPage" && (
        <EducationPage onNavigate={navigateTo} />
      )}
      {currentView === "findCollege" && (
        <FindCollegePage onNavigate={navigateTo} />
      )}
      {currentView === "courseFinder" && (
        <CourseFinderPage onNavigate={navigateTo} />
      )}
      {currentView === "courseDetails" && (
        <CourseDetailsPage id={selectedCourseId || 1} onNavigate={navigateTo} />
      )}
      {currentView === "collegeDetails" && (
        <CollegeDetailsPage
          id={selectedCollegeId || 1}
          onNavigate={navigateTo}
        />
      )}
      {currentView === "examsPage" && <ExamsPage onNavigate={navigateTo} />}
      {currentView === "examDetails" && (
        <ExamDetailsPage
          id={selectedExamId || "neb-class-12"}
          onNavigate={navigateTo}
        />
      )}
      {currentView === "universitiesPage" && (
        <UniversitiesPage onNavigate={navigateTo} />
      )}
      {currentView === "universityDetails" && (
        <UniversityDetailsPage
          id={selectedUniversityId || "1"}
          onNavigate={navigateTo}
        />
      )}
      {currentView === "rankingsPage" && (
        <RankingsPage onNavigate={navigateTo} />
      )}
      {currentView === "admissionsDiscovery" && (
        <AdmissionsDiscoveryPage onNavigate={navigateTo} />
      )}
      {currentView === "entranceDiscovery" && (
        <EntranceDiscoveryPage onNavigate={navigateTo} />
      )}
      {currentView === "campusForum" && (
        <CampusForumPage onNavigate={navigateTo} />
      )}
      {currentView === "scholarshipMain" && (
        <ScholarshipMainPage onNavigate={navigateTo} />
      )}
      {currentView === "scholarshipHubDetails" && (
        <ScholarshipHubDetailsPage
          id={selectedScholarshipId || "1"}
          onNavigate={navigateTo}
        />
      )}
      {currentView === "scholarshipCategory" && (
        <ScholarshipCategoryPage onNavigate={navigateTo} />
      )}
      {currentView === "scholarshipInquiry" && (
        <ScholarshipInquiryForm
          scholarshipName={
            selectedScholarshipId
              ? "Scholarship ID: " + selectedScholarshipId
              : undefined
          }
          onClose={() => navigateTo("scholarshipMain")}
        />
      )}
      {currentView === "scholarshipApplication" && (
        <ScholarshipApplicationPage
          scholarshipId={selectedScholarshipId}
          onNavigate={navigateTo}
        />
      )}
      {currentView === "scholarshipFinder" && (
        <ScholarshipFinderPage onNavigate={navigateTo} />
      )}
      {currentView === "scholarshipDetails" && (
        <ScholarshipDetailsPage
          id={selectedScholarshipId || "1"}
          onNavigate={navigateTo}
        />
      )}
      {currentView === "studyResources" && (
        <ResourcesPage onNavigate={navigateTo} />
      )}

      {currentView === "newsPage" && <NewsPage onNavigate={navigateTo} />}
      {currentView === "newsDetails" && (
        <NewsDetailsPage id={selectedNewsId || "1"} onNavigate={navigateTo} />
      )}
      {currentView === "blogPage" && <BlogPage onNavigate={navigateTo} />}
      {currentView === "blogDetails" && (
        <BlogDetailsPage id={selectedBlogId || "1"} onNavigate={navigateTo} />
      )}

      {currentView === "eventsPage" && <EventsPage onNavigate={navigateTo} />}
      {currentView === "eventDetails" && (
        <EventDetailsPage id={selectedEventId || "1"} onNavigate={navigateTo} />
      )}

      {currentView === "about" && <AboutPage />}
      {currentView === "contact" && <ContactPage />}
      {currentView === "rewards" && <RewardsPage />}
      {currentView === "rewardStore" && <RewardStore />}
      {currentView === "partner" && <PartnerPage />}
      {currentView === "advertise" && <AdvertisePage />}
      {currentView === "services" && <ServicesPage />}
      {currentView === "jobsPage" && <JobsPage onNavigate={navigateTo} />}
      {currentView === "jobFeed" && <JobFeedPage onNavigate={navigateTo} />}
      {currentView === "jobRecommendations" && (
        <JobRecommendations onNavigate={navigateTo} />
      )}
      {currentView === "sphereInvites" && <SphereInvites />}
      {currentView === "applicationTracker" && <ApplicationTracker />}
      {currentView === "jobAlerts" && <JobAlerts />}
      {currentView === "savedJobs" && <SavedJobs />}
      {currentView === "companiesPage" && (
        <CompaniesPage onNavigate={navigateTo} />
      )}
      {currentView === "companyDetails" && (
        <CompanyDetailsPage onNavigate={navigateTo} />
      )}
      {currentView === "jobDetails" && (
        <JobDetailsPage id={selectedJobId || 1} onNavigate={navigateTo} />
      )}
      {currentView === "resumeBuilder" && <ResumeBuilder />}
      {currentView === "resumeChecker" && <ResumeChecker />}
      {currentView === "coverLetterBuilder" && <CoverLetterBuilder />}
      {currentView === "careerBlogs" && <CareerBlogs />}
      {currentView === "employerZone" && <EmployerZone />}
      {currentView === "institutionZone" && <InstitutionZone />}

      {currentView === "onboarding" && (
        <div className="min-h-[100dvh] flex items-center justify-center bg-slate-50 p-4">
          <OnboardingFlow
            initialRole={user?.role as any}
            onComplete={() => navigateTo("home")}
          />
        </div>
      )}

      {isAuthView && (
        <AuthContainer
          type={currentView as "login" | "signup"}
          onSwitch={() =>
            navigateTo(currentView === "login" ? "signup" : "login")
          }
          onSuccess={
            currentView === "login" ? handleLoginSuccess : handleSignupSuccess
          }
          onClose={() => navigateTo("home")}
        />
      )}

      {!isAuthView &&
        currentView !== "onboarding" &&
        currentView !== "scholarshipApplication" && (
          <Footer onNavigate={navigateTo} />
        )}
    </div>
  );
};

export default App;
