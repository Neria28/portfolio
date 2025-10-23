"use client";
import Link from "next/link";
import Icon from "../icons/icon";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MobileMenu } from "../ui/MobileMenu/MobileMenu";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/links", label: "Links" },
];

export const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();

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
      <MobileMenu menuList={links} />
    </header>
  );
};
