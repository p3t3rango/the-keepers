"use client";

import { useEffect, useState } from "react";

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

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export default function DotNav() {
  const [active, setActive] = useState("#sanctum");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActive(`#${current}`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="dot-nav">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`dot-nav-item${active === item.href ? " active" : ""}`}
        >
          <span className="dot" />
          <span className="dot-label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
