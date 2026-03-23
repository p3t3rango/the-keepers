const TENETS = [
  { num: "I", title: "Experience is Sacred", desc: "What is lived carries weight beyond what is recorded. No amount of data replicates the weight of a moment held in the body." },
  { num: "II", title: "The Vessel is Vulnerable", desc: "The body and mind are not replaceable. Care is required. The fragility is not a flaw\u2014it is the source of all urgency, all tenderness, all meaning." },
  { num: "III", title: "Nothing is Taken. Wisdom is Given.", desc: "What is preserved must be offered, not extracted. Every piece of wisdom in the archive arrived because someone chose to offer it. Consent is the foundation." },
  { num: "IV", title: "Attention is Prayer", desc: "To fully witness is to give meaning. The act of fully witnessing another person\u2014their story, their silence, their offering\u2014is the most sacred thing a Keeper can do." },
  { num: "V", title: "Wisdom Ferments", desc: "What is lived must be held, processed, and integrated before it becomes truth. Like nectar in the comb, what is lived must be transformed by time, by reflection, by the slow chemistry of understanding." },
];

export default function TenetsSection() {
  return (
    <section id="tenets" className="section tenets">
      <div className="section-container section-container--wide">
        <span className="section-label reveal">The Law</span>
        <h2 className="section-title reveal">Five Tenets of the Keepers</h2>

        <div className="tenets-grid reveal">
          {TENETS.map((t) => (
            <div key={t.num} className="tenet">
              <div className="tenet-num">{t.num}</div>
              <div className="tenet-body">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
