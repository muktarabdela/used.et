// src/components/TopNav.tsx
"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <header className="fixed top-0 w-full z-50 bg-primary rounded-b-[24px] shadow-md pb-4 pt-4 px-margin-mobile flex flex-col gap-4 transition-all">
      
      {/* Top Row: Title & Notification Action */}
      <div className="flex items-center justify-between h-8">
        <Link href="/" className="font-extrabold text-2xl tracking-tight text-white drop-shadow-sm">
          <span className="text-white">Used</span>
          <span className="text-green-400">.</span>
          <span className="text-white">ET</span>
        </Link>
        <button className="relative flex items-center justify-center p-2 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-white">notifications</span>
          {/* Notification Red Dot */}
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-primary"></span>
        </button>
      </div>

      {/* Search Bar Row (Overlapping Style) */}
      <div className="flex items-center gap-3 bg-surface rounded-full px-4 py-3 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] w-full">
        <span className="material-symbols-outlined text-on-surface-variant">search</span>
        <input 
          className="bg-transparent border-none focus:ring-0 w-full font-body-lg text-on-surface placeholder:text-on-surface-variant outline-none" 
          placeholder="Search products..." 
          type="text" 
        />
        <button className="flex items-center justify-center active:scale-95 transition-transform border-l border-outline-variant pl-3">
          {/* This is the filter/tune icon from the screenshot */}
          <span className="material-symbols-outlined text-primary">tune</span>
        </button>
      </div>
      
    </header>
  );
}