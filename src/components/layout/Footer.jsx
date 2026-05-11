'use client';

import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container';
import GithubIcon from '@/icons/github.icon';
import YouSearchLogo from '@/icons/logo.icon';
import Link from 'next/link';
import { Eye } from 'lucide-react';

export default function Footer() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        if (data.visitors) setVisitors(data.visitors);
      } catch (err) {
        console.error('Failed to fetch stats', err);
      }
    };
    fetchStats();
  }, []);
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <YouSearchLogo size={18} color="#FFFFFF" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">YouSearch</span>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              href="#features"
              className="hover:text-primary text-sm text-slate-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-primary text-sm text-slate-500 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className="hover:text-primary text-sm text-slate-500 transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
              <Eye size={14} className="text-slate-400" />
              <span className="text-xs font-medium text-slate-500">{visitors.toLocaleString()}</span>
            </div>
            <a
              href="https://github.com/sajid-islam/you-search"
              title="Contribute to YouSearch on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all"
            >
              <GithubIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-slate-50 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} YouSearch. All rights reserved. Built for intentional
            learning.
          </p>
          <p className="text-sm text-slate-400">
            Built with ❤️ by{' '}
            <a
              href="https://sajid-islam.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              sajid
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
