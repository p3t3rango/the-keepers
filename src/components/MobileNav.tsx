"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { href: "#sanctum", label: "Home" },
  { href: "#genesis", label: "Genesis" },
  { href: "#history", label: "History" },
  { href: "#tenets", label: "Tenets" },
  { href: "#hive", label: "The Hive" },
  { href: "#method", label: "The Method" },
  { href: "#rituals", label: "Rituals" },
  { href: "#library", label: "Scripture" },
  { href: "#roles", label: "Roles" },
  { href: "#accord", label: "The Accord" },
  { href: "#join", label: "Join" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <button
        className={`nav-toggle${open ? " open" : ""}`}
        onClick={toggle}
        aria-label="Navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav-mobile${open ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-mobile-link"
            onClick={close}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
