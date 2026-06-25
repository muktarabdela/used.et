// src/components/BottomNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  // Define your navigation items here
  const navItems = [
    { name: "Home", href: "/product", icon: "home" },
    { name: "Categories", href: "/product", icon: "grid_view" },
    { name: "Post Ad", href: "/post-ad", icon: "add_circle" },
    { name: "Profile", href: "/profile", icon: "person" },
  ];

  // We don't want to show the bottom nav on the onboarding or register pages
  if (pathname === "/onboarding" || pathname === "/auth/register") {
    return null;
  }

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center bg-surface dark:bg-surface-container-lowest py-2 px-margin-mobile border-t border-outline-variant dark:border-outline shadow-[0px_-2px_10px_rgba(0,0,0,0.04)] rounded-t-xl">
      {navItems.map((item) => {
        // Check if the current route matches the button's link
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-200 ${
              isActive
                ? "text-primary dark:text-primary-fixed-dim bg-primary-container/10 rounded-full py-1 px-4 hover:bg-secondary-container dark:hover:bg-on-secondary-fixed-variant"
                : "text-secondary dark:text-secondary-fixed-dim hover:bg-secondary-container dark:hover:bg-on-secondary-fixed-variant p-2 rounded-lg"
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="font-label-sm text-label-sm mt-1">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}