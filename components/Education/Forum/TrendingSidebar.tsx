import React from "react";

const TrendingSidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Latest University Notices */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-500">
        <div className="bg-slate-50 p-6 border-b border-slate-50 flex items-center justify-between">
          <h3 className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase">
            LATEST NOTICES
          </h3>
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
        </div>
        <div className="divide-y divide-slate-50">
          <NoticeItem
            board="TU"
            color="text-rose-600 bg-rose-50 border-rose-100"
            time="1h ago"
            title="BBA 8th Semester Exam Form Fill-up Notice 2082"
          />
          <NoticeItem
            board="KU"
            color="text-amber-600 bg-amber-50 border-amber-100"
            time="3h ago"
            title="Engineering Admission Merit List 2081 Published"
          />
          <NoticeItem
            board="NEB"
            color="text-blue-600 bg-blue-50 border-blue-100"
            time="5h ago"
            title="Class 12 Re-totaling Results declared for Science"
          />
        </div>
        <button className="w-full text-center py-4 text-[10px] font-black uppercase tracking-widest text-primary-600 bg-slate-50 hover:bg-primary-50 border-t border-slate-50 transition-all group/btn">
          View All Notices{" "}
          <i className="fa-solid fa-arrow-right-long ml-2 transition-transform group-hover/btn:translate-x-1"></i>
        </button>
      </div>

      {/* Top Contributors */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em]">
            TOP GUIDES
          </h3>
          <button className="text-[9px] text-primary-600 font-black hover:underline uppercase tracking-widest">
            Board
          </button>
        </div>
        <div className="space-y-6">
          <ContributorItem
            name="Rohan Das"
            rep="1.2k"
            seed="Bob"
            crown="text-amber-500"
            isFollowing
          />
          <ContributorItem
            name="Priya Singh"
            rep="980"
            seed="Alice"
            crown="text-slate-300"
          />
          <ContributorItem
            name="Sunil Malla"
            rep="850"
            seed="Felix"
            crown="text-orange-300"
          />
        </div>
        <button className="w-full mt-10 py-4 bg-primary-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-primary-500/10 hover:bg-primary-700 transition-all active:scale-95">
          See Leaderboard
        </button>
      </div>

      {/* Footer Links (Mini) */}
      <div className="px-4">
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
          <button className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">
            About
          </button>
          <button className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">
            Guidelines
          </button>
          <button className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">
            Privacy
          </button>
        </div>
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
          © 2082 StudSphere Nepal Network
        </p>
      </div>
    </div>
  );
};

const NoticeItem: React.FC<{
  board: string;
  color: string;
  time: string;
  title: string;
}> = ({ board, color, time, title }) => (
  <a href="#" className="block p-5 hover:bg-slate-50 transition-colors group">
    <div className="flex items-center justify-between mb-2">
      <span
        className={`text-[9px] font-black px-2 py-0.5 rounded-md border uppercase tracking-widest ${color}`}
      >
        {board}
      </span>
      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
        {time}
      </span>
    </div>
    <p className="text-xs text-slate-700 font-bold leading-relaxed group-hover:text-primary-600 transition-colors">
      {title}
    </p>
  </a>
);

const ContributorItem: React.FC<{
  name: string;
  rep: string;
  seed: string;
  crown: string;
  isFollowing?: boolean;
}> = ({ name, rep, seed, crown, isFollowing }) => (
  <div className="flex items-center gap-4 group">
    <div className="relative">
      <img
        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${seed}`}
        className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
        alt=""
      />
      <div className={`absolute -top-1.5 -left-1.5 ${crown} drop-shadow-md`}>
        <i className="fa-solid fa-crown text-sm"></i>
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-black text-xs text-slate-800 truncate uppercase tracking-tight">
        {name}
      </h4>
      <div className="flex items-center gap-2 mt-1">
        <i className="fa-solid fa-star text-amber-400 text-[10px]"></i>
        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
          {rep} Rep
        </span>
      </div>
    </div>
    <button
      className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${isFollowing ? "bg-slate-100 text-slate-500 hover:bg-slate-200" : "bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white border border-primary-100"}`}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  </div>
);

export default TrendingSidebar;
