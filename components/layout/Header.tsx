"use client";

import { Menu, Search, Bell, Volume2 } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full h-20 glass-header flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 rounded-lg text-foreground/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Open menu</span>
        </button>

        {/* Search bar (desktop) */}
        <div className="hidden md:flex items-center relative group">
          <Search className="w-4 h-4 absolute left-3 text-foreground/40 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search projects, skills..."
            className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all w-64 lg:w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <button className="p-2 rounded-full text-foreground/60 hover:text-white hover:bg-white/10 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border border-background"></span>
        </button>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("enable-audio"))}
          aria-label="Enable audio"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-foreground/70 hover:text-white hover:bg-white/10 transition-colors sm:px-3 sm:py-2 sm:gap-2 sm:text-xs sm:font-medium"
        >
          <Volume2 className="w-4 h-4" />
          <span className="hidden sm:inline">Enable audio</span>
        </button>

        <div className="h-8 w-[1px] bg-glass-border mx-1"></div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-white">Dennis Nyaaba</p>
            <p className="text-xs text-foreground/50">AI Developer</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent p-[2px]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="/profile1.jpg"
                alt="Dennis Nyaaba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
