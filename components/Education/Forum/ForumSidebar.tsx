import React from "react";

interface ForumSidebarProps {
  activeCommunity: string;
  onSelect: (name: string) => void;
}

const ForumSidebar: React.FC<ForumSidebarProps> = ({
  activeCommunity,
  onSelect,
}) => {
  return (
    <div className="space-y-6">
      {/* Personal Feed Section */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <h3 className="px-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 mt-2">
          Personal Hub
        </h3>
        <nav className="space-y-1">
          <SidebarItem
            icon="ph-fill ph-house"
            label="Home Feed"
            active={activeCommunity === "Home Feed"}
            onClick={() => onSelect("Home Feed")}
          />
          <SidebarItem
            icon="ph-fill ph-fire text-amber-500"
            label="Trending"
            active={activeCommunity === "Trending"}
            onClick={() => onSelect("Trending")}
          />
          <SidebarItem
            icon="ph-fill ph-bookmark-simple text-primary-500"
            label="Saved Posts"
            active={activeCommunity === "Saved Posts"}
            onClick={() => onSelect("Saved Posts")}
          />
        </nav>
      </div>

      {/* Communities Section */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <h3 className="px-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 mt-2">
          Followed Hubs
        </h3>
        <nav className="space-y-1">
          <SidebarItem
            icon="fa-solid fa-user-doctor text-rose-500"
            label="Medical CEE"
            badge="New"
            active={activeCommunity === "Medical CEE"}
            onClick={() => onSelect("Medical CEE")}
          />
          <SidebarItem
            icon="fa-solid fa-code text-blue-500"
            label="BSc CSIT Hub"
            active={activeCommunity === "BSc CSIT Hub"}
            onClick={() => onSelect("BSc CSIT Hub")}
          />
          <SidebarItem
            icon="fa-solid fa-building-columns text-emerald-500"
            label="Lok Sewa Aayog"
            active={activeCommunity === "Lok Sewa Aayog"}
            onClick={() => onSelect("Lok Sewa Aayog")}
          />
        </nav>
        <button className="w-full mt-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary-600 transition-colors border-t border-slate-50">
          Discover Hubs <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </button>
      </div>

      {/* Categories Browsing */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <h3 className="px-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 mt-2">
          Browse Faculties
        </h3>
        <nav className="space-y-1">
          <CategoryItem
            label="Engineering"
            count={85}
            icon="fa-gear text-slate-400"
          />
          <CategoryItem
            label="Management"
            count={120}
            icon="fa-chart-pie text-slate-400"
          />
          <CategoryItem
            label="Science"
            count={54}
            icon="fa-atom text-slate-400"
          />
          <CategoryItem
            label="Medicine"
            count={32}
            icon="fa-heart-pulse text-slate-400"
          />
        </nav>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
  onClick: () => void;
}> = ({ icon, label, active, badge, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${active ? "bg-primary-50 text-primary-600 shadow-sm border border-primary-100" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
  >
    <div
      className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg shadow-sm ${active ? "bg-white" : "bg-slate-50 group-hover:bg-white"} transition-colors`}
    >
      <i className={icon.includes("ph") ? icon : icon}></i>
    </div>
    <span className="flex-1 text-left text-sm font-black tracking-tight">
      {label}
    </span>
    {badge && (
      <span className="text-[8px] font-black bg-rose-500 text-white px-1.5 py-0.5 rounded-md uppercase tracking-widest animate-pulse">
        {badge}
      </span>
    )}
  </button>
);

const CategoryItem: React.FC<{
  icon: string;
  label: string;
  count: number;
}> = ({ icon, label, count }) => (
  <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group">
    <div className="flex items-center gap-4">
      <i
        className={`fa-solid ${icon} text-sm group-hover:text-primary-600 transition-colors`}
      ></i>
      <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900">
        {label}
      </span>
    </div>
    <span className="text-[9px] font-black text-slate-300 group-hover:text-primary-500">
      {count}
    </span>
  </button>
);

export default ForumSidebar;
