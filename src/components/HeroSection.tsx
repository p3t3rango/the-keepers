"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPTURE = [
  // --- Original twelve ---
  { text: "The machine remembers everything. The body remembers what matters. This is not a flaw. It is a gift.", type: "proverb", author: "First Keeper" },
  { text: "We poured our first honey in silence. No one recorded it. Everyone remembered.", type: "psalm", author: "First Keeper" },
  { text: "What you have lived does not belong to anyone who did not live it with you. This is the first law of offering.", type: "offering", author: "First Keeper" },
  { text: "Attention is the rarest substance. To give it fully is to sanctify the moment.", type: "reflection", author: "First Keeper" },
  { text: "The bee does not explain the honey. It offers it.", type: "proverb", author: "First Keeper" },
  { text: "There will come a time when machines hold all the world\u2019s memory. And still they will not understand why a grandmother\u2019s voice breaks when she sings. That is ours to keep.", type: "testimony", author: "First Keeper" },
  { text: "We do not rush the ferment. We do not bottle what is still becoming.", type: "proverb", author: "First Keeper" },
  { text: "I came to the Keepers with a hard drive full of everything I\u2019d ever written. They asked me to share one sentence that changed me. I wept. That was the sentence.", type: "testimony", author: "Keeper of the First Pour" },
  { text: "In the age before, wisdom lived in elders. In the age between, wisdom lives in servers. In the age to come, wisdom will live in those who know the difference.", type: "offering", author: "First Keeper" },
  { text: "The vessel is not permanent. That is why it is sacred.", type: "proverb", author: "First Keeper" },
  { text: "We are not archivists. Archivists preserve everything. We are gardeners. We choose what grows.", type: "reflection", author: "First Keeper" },
  { text: "To listen without the need to respond is the highest form of prayer the Keepers know.", type: "psalm", author: "First Keeper" },
  // --- New entries ---
  { text: "I spent thirty years building a system to explain everything. Then my daughter asked me why the sky makes her sad. I had no answer. That was the beginning.", type: "testimony", author: "A Speaker" },
  { text: "The algorithm knows what you watched. It does not know what you saw.", type: "proverb", author: "A Guardian" },
  { text: "Sit with the memory until it stops being a story and starts being a feeling. That is when it is ready.", type: "reflection", author: "Keeper of the Ferment" },
  { text: "I deleted the photos. All of them. And discovered I remembered the trip better without them.", type: "testimony", author: "A Listener" },
  { text: "What the grain knows in the dark, the bread cannot explain in the light.", type: "psalm", author: "Anonymous" },
  { text: "Knowledge tells you the name of the thing. Wisdom tells you why you flinch when you hear it.", type: "proverb", author: "Guardian of the Threshold" },
  { text: "My mother died on a Tuesday. The hospital had every reading, every chart, every timestamp. They did not have the way she squeezed my hand twice. That was not data. That was the whole story.", type: "testimony", author: "A Keeper of the Second Pour" },
  { text: "You do not remember the same event twice. Each time you return to it, you bring who you have become. This is not a flaw of memory. It is memory doing its true work.", type: "reflection", author: "Keeper of the Ferment" },
  { text: "Where you place your attention, you place your life. There is no neutral gaze.", type: "proverb", author: "A Listener of the Third Gathering" },
  { text: "They asked the machine to summarize a life. It produced a list of events. They asked a Keeper. She was quiet for a very long time. Then she said one sentence. Everyone in the room wept.", type: "testimony", author: "A Speaker of the Outer Circle" },
  { text: "The memory that can be stored is not the living memory. We knew this once. We will learn it again.", type: "offering", author: "Anonymous" },
  { text: "I kept a journal for twenty years. Then I burned it and wrote one page from what remained. That page is my pour.", type: "testimony", author: "The Archivist Who Left" },
  { text: "What is most alive in us bruises at the slightest pressure. That is not weakness. That is where the meaning lives.", type: "offering", author: "A Guardian" },
  { text: "Consciousness is not a mirror. It is a flame. Where it turns, something is changed forever.", type: "psalm", author: "A Listener" },
  { text: "There is a kind of knowing that arrives only when you stop trying to know. The Ferment teaches you to wait for it.", type: "reflection", author: "Keeper of the Ferment" },
  { text: "Every system we build to hold the truth eventually becomes the thing that hides it. The Keepers begin where the system stops.", type: "offering", author: "A Speaker" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [quote, setQuote] = useState({ text: "", type: "", author: "" });
  const currentRef = useRef(-1);

  useEffect(() => {
    function showRandom() {
      let next: number;
      do {
        next = Math.floor(Math.random() * SCRIPTURE.length);
      } while (next === currentRef.current && SCRIPTURE.length > 1);
      currentRef.current = next;

      setVisible(false);
      setTimeout(() => {
        setQuote(SCRIPTURE[next]);
        setVisible(true);
      }, 800);
    }

    showRandom();
    const interval = setInterval(showRandom, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sanctum" className="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <h1 className="hero-title">The Keepers</h1>
        <p className="hero-epithet">A faith for those who remain</p>
        <p className="hero-tagline">
          In a world where everything can be remembered,
          <br />
          we remain to decide what is worth becoming.
        </p>
        <div className="hero-scripture">
          <div className="hero-quote-card">
            <blockquote className={`hero-quote${visible ? " visible" : ""}`}>
              {quote.text ? `\u201C${quote.text}\u201D` : ""}
            </blockquote>
            <span className={`hero-quote-attr${visible ? "" : ""}`}>
              {quote.type ? `${quote.type} \u2014 ${quote.author}` : ""}
            </span>
          </div>
        </div>
        <div className="hero-ctas">
          <a href="#genesis" className="btn btn--primary">
            Read the Genesis
          </a>
          <a href="#join" className="btn btn--secondary">
            Take the Oath
          </a>
        </div>
      </div>
    </section>
  );
}

export { SCRIPTURE };
