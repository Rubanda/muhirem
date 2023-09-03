import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './theme-toggle';
import { Logo } from './logo';

export const NavBar = () => {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
        <ModeToggle />

        <Link
          href="/about"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
        >
          About
        </Link>
        <a
          href="https://twitter.com/rauchg"
          target="_blank"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
        >
          {/* <TweetIcon style={{ marginRight: 4 }} /> Follow{" "} */}
          <span className="hidden md:inline">&nbsp;me</span>
        </a>
      </nav>
    </header>
  );
}
