"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Cpu, ChartBar, Mail, Atom } from "lucide-react";

export const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/#projects", icon: Grid },
  { name: "AI Agents", href: "/?category=ai-agents#projects", icon: Cpu },
  { name: "Data Science", href: "/?category=data-science#projects", icon: ChartBar },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 z-50 glass-panel border-r border-glass-border">
      <div className="flex items-center h-20 px-6 border-b border-glass-border">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Atom className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
          </div>
          <span className="text-lg font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
            DENNIS.N
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        <div className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider mb-4 px-2">
          Navigation
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                isActive
                  ? "text-white bg-white/5"
                  : "text-foreground/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary rounded-r-full" />
              )}
              <item.icon
                className={`w-5 h-5 ${
                  isActive ? "text-primary" : "text-foreground/50 group-hover:text-primary"
                } transition-colors duration-200`}
              />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-glass-border">
        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h4 className="text-sm font-semibold text-white mb-1">Available for work</h4>
          <p className="text-xs text-foreground/60 mb-3">Let's build something amazing together.</p>
          <Link
            href="/#contact"
            className="block text-center text-xs font-medium bg-primary/20 hover:bg-primary/40 text-white py-2 rounded-lg transition-colors border border-primary/30"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </aside>
  );
}
