"use client";
import Link from "next/link";
import Icon from "../icons/icon";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Children } from "react";

const links: { href: string; text: string }[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/links", text: "Links" },
];

export const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <header className={className}>
      <div>
        <Link href="/">
          <Icon.Logo className="fill-white" />
        </Link>
      </div>
      <nav>
        <div className="flex gap-6">
          {links.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className={cn(
                  "text-white hover:text-(--primary-color) transition-colors",
                  pathname === link.href &&
                    "font-bold text-(--primary-color)"
                )}
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
