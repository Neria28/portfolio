"use client";
import Link from "next/link";
import Icon from "../icons/icon";

export const Header = ({ className }: { className?: string }) => {
  return (
    <header className={className}>
      <div>
        <Link href="/">
          <Icon.Logo className="fill-white" />
        </Link>
      </div>
      <nav>
        <div className="grid grid-cols-3">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
