import { type ButtonHTMLAttributes, type ReactNode } from "react";

/** Primary teal CTA — List your Project, Request Demo (Figma 30:3, 101:275) */
export function ButtonPrimary({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      type="button"
      className={`inline-flex h-[49px] shrink-0 items-center justify-center gap-[10px] rounded-[10px] border border-black/20 bg-secondary px-[15px] text-[14px] font-semibold text-white shadow-[0px_0px_2px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/** Teal CTA with dark text — Explore Developer Hub (Figma 25:101) */
export function ButtonHub({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      type="button"
      className={`inline-flex h-[49px] shrink-0 items-center justify-center gap-[10px] rounded-[10px] border border-black/20 bg-secondary px-[15px] text-[16px] font-semibold text-grey-800 shadow-[0px_0px_2px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/** White secondary — Book a Demo in footer CTA (Figma 30:6) */
export function ButtonSecondary({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      type="button"
      className={`inline-flex h-[49px] shrink-0 items-center justify-center gap-[11px] rounded-[10px] border border-black/20 bg-white px-[10px] text-[14px] font-semibold text-grey-800 shadow-[0px_0px_2px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
