"use client";

import { useState } from "react";
import { Search, ChevronDown, Sparkles } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function HeroSearchBox() {
  const [level, setLevel] = useState("Intermediate");
  const [type, setType] = useState("Project Based");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        {/* Background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-white rounded-2xl shadow-xl shadow-primary/5 border border-slate-100 p-2 md:p-3">
          <div className="flex flex-col space-y-3">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-slate-400" size={20} />
              <input 
                type="text"
                placeholder="What do you want to learn? (e.g. Next.js authentication)"
                className="w-full pl-12 pr-4 py-4 bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-3 px-2 pb-2">
              <div className="relative">
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option>Playlist</option>
                  <option>Crash Course</option>
                  <option>Project Based</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>

              <div className="ml-auto">
                <CTAButton className="flex items-center space-x-2">
                  <Sparkles size={16} />
                  <span>Generate Search</span>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-slate-400">
        Less distractions. More learning.
      </p>
    </div>
  );
}
