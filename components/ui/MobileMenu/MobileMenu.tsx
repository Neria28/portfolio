"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  menuList: { href: string; label: string }[];
}

export const MobileMenu = ({
  menuList,
}: MobileMenuProps): React.ReactElement => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
          tabIndex={0}
          className="absolute right-0.5 backdrop-blur-md backdrop-brightness-150 rounded-lg py-3 px-6 border border-(--primary-light)"
        >
          <ul className="flex flex-col gap-4">
            {menuList.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-white transition-colors",
                    pathname === link.href && "font-bold text-(--primary-color)"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
