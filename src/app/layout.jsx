import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { satoshi } from './fonts';

import './globals.css';

export const metadata = {
  title: 'YouSearch — Search YouTube Intentionally',
  description:
    'A simple tool that helps users search YouTube intentionally and avoid tutorial hell, clickbait, and endless distractions.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.className} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
