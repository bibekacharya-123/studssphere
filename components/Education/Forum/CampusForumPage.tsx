import React, { useState } from "react";
import ForumSidebar from "./ForumSidebar";
import PostCard from "./PostCard";
import TrendingSidebar from "./TrendingSidebar";

interface CampusForumPageProps {
  onNavigate: (view: any) => void;
}

const CampusForumPage: React.FC<CampusForumPageProps> = ({ onNavigate }) => {
  const [activeCommunity, setActiveCommunity] = useState("Home Feed");

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta selection:bg-primary-600 selection:text-white">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar - Full Navigation */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
            <ForumSidebar
              activeCommunity={activeCommunity}
              onSelect={setActiveCommunity}
            />

            {/* Promo Card */}
            <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-blue-800 p-6 text-white shadow-xl shadow-primary-500/20 group cursor-pointer transition-all hover:shadow-2xl">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h4 className="font-black text-lg mb-2 leading-tight uppercase tracking-tight">
                  Lok Sewa Aayog Prep
                </h4>
                <p className="text-blue-100 text-xs mb-6 font-bold opacity-80 uppercase tracking-widest">
                  Download our free PDF guide for 2082 syllabus.
                </p>
                <button className="bg-white text-primary-600 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] w-full hover:bg-blue-50 transition shadow-sm active:scale-95">
                  Download PDF
                </button>
              </div>
            </div>
          </aside>

          {/* Center Feed */}
          <main className="col-span-1 lg:col-span-6 space-y-6">
            {/* Post Input Component */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 transition-all hover:shadow-lg">
              <div className="flex gap-4 mb-4">
                <img
                  src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
                  alt="User"
                  className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner"
                />
                <button className="flex-1 text-left bg-slate-50 hover:bg-slate-100 text-slate-400 py-3.5 px-6 rounded-2xl text-sm border border-slate-200 transition-all font-bold focus:ring-4 focus:ring-primary-50">
                  Ask a question about TU/KU, or share study tips...
                </button>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex gap-2">
                  <ActionButton
                    icon="fa-image"
                    label="Photo"
                    color="text-emerald-500"
                  />
                  <ActionButton
                    icon="fa-link"
                    label="Link"
                    color="text-primary-500"
                  />
                  <ActionButton
                    icon="fa-chart-simple"
                    label="Poll"
                    color="text-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Pinned Notice */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-5 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-blue-100 text-primary-600 font-black text-[9px] px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">
                Pinned Notice
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary-600 shadow-sm border border-blue-100 flex-shrink-0">
                <i className="fa-solid fa-bullhorn text-xl animate-pulse"></i>
              </div>
              <div className="pr-10">
                <h3 className="font-black text-slate-800 text-sm mb-1 uppercase tracking-tight">
                  New Policy: Academic Project Guidelines
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-bold">
                  Ensure your project posts follow the plagiarism guidelines.{" "}
                  <a href="#" className="text-primary-600 hover:underline">
                    View rules
                  </a>
                </p>
              </div>
            </div>

            {/* Main Discussions */}
            <div className="space-y-6">
              <PostCard
                author="Sarah Sharma"
                authorMeta="BIM 4th Sem"
                authorAvatar="Sarah"
                time="2 hours ago"
                title="Best resources for studying Data Structure in C for TU?"
                content="I'm struggling with linked lists and trees in Data Structure (BIM 4th Sem, TU). Can anyone recommend the best Nepali authors or online courses that explain these topics clearly based on the TU syllabus?"
                tags={["TU_BIM", "DataStructure", "ComputerScience"]}
                votes={45}
                comments={12}
                isVerified
              />
              <PostCard
                author="Aayush K.C."
                authorMeta="Alumni (KU)"
                authorAvatar="John"
                time="5 hours ago"
                title="Is the CTEVT Pre-Board Exam routine official for Diploma in Engineering?"
                content="I saw a routine circulating on Telegram groups but I cannot find it on the official CTEVT website. Can anyone confirm if it is authentic? Worried about the dates overlapping!"
                tags={["CTEVT", "Engineering", "BoardExam"]}
                votes={128}
                comments={34}
              />
            </div>

            {/* Load More */}
            <button className="w-full py-5 bg-white border border-slate-200 text-primary-600 font-black rounded-2xl hover:bg-primary-50 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95 text-xs uppercase tracking-widest">
              <span>Load More Discussions</span>
              <i className="fa-solid fa-chevron-down text-[10px]"></i>
            </button>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-8">
            <TrendingSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

const ActionButton: React.FC<{
  icon: string;
  label: string;
  color: string;
}> = ({ icon, label, color }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-all active:scale-95 group">
    <i
      className={`fa-solid ${icon} ${color} text-lg group-hover:scale-110`}
    ></i>
    <span className="text-[10px] font-black uppercase tracking-widest">
      {label}
    </span>
  </button>
);

export default CampusForumPage;
