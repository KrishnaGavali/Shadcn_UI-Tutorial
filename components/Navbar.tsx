"use client";
import React from "react";
import { Bell, Clock, Heart, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="w-full flex items-center px-6 py-2">
      {/* Logo */}
      <div className="flex items-center gap-x-2 font-bold text-lg w-1/4 min-w-[180px]">
        <Heart className="text-primary" size={24} />
        <span className="text-primary">Pulse Connect</span>
      </div>

      {/* Search Bar */}
      <div className="w-1/2 px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-popover text-popover-foreground border border-input rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
      </div>

      {/* Nav Icons */}
      <div className="w-1/4 flex items-center justify-end gap-x-6">
        <div className="flex flex-col items-center text-muted-foreground hover:text-primary transition cursor-pointer">
          <Clock size={20} />
          <span className="text-xs mt-1">Alert</span>
        </div>
        <div className="flex flex-col items-center text-muted-foreground hover:text-primary transition cursor-pointer">
          <Bell size={20} />
          <span className="text-xs mt-1">Notifications</span>
        </div>
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="flex items-center justify-center border border-border bg-accent text-accent-foreground rounded-lg p-2 hover:bg-primary hover:text-primary-foreground transition"
          aria-label="Toggle theme"
        >
          {resolvedTheme === "light" ? (
            <Moon className="text-primary" size={20} />
          ) : (
            <Sun className="text-yellow-500" size={20} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
