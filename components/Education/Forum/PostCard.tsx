import React, { useState } from "react";

interface PostCardProps {
  author: string;
  authorMeta: string;
  authorAvatar: string;
  time: string;
  title: string;
  content: string;
  tags: string[];
  votes: number;
  comments: number;
  isVerified?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  authorMeta,
  authorAvatar,
  time,
  title,
  content,
  tags,
  votes,
  comments,
  isVerified,
}) => {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [voteStatus, setVoteStatus] = useState<0 | 1 | -1>(0);

  const handleVote = (val: 1 | -1) => {
    if (voteStatus === val) {
      setCurrentVotes((prev) => prev - val);
      setVoteStatus(0);
    } else {
      setCurrentVotes((prev) => prev - voteStatus + val);
      setVoteStatus(val);
    }
  };

  return (
    <article className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary-100 transition-all duration-500 group animate-fadeInUp">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=${authorAvatar}`}
              className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
              alt="User"
            />
            {isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white">
                <i className="fa-solid fa-check"></i>
              </div>
            )}
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm hover:text-primary-600 cursor-pointer transition-colors flex items-center gap-2">
              {author}
              <span className="text-[9px] bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-100 uppercase tracking-widest">
                {authorMeta}
              </span>
            </h4>
            <div className="text-[10px] text-slate-300 font-black uppercase tracking-widest mt-1 flex items-center gap-2">
              <span>{time}</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <span className="flex items-center gap-1">
                <i className="fa-solid fa-earth-asia"></i> Campus Network
              </span>
            </div>
          </div>
        </div>
        <button className="text-slate-300 hover:text-primary-600 p-2 rounded-xl hover:bg-primary-50 transition-all">
          <i className="fa-solid fa-ellipsis text-xl"></i>
        </button>
      </div>

      {/* Content */}
      <div className="mb-8">
        <h3 className="font-black text-xl text-slate-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-slate-500 text-base leading-relaxed mb-6 font-medium">
          {content}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="bg-primary-50 text-primary-600 text-[10px] font-black px-4 py-2 rounded-xl border border-primary-100 hover:bg-primary-600 hover:text-white transition-all uppercase tracking-widest"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Footer / Interaction */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100 shadow-inner">
            <button
              onClick={() => handleVote(1)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all active:scale-90 ${voteStatus === 1 ? "bg-primary-600 text-white shadow-lg" : "text-slate-400 hover:text-primary-600 hover:bg-white"}`}
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <span
              className={`px-4 text-sm font-black min-w-[50px] text-center ${voteStatus === 1 ? "text-primary-600" : voteStatus === -1 ? "text-rose-600" : "text-slate-800"}`}
            >
              {currentVotes}
            </span>
            <button
              onClick={() => handleVote(-1)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all active:scale-90 ${voteStatus === -1 ? "bg-rose-600 text-white shadow-lg" : "text-slate-400 hover:text-rose-600 hover:bg-white"}`}
            >
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>

          <button className="flex items-center gap-3 px-6 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-emerald-600 transition-all active:scale-95 group/com border border-transparent hover:border-emerald-100">
            <i className="fa-solid fa-comment-dots text-lg group-hover/com:scale-110 transition-transform"></i>
            <span className="font-black text-xs uppercase tracking-widest">
              {comments} Answers
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-12 h-12 flex items-center justify-center border border-slate-100 rounded-2xl text-slate-300 hover:text-amber-500 hover:bg-amber-50 transition-all active:scale-90 shadow-sm">
            <i className="fa-regular fa-bookmark text-xl"></i>
          </button>
          <button className="w-12 h-12 flex items-center justify-center border border-slate-100 rounded-2xl text-slate-300 hover:text-primary-600 hover:bg-primary-50 transition-all active:scale-90 shadow-sm">
            <i className="fa-solid fa-share-nodes text-xl"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
