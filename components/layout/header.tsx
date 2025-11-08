"use client";
import Link from "next/link";
import Icon from "../icons/icon";
import { mergeClassNames } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MobileMenu } from "../ui/MobileMenu/MobileMenu";
import { ThemeSwitcher } from "../ui/shadcn-io/theme-switcher";
import { useTheme } from "next-themes";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/links", label: "Links" },
];

export const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <header className={className}>
      <div>
        <Link href="/">
          <Icon.Logo />
        </Link>
      </div>
      <nav className="hidden md:block">
        <div className="flex gap-6 items-center">
          <ThemeSwitcher value={theme} onChange={setTheme} />
          {links.map((link, index) => (
            <div key={`${index}-${link}`} className="h-fit">
              <Link
                href={link.href}
                className={mergeClassNames(
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
