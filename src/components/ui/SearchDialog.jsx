'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useSearchDialog } from '@/context/SearchDialogContext';
import YouSearchLogo from '@/icons/logo.icon';
import { Check, Copy, ExternalLink, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function SearchDialog() {
  const { isOpen, query, setQuery, closeDialog } = useSearchDialog();
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const youtubeLink = query
    ? `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    : '';

  const logSearch = async () => {
    try {
      await fetch('/api/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'search' }),
      });
    } catch (err) {
      console.error('Failed to log search action', err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(youtubeLink);
    setCopied(true);
    logSearch();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenYoutube = () => {
    if (youtubeLink) {
      logSearch();
      window.open(youtubeLink, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent className="flex h-[480px] flex-col overflow-hidden rounded-[2rem] border-slate-200 bg-white p-10 shadow-2xl sm:max-w-2xl">
        <DialogHeader className="">
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
            <YouSearchLogo className="rounded-xl bg-black p-1" size={32} />
            YouSearch Search
          </DialogTitle>
          <DialogDescription className="text-base text-slate-500">
            Generate a clean YouTube search link and stay focused.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-4">
          <div className="group relative">
            <div className="from-primary to-secondary absolute -inset-1 rounded-xl bg-gradient-to-r opacity-10 blur transition duration-300 group-focus-within:opacity-20"></div>
            <div className="relative flex items-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
              <Search className="mr-3 text-slate-400" size={22} />
              <input
                type="text"
                ref={inputRef}
                placeholder="What do you want to learn?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border-none bg-transparent text-lg text-slate-900 placeholder-slate-400 focus:ring-0 focus:outline-none"
              />
            </div>
          </div>

          {youtubeLink && (
            <div className="animate-in fade-in slide-in-from-top-2 space-y-4 duration-300">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Generated YouTube Link
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-grow truncate rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 font-mono text-sm text-slate-600">
                  {youtubeLink}
                </div>
                <button
                  onClick={handleCopy}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
                >
                  {copied ? <Check size={22} className="text-green-500" /> : <Copy size={22} />}
                </button>
              </div>

              <CTAButton
                onClick={handleOpenYoutube}
                className="flex w-full items-center justify-center gap-3 rounded-xl py-4 text-base"
              >
                <ExternalLink size={20} />
                <span>Open in YouTube</span>
              </CTAButton>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
