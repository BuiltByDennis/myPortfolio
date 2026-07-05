"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Atom } from "lucide-react";
import { navItems } from "./Sidebar";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm md:hidden transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 z-[70] w-3/4 max-w-sm glass-panel border-r border-glass-border md:hidden flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between h-20 px-6 border-b border-glass-border">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Atom className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold tracking-wide text-foreground">DENNIS.T</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-foreground/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-white bg-primary/20 border border-primary/20"
                    : "text-foreground/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive ? "text-primary" : "text-foreground/50"
                  }`}
                />
                <span className="font-medium text-lg">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
