'use client';

import CTAButton from '@/components/ui/CTAButton';
import { useSearchDialog } from '@/context/SearchDialogContext';
import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function HeroSearchBox() {
  const [inputValue, setInputValue] = useState('');
  const { openDialog } = useSearchDialog();

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="group relative">
        {/* Background glow */}
        <div className="from-primary to-secondary absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-20 blur transition duration-1000 group-hover:opacity-30 group-hover:duration-200"></div>

        <div className="shadow-primary/5 relative rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl">
          <div className="flex items-center">
            <div className="relative flex flex-grow items-center">
              <Search className="absolute left-4 text-slate-400" size={20} />
              <input
                type="text"
                autoFocus
                placeholder="What do you want to learn? (e.g. Next.js auth)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full border-none bg-transparent py-3.5 pr-4 pl-12 text-base text-slate-900 placeholder-slate-400 focus:ring-0 focus:outline-none md:text-lg"
              />
            </div>

            <div className="shrink-0">
              <CTAButton
                className="flex items-center space-x-2 rounded-xl"
                onClick={() => {
                  openDialog(inputValue);
                  setInputValue('');
                }}
              >
                <Sparkles size={16} />
                <span className="hidden sm:inline">Generate Search</span>
                <span className="sm:hidden">Generate</span>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-slate-400">Less distractions. More learning.</p>
    </div>
  );
}
