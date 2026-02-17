import React, { useState } from "react";

interface CollegeDetailsPageProps {
  id: number;
  onNavigate: (view: any, data?: any) => void;
}

const CollegeDetailsPage: React.FC<CollegeDetailsPageProps> = ({
  id,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState("about");

  const courses = [
    {
      name: "BBA (Bachelor of Business Admin)",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 6,50,000",
      focus: "Management, Finance, Marketing",
    },
    {
      name: "BSc. CSIT",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 8,00,000",
      focus: "Software, Networking, AI",
    },
    {
      name: "BIM (Information Mgmt)",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 7,20,000",
      focus: "Business Intelligence, IT",
    },
    {
      name: "BCA (Bachelor of Computer App)",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 6,00,000",
      focus: "App Development, Systems",
    },
    {
      name: "BSc. Microbiology",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 5,80,000",
      focus: "Lab Science, Research",
    },
  ];

  const scholarships = [
    {
      title: "Merit Scholarship",
      percentage: "Up to 100%",
      description:
        "Awarded to students with exceptional academic performance in their previous board exams and entrance tests.",
      eligibility: ["GPA 3.8+ in +2/NEB", "Top 5% in Entrance Exam"],
      color: "yellow",
    },
    {
      title: "Need-Based Aid",
      percentage: "Up to 50%",
      description:
        "Financial assistance for students from economically challenged backgrounds to ensure education for all.",
      eligibility: [
        "Verification from Ward Office",
        "Minimum GPA 2.8 maintained",
      ],
      color: "blue",
    },
    {
      title: "Sports & Talent",
      percentage: "Up to 75%",
      description:
        "For students who have represented the district or nation in sports, arts, or music.",
      eligibility: ["National/District Certificates", "Trial/Audition Success"],
      color: "green",
    },
  ];

  const reviews = [
    {
      name: "Sushil Adhikari",
      initials: "SA",
      role: "BBA Student",
      time: "2 months ago",
      rating: 5,
      comment:
        "The faculty here is extremely supportive. The blend of practical workshops and theory really helped me land my internship at a top bank. Highly recommend for Management students!",
      avatarColor: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Priya Rana",
      initials: "PR",
      role: "CSIT Alumni",
      time: "5 months ago",
      rating: 4,
      comment:
        "Great computer labs and internet facilities. The curriculum is updated regularly. Canteen food could be better, but overall a fantastic learning environment.",
      avatarColor: "bg-pink-100 text-pink-600",
    },
    {
      name: "Anish Tamang",
      initials: "AT",
      role: "BIM Student",
      time: "1 year ago",
      rating: 5,
      comment:
        "The extracurricular activities and clubs are the best part. I joined the Robotics club and we won the national competition. It really balances study and fun.",
      avatarColor: "bg-emerald-100 text-emerald-600",
    },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      caption: "Graduation Day 2023",
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      caption: "Modern Classrooms",
    },
    {
      url: "https://images.unsplash.com/photo-1599689018596-3d237199276e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      caption: "E-Library Facility",
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      caption: "IT Lab Session",
    },
    {
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      caption: "Annual Sports Meet",
    },
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      caption: "Guest Lecture Series",
    },
  ];

  const programs = [
    {
      name: "Bachelor of Business Administration (BBA)",
      category: "Management",
      duration: "4 Years / 8 Semesters",
      color: "blue",
    },
    {
      name: "BSc. Computer Science & IT (CSIT)",
      category: "Science & Tech",
      duration: "4 Years / 8 Semesters",
      color: "emerald",
    },
    {
      name: "Bachelor of Information Management (BIM)",
      category: "Mgmt & IT",
      duration: "4 Years / 8 Semesters",
      color: "pink",
    },
    {
      name: "Master of Business Studies (MBS)",
      category: "Postgraduate",
      duration: "2 Years / 4 Semesters",
      color: "orange",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-jakarta">
      {/* Hero Banner */}
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/20 via-black/40 to-black/70"></div>
      </div>

      {/* College Profile Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-end -mt-[124px]">
          <div className="bg-white p-2 rounded-2xl shadow-2xl border-4 border-white h-44 w-44 flex-shrink-0 flex items-center justify-center animate-fadeInUp">
            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-white text-6xl font-black">
              G
            </div>
          </div>

          <div className="flex-1 pb-4 animate-fadeIn">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight drop-shadow-sm flex items-center gap-4">
              Goldenagete International College
              <i className="fa-solid fa-circle-check text-primary-500 text-3xl"></i>
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-300">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-primary-500"></i>
                Kamal Pokhari, Kathmandu
              </span>
              <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-2 shadow-sm backdrop-blur-sm">
                <i className="fa-solid fa-star text-[10px]"></i> 4.8 (1,240
                Reviews)
              </span>
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 font-black flex items-center gap-2 transition-colors"
              >
                www.goldenagete.edu.np{" "}
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 pb-4">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
              15k+ Students Enrolled
            </span>
            <div className="flex gap-4">
              <button className="px-8 py-3.5 bg-white border border-slate-100 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:text-primary-600 hover:border-primary-100 transition-all shadow-sm">
                <i className="fa-solid fa-download mr-2"></i> Brochure
              </button>
              <button className="px-8 py-3.5 bg-primary-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 active:scale-95">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 sticky top-20 z-40 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex overflow-x-auto no-scrollbar gap-10">
          {[
            "about",
            "courses",
            "admissions",
            "departments",
            "programs",
            "scholarships",
            "gallery",
            "reviews",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-6 whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] relative transition-all ${
                activeTab === tab
                  ? "text-primary-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab.replace("_", " & ")}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-600 rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* TAB: ABOUT */}
        {activeTab === "about" && (
          <div className="space-y-16 animate-fadeIn">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-8 border-l-8 border-primary-600 pl-6 uppercase tracking-tight">
                About the College
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-4xl">
                Goldenagete International College is a premier institution in
                Kathmandu, established in 2005 with a vision to provide
                world-class education focused on global competencies and local
                relevance. We offer quality education across various streams
                including Management, Humanities, and Science with
                state-of-the-art campus facilities and highly experienced
                faculty members.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AboutCard
                icon="fa-award"
                title="Vision & Mission"
                desc="To be recognized as the epicenter for modern education, producing competent and globally minded leaders."
                color="blue"
              />
              <AboutCard
                icon="fa-graduation-cap"
                title="Accreditations"
                desc="Affiliated with Tribhuvan University and recognized by the Ministry of Education, Nepal. ISO 9001 certified campus."
                color="emerald"
              />
              <AboutCard
                icon="fa-school"
                title="Campus Life"
                desc="Vibrant student life with 15+ clubs, regular events, international guest lectures, and career counseling."
                color="purple"
              />
            </div>

            <section className="bg-emerald-50 rounded-xl p-10 md:p-16 border border-emerald-100 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-40 h-40 rounded-xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  className="w-full h-full object-cover"
                  alt="Principal"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-emerald-900 mb-6 uppercase tracking-tight">
                  Principal's Message
                </h3>
                <p className="text-emerald-700 font-medium italic text-lg leading-relaxed mb-8">
                  "At Goldenagete, we don't just teach; we inspire. Our holistic
                  approach ensures that every student leaves our gates not just
                  with a degree, but with a character built on integrity and a
                  mind sharpened for the future."
                </p>
                <div>
                  <p className="font-black text-emerald-900 text-lg">
                    Dr. Ramesh Adhikari
                  </p>
                  <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mt-1">
                    Principal, PhD in Educational Leadership
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB: COURSES */}
        {activeTab === "courses" && (
          <div className="space-y-12 animate-fadeIn">
            <h2 className="text-3xl font-black text-slate-900 mb-8 border-l-8 border-primary-600 pl-6 uppercase tracking-tight">
              Undergraduate Courses
            </h2>
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <tr>
                    <th className="px-8 py-6">Course Name</th>
                    <th className="px-8 py-6">Level</th>
                    <th className="px-8 py-6">Duration</th>
                    <th className="px-8 py-6">Estimated Fees</th>
                    <th className="px-8 py-6">Focus Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-bold text-sm text-slate-600">
                  {courses.map((course, i) => (
                    <tr
                      key={i}
                      className="hover:bg-primary-50 transition-colors cursor-pointer group"
                    >
                      <td className="px-8 py-6 text-slate-900 group-hover:text-primary-600 transition-colors">
                        {course.name}
                      </td>
                      <td className="px-8 py-6">{course.level}</td>
                      <td className="px-8 py-6">{course.duration}</td>
                      <td className="px-8 py-6 font-black text-slate-800">
                        {course.fees}
                      </td>
                      <td className="px-8 py-6 text-xs">{course.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 flex items-start gap-4">
              <i className="fa-solid fa-circle-info text-amber-500 text-xl mt-1"></i>
              <div>
                <h4 className="font-black text-amber-900 uppercase tracking-widest text-sm mb-2">
                  Fee Payment Structure
                </h4>
                <p className="text-amber-700 text-sm font-medium">
                  Fees are payable in 8 installments over 4 years. The total
                  cost includes tuition, library access, and basic lab fees.
                  Examination fees are separate. A 10% discount applies for full
                  yearly upfront payments.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB: ADMISSIONS */}
        {activeTab === "admissions" && (
          <div className="space-y-16 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <section>
                <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest">
                  Eligibility Criteria
                </h2>
                <ul className="space-y-6">
                  <AdmissionItem
                    icon="fa-check-circle"
                    text="Minimum GPA 2.4 in NEB +2 or equivalent (A-Levels, CBSE)."
                  />
                  <AdmissionItem
                    icon="fa-check-circle"
                    text="CMAT/KUUMAT entrance score required for Management."
                  />
                  <AdmissionItem
                    icon="fa-check-circle"
                    text="Pass in College Internal Assessment (Written + Interview)."
                  />
                  <AdmissionItem
                    icon="fa-check-circle"
                    text="English proficiency is mandatory for international students."
                  />
                </ul>
              </section>
              <section className="bg-primary-600 rounded-xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest">
                  Documents Checklist
                </h3>
                <ul className="space-y-4">
                  {[
                    "Original Academic Transcripts (SEE & +2)",
                    "Provisional & Migration Certificates",
                    "Character Certificates",
                    "Citizenship Copy / Passport",
                    "2 Passport Size Photos",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-center gap-4 text-sm font-bold border-b border-white/10 pb-4 last:border-0"
                    >
                      <i className="fa-solid fa-file-circle-check text-primary-200"></i>
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-12 uppercase tracking-widest text-center">
                Admissions Timeline
              </h2>
              <div className="relative pl-10 space-y-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-slate-100 before:rounded-full">
                <TimelineStep
                  step="01"
                  title="Application Submission"
                  sub="May - June"
                  desc="Fill out the official college application form online and upload all scanned academic documents."
                />
                <TimelineStep
                  step="02"
                  title="Entrance Exams"
                  sub="July"
                  desc="Appear for the mandatory university/college entrance exam (CMAT/IOST). Admit cards are issued 3 days prior."
                />
                <TimelineStep
                  step="03"
                  title="Interviews & Merit List"
                  sub="August"
                  desc="Shortlisted candidates face a personal interview. Final merit list is published within a week."
                />
                <TimelineStep
                  step="04"
                  title="Enrollment & Orientation"
                  sub="September"
                  desc="Selected students must pay admission fees to secure their seat. Orientation program follows shortly."
                  isLast
                />
              </div>
            </section>

            <div className="flex justify-center">
              <button className="bg-primary-600 text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all active:scale-95">
                Start Your Application Now
              </button>
            </div>
          </div>
        )}

        {/* TAB: DEPARTMENTS */}
        {activeTab === "departments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
            <DeptCard
              icon="fa-laptop-code"
              title="IT & Computer Science"
              color="blue"
              desc="Cutting-edge technology, cloud computing, AI, and cybersecurity. Features dedicated coding labs and industry collaboration projects."
            />
            <DeptCard
              icon="fa-briefcase"
              title="Management Studies"
              color="emerald"
              desc="Financial analysis, strategic marketing, organizational behavior, and entrepreneurship. Strong tie-ups with local businesses."
            />
            <DeptCard
              icon="fa-book"
              title="Humanities & Social Science"
              color="pink"
              desc="Critical thinking, social work, mass communication, and psychology. Encourages community research and engagement."
            />
          </div>
        )}

        {/* TAB: PROGRAMS */}
        {activeTab === "programs" && (
          <div className="space-y-6 animate-fadeIn">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex gap-6 items-center">
                  <div
                    className={`w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-xl text-slate-400 group-hover:bg-primary-600 group-hover:text-white transition-all`}
                  >
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                      {program.name}
                    </h3>
                    <div className="flex gap-4">
                      <span
                        className={`px-3 py-1 rounded-lg bg-${program.color}-50 text-${program.color}-600 text-[10px] font-black uppercase tracking-widest border border-${program.color}-100`}
                      >
                        {program.category}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-100">
                        {program.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white border-2 border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-widest rounded-xl hover:border-primary-600 hover:text-primary-600 transition-all">
                  Download Syllabus
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB: SCHOLARSHIPS */}
        {activeTab === "scholarships" && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-widest">
                Scholarships & Financial Aid
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Goldenagete College offers various scholarship schemes to
                meritorious and deserving students. Last year, we awarded over{" "}
                <span className="text-primary-600 font-black">
                  NPR 50 Lakhs
                </span>{" "}
                in financial aid.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {scholarships.map((s, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full ${s.color === "yellow" ? "border-amber-200" : s.color === "blue" ? "border-blue-200" : "border-emerald-200"}`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                      {s.title}
                    </h3>
                    <span
                      className={`px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest ${s.color === "yellow" ? "bg-amber-100 text-amber-700" : s.color === "blue" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`}
                    >
                      {s.percentage}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10 flex-grow">
                    {s.description}
                  </p>
                  <div className="pt-8 border-t border-slate-50">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-4">
                      Eligibility:
                    </h4>
                    <ul className="space-y-3">
                      {s.eligibility.map((e) => (
                        <li
                          key={e}
                          className="flex items-center gap-3 text-xs font-bold text-slate-700"
                        >
                          <i className="fa-solid fa-circle-check text-emerald-500"></i>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: GALLERY */}
        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-zoom-in"
              >
                <img
                  src={img.url}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="font-black text-sm uppercase tracking-widest">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB: REVIEWS */}
        {activeTab === "reviews" && (
          <div className="space-y-16 animate-fadeIn">
            <div className="bg-white rounded-xl p-10 md:p-16 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-16">
              <div className="text-center shrink-0">
                <div className="text-7xl font-black text-slate-900 tracking-tighter mb-2">
                  4.8
                </div>
                <div className="flex gap-1 justify-center text-amber-400 text-xl mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Based on 1,240 reviews
                </p>
              </div>
              <div className="flex-1 space-y-4 w-full">
                {[
                  { l: "5 Star", w: "85%" },
                  { l: "4 Star", w: "10%" },
                  { l: "3 Star", w: "3%" },
                  { l: "2 Star", w: "1%" },
                  { l: "1 Star", w: "1%" },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-12">
                      {bar.l}
                    </span>
                    <div className="flex-1 h-3 bg-slate-50 rounded-full border border-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: bar.w }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-black text-slate-900 w-10 text-right">
                      {bar.w}
                    </span>
                  </div>
                ))}
              </div>
              <button className="px-10 py-4 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-black transition-all active:scale-95">
                Write a Review
              </button>
            </div>

            <div className="space-y-10 max-w-4xl mx-auto">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl shadow-inner ${r.avatarColor}`}
                      >
                        {r.initials}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight group-hover:text-primary-600 transition-colors">
                          {r.name}
                        </h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                          {r.role} • {r.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-amber-400 text-sm">
                      {[...Array(5)].map((_, idx) => (
                        <i
                          key={idx}
                          className={`fa-solid fa-star ${idx < r.rating ? "text-amber-400" : "text-slate-100"}`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed italic text-lg">
                    "{r.comment}"
                  </p>
                </div>
              ))}
              <button className="w-full py-5 bg-white border-2 border-slate-100 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-primary-600 hover:border-primary-100 transition-all">
                Load More Reviews
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Action Footer */}
      <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Your future at <span className="text-primary-400">Goldenagete</span>{" "}
            starts today!
          </h2>
          <p className="text-lg text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
            Take the first step towards academic excellence. Apply now for the
            2025 intake and secure your global career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary-600 text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary-950/30 hover:bg-primary-500 transition-all active:scale-95">
              Complete Application
            </button>
            <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-12 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all">
              Talk to Counselor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components helpers
const AboutCard: React.FC<{
  icon: string;
  title: string;
  desc: string;
  color: string;
}> = ({ icon, title, desc, color }) => (
  <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary-100 transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2">
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-all group-hover:scale-110 shadow-sm ${
        color === "blue"
          ? "bg-blue-50 text-blue-600"
          : color === "emerald"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-purple-50 text-purple-600"
      }`}
    >
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight leading-tight">
      {title}
    </h3>
    <p className="text-sm font-medium text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const AdmissionItem: React.FC<{ icon: string; text: string }> = ({
  icon,
  text,
}) => (
  <li className="flex items-start gap-5 group">
    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center text-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <span className="text-slate-600 font-bold text-sm leading-relaxed group-hover:text-slate-900 transition-colors pt-2">
      {text}
    </span>
  </li>
);

const TimelineStep: React.FC<{
  step: string;
  title: string;
  sub: string;
  desc: string;
  isLast?: boolean;
}> = ({ step, title, sub, desc, isLast }) => (
  <div className="relative group">
    <div
      className={`absolute -left-10 top-0 w-1 bg-slate-100 h-full ${isLast ? "hidden" : ""}`}
    ></div>
    <div className="absolute -left-12 top-0 w-5 h-5 rounded-full bg-white border-4 border-primary-600 shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 transform group-hover:translate-x-2 border-l-4 group-hover:border-l-primary-600">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest mt-1">
            {sub}
          </p>
        </div>
        <span className="text-5xl font-black text-slate-50 leading-none select-none group-hover:text-primary-50 transition-colors">
          {step}
        </span>
      </div>
      <p className="text-slate-500 font-medium text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const DeptCard: React.FC<{
  icon: string;
  title: string;
  color: string;
  desc: string;
}> = ({ icon, title, color, desc }) => (
  <div
    className={`bg-white p-10 rounded-xl border transition-all duration-500 hover:shadow-2xl group flex flex-col h-full ${
      color === "blue"
        ? "border-blue-100 hover:border-blue-400"
        : color === "emerald"
          ? "border-emerald-100 hover:border-emerald-400"
          : "border-pink-100 hover:border-pink-400"
    }`}
  >
    <div
      className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500 ${
        color === "blue"
          ? "bg-blue-600 text-white shadow-blue-200"
          : color === "emerald"
            ? "bg-emerald-600 text-white shadow-emerald-200"
            : "bg-pink-600 text-white shadow-pink-200"
      }`}
    >
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10 flex-grow">
      {desc}
    </p>
    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600 hover:text-primary-800 flex items-center gap-3 transition-all group-hover:gap-5">
      View Faculty <i className="fa-solid fa-arrow-right-long"></i>
    </button>
  </div>
);

export default CollegeDetailsPage;
