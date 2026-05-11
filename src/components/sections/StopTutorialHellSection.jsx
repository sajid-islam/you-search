'use client';

import Container from '@/components/ui/Container';
import { AlertCircle, CheckCircle2, Save } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StopTutorialHellSection() {
  const [searches, setSearches] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        if (data.searches) setSearches(data.searches);
      } catch (err) {
        console.error('Failed to fetch stats', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Subtle decorative elements */}
      <div className="from-primary/5 absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l to-transparent" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl leading-tight font-bold text-slate-900">
              You don&apos;t need more tutorials.
              <br />
              <span className="text-primary">You need intentional learning.</span>
            </h2>
            <p className="mb-10 text-lg text-slate-500">
              The cycle of watching without doing is the biggest obstacle to mastery. YouSearch
              helps you find exactly what you need to build, not just watch.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-1 text-2xl font-bold text-slate-900">
                  {searches.toLocaleString()}+
                </div>
                <div className="text-sm font-medium text-slate-400">Tutorials searched</div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-1 text-2xl font-bold text-slate-900">
                  {Math.floor((searches * 15) / 60).toLocaleString()}h
                </div>
                <div className="text-sm font-medium text-slate-400">Hours saved</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50">
              <div className="mb-6 flex items-center space-x-3 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <AlertCircle className="text-amber-500" size={20} />
                <p className="text-sm font-medium text-amber-800">
                  You searched &quot;React tutorials&quot; 12 times this week.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="font-medium text-slate-600">
                    Generated cleaner search result
                  </span>
                </div>
                <div className="flex items-center space-x-3 rounded-xl border border-slate-100 bg-slate-50 p-4 opacity-60">
                  <Save className="text-blue-500" size={18} />
                  <span className="font-medium text-slate-600">
                    Saved to &quot;Next.js Mastery&quot; path
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Productivity Score: 98%
                </span>
              </div>
            </div>

            {/* Abstract shapes behind the card */}
            <div className="absolute -top-6 -right-6 -z-10 h-full w-full rotate-3 transform rounded-3xl bg-blue-600/5" />
          </div>
        </div>
      </Container>
    </section>
  );
}
