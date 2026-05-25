"use client";

import Image from "next/image";
import Link from "next/link";
import { DEVELOPER_LOGIN_URL, navLinks } from "@/lib/copy";

export function TopNav() {
  return (
    <>
      <header
        className="bg-navy"
        data-node-id="73:1217"
      >
        {/* Desktop utility nav */}
        <div className="hidden h-[46px] items-center gap-6 px-6 md:flex lg:px-[51px] lg:pr-20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-center text-[14px] leading-[1.4] whitespace-nowrap lg:text-[16px] ${
                link.active
                  ? "font-semibold text-secondary"
                  : "font-medium text-nav-gray"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile utility nav — horizontal scroll */}
        <div className="flex h-11 items-center gap-4 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`shrink-0 text-[13px] leading-[1.4] whitespace-nowrap ${
                link.active
                  ? "font-semibold text-secondary"
                  : "font-medium text-nav-gray"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-12">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Hayy.AI"
            width={129}
            height={32}
            className="h-7 w-auto sm:h-8"
            data-node-id="2:14"
          />
        </Link>

        <a
          href={DEVELOPER_LOGIN_URL}
          className="shrink-0 rounded-[30px] bg-secondary px-3 py-2 text-[13px] font-semibold text-white sm:px-5 sm:py-2.5 sm:text-[16px]"
          data-node-id="73:1587"
        >
          <span className="hidden sm:inline">Developer Login</span>
          <span className="sm:hidden">Login</span>
        </a>
      </div>
    </>
  );
}
