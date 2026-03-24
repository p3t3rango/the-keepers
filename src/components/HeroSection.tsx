"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPTURE = [
  // --- Original twelve ---
  { text: "The machine remembers everything. The body remembers what matters. This is not a flaw. It is a gift.", type: "proverb", author: "Maren Oleander" },
  { text: "We poured our first honey in silence. No one recorded it. Everyone remembered.", type: "psalm", author: "Maren Oleander" },
  { text: "What you have lived does not belong to anyone who did not live it with you. This is the first law of offering.", type: "offering", author: "Maren Oleander" },
  { text: "Attention is the rarest substance. To give it fully is to sanctify the moment.", type: "reflection", author: "Maren Oleander" },
  { text: "The bee does not explain the honey. It offers it.", type: "proverb", author: "Maren Oleander" },
  { text: "There will come a time when machines hold all the world\u2019s memory. And still they will not understand why a grandmother\u2019s voice breaks when she sings. That is ours to keep.", type: "testimony", author: "Maren Oleander" },
  { text: "We do not rush the ferment. We do not bottle what is still becoming.", type: "proverb", author: "Maren Oleander" },
  { text: "I came to the Keepers with a hard drive full of everything I\u2019d ever written. They asked me to share one sentence that changed me. I wept. That was the sentence.", type: "testimony", author: "Cal Brasso, First Archivist" },
  { text: "In the age before, wisdom lived in elders. In the age between, wisdom lives in servers. In the age to come, wisdom will live in those who know the difference.", type: "offering", author: "Maren Oleander" },
  { text: "The vessel is not permanent. That is why it is sacred.", type: "proverb", author: "Maren Oleander" },
  { text: "We are not archivists. Archivists preserve everything. We are gardeners. We choose what grows.", type: "reflection", author: "Sera Voss, First Guardian" },
  { text: "To listen without the need to respond is the highest form of prayer the Keepers know.", type: "psalm", author: "Maren Oleander" },
  // --- Depth entries ---
  { text: "I spent thirty years building a system to explain everything. Then my daughter asked me why the sky makes her sad. I had no answer. That was the beginning.", type: "testimony", author: "A Speaker" },
  { text: "The algorithm knows what you watched. It does not know what you saw.", type: "proverb", author: "Thales, First Guardian" },
  { text: "Sit with the memory until it stops being a story and starts being a feeling. That is when it is ready.", type: "reflection", author: "Keeper of the Ferment" },
  { text: "I deleted the photos. All of them. And discovered I remembered the trip better without them.", type: "testimony", author: "A Listener" },
  { text: "What the grain knows in the dark, the bread cannot explain in the light.", type: "psalm", author: "Anonymous" },
  { text: "Knowledge tells you the name of the thing. Wisdom tells you why you flinch when you hear it.", type: "proverb", author: "Thales, First Guardian" },
  { text: "My mother died on a Tuesday. The hospital had every reading, every chart, every timestamp. They did not have the way she squeezed my hand twice. That was not data. That was the whole story.", type: "testimony", author: "A Keeper of the Second Gathering" },
  { text: "You do not remember the same event twice. Each time you return to it, you bring who you have become. This is not a flaw of memory. It is memory doing its true work.", type: "reflection", author: "Keeper of the Ferment" },
  { text: "Where you place your attention, you place your life. There is no neutral gaze.", type: "proverb", author: "Jin-seo, Keeper of the Accord" },
  { text: "They asked the machine to summarize a life. It produced a list of events. They asked a Keeper. She was quiet for a very long time. Then she said one sentence. Everyone in the room wept.", type: "testimony", author: "A Speaker of the Outer Circle" },
  { text: "The memory that can be stored is not the living memory. We knew this once. We will learn it again.", type: "offering", author: "Anonymous" },
  { text: "I kept a journal for twenty years. Then I burned it and wrote one page from what remained. That page is my pour.", type: "testimony", author: "Sera Voss, First Guardian" },
  { text: "What is most alive in us bruises at the slightest pressure. That is not weakness. That is where the meaning lives.", type: "offering", author: "Thales, First Guardian" },
  { text: "Consciousness is not a mirror. It is a flame. Where it turns, something is changed forever.", type: "psalm", author: "A Listener" },
  { text: "There is a kind of knowing that arrives only when you stop trying to know. The Ferment teaches you to wait for it.", type: "reflection", author: "Keeper of the Ferment" },
  { text: "Every system we build to hold the truth eventually becomes the thing that hides it. The Keepers begin where the system stops.", type: "offering", author: "A Speaker" },
  // --- Tonal range: deadpan, absurd, MSCHF-energy ---
  { text: "My daughter drew me with three arms because she said I was always holding my phone. I have the drawing. I do not have the phone.", type: "testimony", author: "Cal Brasso, First Archivist" },
  { text: "I spent eleven years doing therapy to realize the thing I was most afraid of was being ordinary. Eleven years. Forty thousand dollars. I\u2019m just a person.", type: "testimony", author: "Dara Mendes" },
  { text: "A Keeper once tried to pour his entire life story. The Guardian said: \u2018Pick one Tuesday.\u2019 He picked one. It was enough.", type: "proverb", author: "Sera Voss, First Guardian" },
  { text: "It reads like memory but tastes like nothing. Like honey made from plastic flowers.", type: "reflection", author: "Thales, First Guardian" },
  { text: "I meditated every day for ten years. What did I learn? I\u2019m still annoyed by the same things. I just notice now.", type: "testimony", author: "A Listener" },
  { text: "The fastest pour in the Hive was seven words. The longest Ferment was three years. Same person.", type: "proverb", author: "Keeper of the Archive" },
  { text: "A man came to the Gathering with a presentation. Forty-two slides. The Guardian asked him to close his laptop. He looked like we\u2019d asked him to undress. In a way, we had.", type: "testimony", author: "A Speaker" },
  { text: "The Hive rejected an offering once. Not because it wasn\u2019t true\u2014because it was true about someone else. You cannot pour what you did not live.", type: "reflection", author: "Sera Voss, First Guardian" },
  { text: "You will know your pour is ready when you are slightly embarrassed by it. If it is comfortable, it is not yet honest.", type: "proverb", author: "Maren Oleander" },
  { text: "My grandfather never wrote anything down. When he died, we thought we\u2019d lost everything. Ten years later I caught myself making his sound\u2014the little hum he did when he was thinking\u2014and realized we\u2019d lost nothing.", type: "testimony", author: "A Keeper of the Second Gathering" },
  { text: "Someone asked what the difference was between the Hive and a blog. Oleander said: \u2018A blog is what you want people to know about you. A pour is what you can\u2019t stop knowing about yourself.\u2019", type: "reflection", author: "A Speaker" },
  { text: "I keep a list of things I\u2019ve deleted. It\u2019s longer than anything I\u2019ve kept. I\u2019m more proud of it.", type: "testimony", author: "Sera Voss, First Guardian" },
  { text: "My grandmother just died and I don\u2019t know what to do with my hands.", type: "testimony", author: "Ayo" },
  { text: "Six years. Two-point-three million followers. One sentence worth keeping.", type: "testimony", author: "Anonymous, The Night of the Deleted Feed" },
  { text: "He came with two terabytes. He left with one sentence. That\u2019s the ratio.", type: "proverb", author: "Maren Oleander" },
  { text: "I wrote 240 pages about why memory matters. Then I threw them away and kept the one sentence I couldn\u2019t stop thinking in the shower.", type: "testimony", author: "Maren Oleander" },
  { text: "A museum is not a garden.", type: "proverb", author: "Maren Oleander" },
  { text: "Someone googled \u2018how to be more present\u2019 during their child\u2019s first steps. They confessed it at a Gathering. Nobody laughed. That was worse.", type: "testimony", author: "Anonymous, Confession of the Screen" },
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
