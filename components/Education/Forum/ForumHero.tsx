import React, { useState } from "react";

const ForumHero: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-16 md:py-24 px-6">
      {/* Animated Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-600 blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600 blur-[100px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center animate-fadeInUp">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
          <i className="fa-solid fa-users text-amber-400"></i>
          Connect with 50k+ students
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter uppercase">
          StudSphere{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-primary-400 underline decoration-primary-500/30">
            Community
          </span>{" "}
          Hub
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed mb-10">
          The central pulse of Nepali academics. Share notes, discuss entrance
          strategies, and stay ahead with official notices.
        </p>

        {/* Global Search Bar */}
        <form
          className="relative w-full max-w-2xl group"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden p-1.5 border border-white/20">
            <div className="pl-6 text-slate-400 group-focus-within:text-primary-600 transition-colors">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search TU, KU, Medical CEE, or study tips..."
              className="flex-1 py-4 px-6 bg-transparent text-slate-800 text-lg border-0 outline-none placeholder-slate-400 font-bold"
            />
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 font-black rounded-xl transition-all active:scale-95 uppercase tracking-widest text-[10px] shadow-xl shadow-primary-500/20"
            >
              Search Forum
            </button>
          </div>
          <div className="absolute top-1/2 right-[150px] -translate-y-1/2 pointer-events-none hidden md:block">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded border border-slate-200">
              Ctrl + K
            </span>
          </div>
        </form>

        {/* Quick Topics */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            Popular Hubs:
          </span>
          {["#TU_IOE", "#CEE_Medical", "#CTEVT_Exam", "#CSIT_Notes"].map(
            (tag) => (
              <button
                key={tag}
                className="text-sm font-bold text-slate-400 hover:text-white transition-colors border-b border-white/10 hover:border-white"
              >
                {tag}
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ForumHero;
