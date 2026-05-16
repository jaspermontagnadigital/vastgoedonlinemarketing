"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/diensten", label: "Diensten" },
  { href: "/quickscan", label: "Gratis quickscan" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-navy)]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex flex-col leading-tight"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.location.reload();
              }
            }}
          >
            <span className="text-[var(--color-gold)] font-serif text-lg font-semibold tracking-wide">
              Vastgoed
            </span>
            <span className="text-white text-xs tracking-[0.2em] uppercase">
              Online Marketing
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white hover:text-[var(--color-gold)] text-sm tracking-widest uppercase transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-semibold tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors duration-200"
            >
              Gratis advies
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[var(--color-navy)] border-t border-white/10 px-6 py-6 flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-[var(--color-gold)] text-sm tracking-widest uppercase transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-6 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-semibold tracking-widest uppercase text-center"
            >
              Gratis advies
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
