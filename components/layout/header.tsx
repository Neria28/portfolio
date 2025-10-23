"use client";
import Link from "next/link";
import Icon from "../icons/icon";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu } from "lucide-react";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/links", label: "Links" },
];

export const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={className}>
      <div>
        <Link href="/">
          <Icon.Logo />
        </Link>
      </div>
      <nav className="hidden md:block">
        <div className="flex gap-6">
          {links.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className={cn(
                  "text-white hover:text-(--primary-color) transition-colors",
                  pathname === link.href && "font-bold text-(--primary-color)"
                )}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <nav className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="font-medium rounded-lg text-sm text-center inline-flex items-center"
        >
          <Menu className="size-6" />
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col gap-2 mt-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-white hover:text-(--primary-color) transition-colors",
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
      </nav>
    </header>
  );
};
