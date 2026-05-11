import { cn } from "@/lib/utils";
import { Clock, Tag } from "lucide-react";

export default function SearchHistoryCard({ query, tags, timestamp }) {
  return (
    <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h4 className="font-semibold text-slate-900 truncate pr-4">{query}</h4>
        <div className="flex items-center text-xs text-slate-400 shrink-0">
          <Clock size={12} className="mr-1" />
          {timestamp}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span 
            key={i}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200"
          >
            <Tag size={10} className="mr-1 opacity-60" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
