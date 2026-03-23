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

export default function TopNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("#sanctum");

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("sanctum");
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setVisible(window.scrollY > heroBottom - 100);
      }

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
    <nav className={`top-nav${visible ? " visible" : ""}`}>
      <img src="/logo-24.png" alt="The Keepers" width={24} height={24} className="top-nav-icon" />
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`top-nav-link${active === item.href ? " active" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
