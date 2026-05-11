"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";
import YouSearchLogo from "@/icons/logo.icon";

import { useSearchDialog } from "@/context/SearchDialogContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openDialog } = useSearchDialog();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4",
      )}
    >
      <div 
        className={cn(
          "max-w-5xl mx-auto rounded-full transition-all duration-300 px-6 py-2 border",
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg border-slate-200/50 py-3" 
            : "bg-transparent border-transparent"
        )}
      >
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <YouSearchLogo size={18} color="#FFFFFF" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              YouSearch
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <CTAButton 
              variant="primary" 
              size="sm"
              onClick={() => openDialog()}
            >
              Try Now
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
