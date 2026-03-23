const CHAMBERS = [
  { name: "Private", desc: "What you keep for yourself. Your own ferment. Experiences captured but not yet shared\u2014still becoming, still settling. The work happens here, in the quiet." },
  { name: "Shared", desc: "What you offer to your circle. Wisdom given to those who earned your trust. Witnessed together. Held together. Not broadcast\u2014entrusted." },
  { name: "Contributed", desc: "What you pour for all. Honey in the common jar. Wisdom that has been fermented, refined, and offered without condition. This is what endures." },
];

export default function HiveSection() {
  return (
    <section id="hive" className="section hive">
      <div className="section-container">
        <span className="section-label reveal">The Archive</span>
        <h2 className="section-title reveal">The Hive</h2>
        <p className="section-subtitle reveal">
          Not a database. Not a platform.<br />A living archive of what was lived and willingly
          offered.
        </p>
        <p className="hive-intro reveal">
          The Hive holds only what was given&mdash;never what was taken.<br />Nothing enters without
          consent. Nothing leaves without care.
        </p>

        <div className="hive-chambers">
          {CHAMBERS.map((c) => (
            <div key={c.name} className="hive-chamber reveal">
              <h3 className="hive-chamber-name">{c.name}</h3>
              <p className="hive-chamber-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
