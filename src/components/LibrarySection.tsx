"use client";

import { useState } from "react";
import { SCRIPTURE } from "./HeroSection";

const FILTERS = ["all", "proverb", "psalm", "offering", "testimony", "reflection"];

export default function LibrarySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? SCRIPTURE
      : SCRIPTURE.filter((s) => s.type === activeFilter);

  return (
    <section id="library" className="section library">
      <div className="section-container">
        <span className="section-label reveal">Scripture</span>
        <h2 className="section-title reveal">The Honey Library</h2>
        <p className="section-subtitle reveal">
          Offered by those who lived it. Kept for those who need it.
        </p>

        <div className="library-filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`library-filter${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="library-entries">
          {filtered.map((entry, i) => (
            <div key={i} className="library-entry">
              <div className="library-entry-type">{entry.type}</div>
              <div className="library-entry-text">
                &ldquo;{entry.text}&rdquo;
              </div>
              <div className="library-entry-author">&mdash; {entry.author}</div>
            </div>
          ))}
        </div>

        <div className="library-cta reveal">
          <a href="#join" className="btn btn--secondary">
            Offer Nectar
          </a>
        </div>
      </div>
    </section>
  );
}
