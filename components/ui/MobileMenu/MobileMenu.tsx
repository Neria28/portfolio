"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "../shadcn-io/theme-switcher";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  menuList: { href: string; label: string }[];
}

export const MobileMenu = ({
  menuList,
}: MobileMenuProps): React.ReactElement => {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="block md:hidden relative">
      <button
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="font-medium rounded-lg text-sm text-center inline-flex items-center"
      >
        <Menu className="size-6" />
      </button>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end top-13 right-8"
          onPointerDown={(e) => {
            if ((e.target as HTMLElement).dataset.menuBackdrop === "true") {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div
            data-menu-backdrop="true"
            className="absolute inset-0"
          />
          <div className="absolute right-0.5 backdrop-blur-md backdrop-brightness-250 rounded-lg py-3 px-6 border border-primary">
            <ul className="flex flex-col gap-4 items-center">
              {menuList.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-main transition-colors",
                      pathname === link.href &&
                        "font-bold text-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <ThemeSwitcher value={theme} onChange={setTheme} />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
