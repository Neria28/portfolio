"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "../icons/icon";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MobileMenu } from "../ui/MobileMenu/MobileMenu";
import { ThemeSwitcher } from "../ui/shadcn-io/theme-switcher";
import { useTheme } from "next-themes";
import {
  ThemeToggleButton,
  useThemeTransition,
} from "../ui/shadcn-io/theme-toggle-button";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/links", label: "Links" },
];

export const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(true);
  const { startTransition } = useThemeTransition();

  const handleThemeToggle = () => {
    startTransition(() => {
      const currentTheme = isDark ? "light" : "dark";
      setTheme(currentTheme);
      setIsDark(currentTheme === "dark");
    });
  };

  return (
    <header className={className}>
      <div>
        <Link href="/">
          <Icon.Logo />
        </Link>
      </div>
      <nav className="hidden md:block">
        <div className="flex gap-6 items-center">
          <ThemeSwitcher
            value={theme}
            onChange={setTheme}
            className="scale-85"
          />
          {links.map((link, index) => (
            <div key={index} className="h-fit">
              <Link
                href={link.href}
                className={cn(
                  "text-main hover:text-primary transition-colors block text-center",
                  pathname === link.href && "font-bold text-primary"
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
