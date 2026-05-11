import { satoshi } from './fonts';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SearchDialogProvider } from "@/context/SearchDialogContext";
import SearchDialog from "@/components/ui/SearchDialog";

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
        <SearchDialogProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <SearchDialog />
        </SearchDialogProvider>
      </body>
    </html>
  );
}
