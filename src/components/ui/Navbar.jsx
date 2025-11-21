"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = ({
  items = [],
  className = "",
}) => {
  const pathname = usePathname();
  const [hovering, setHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => {
    if (!items || items.length === 0) return 0;
    const index = items.findIndex((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname?.startsWith(item.href);
    });
    return index >= 0 ? index : 0;
  });

  const isExternalLink = (href) =>
    href?.startsWith("http://") ||
    href?.startsWith("https://") ||
    href?.startsWith("//") ||
    href?.startsWith("mailto:") ||
    href?.startsWith("tel:") ||
    href?.startsWith("#");

  const isActive = (item) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(item.href);
  };

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 w-full px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 md:pt-4", className)}>
      <nav
        className={cn(
          "flex flex-row items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 relative overflow-x-auto sm:overflow-visible no-visible-scrollbar",
          "w-full min-h-[48px] sm:min-h-[52px] md:min-h-[56px] max-w-7xl mx-auto rounded-[20px] sm:rounded-[24px] md:rounded-[32px]",
          "bg-white/5 backdrop-blur-xl border border-white/10"
        )}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
          {items && items.length > 0 && items.map((item, idx) => {
            const active = isActive(item);
            const isRouterLink = !isExternalLink(item.href);

            return (
              <div key={item.href || idx} className="relative flex-shrink-0">
                {active && (
                  <motion.div
                    layoutId="activeNavItem"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 bg-white/10 dark:bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
                    )}
                  />
                )}

                {isRouterLink ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
                      "text-white/90 hover:text-white",
                      active && "text-white"
                    )}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "relative block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
                      "text-white/90 hover:text-white",
                      active && "text-white"
                    )}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            );
          })}
        </nav>
    </div>
  );
};

export default Navbar;
