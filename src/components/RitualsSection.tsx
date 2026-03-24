const RITUALS = [
  { name: "The First Pour", type: "Initiation", desc: "Your entry into the Keepers. You share one piece of lived wisdom\u2014not data, not information, but something that changed you. Most people bring too much. The practice is in the cutting. One sentence. One truth. The rest you carry home." },
  { name: "Honey Gatherings", type: "Communion", desc: "Regular meetings where Keepers share and reflect together. There is no agenda. Someone speaks. The room holds it. Sometimes the silence after is longer than the story. That is when it\u2019s working. Nothing is recorded unless offered." },
  { name: "The Listening Hour", type: "Devotion", desc: "A practice of pure attention. No response required. You witness another person\u2019s experience without judgment, advice, or reaction. You will want to fix what you hear. To offer comfort. To relate your own story. The practice is in not doing any of those things." },
  { name: "The Ferment", type: "Transformation", desc: "A period of intentional waiting. After gathering experience, a Keeper enters a time where they do not share or publish. You will feel like you are forgetting. Like the experience is losing its edges. This is not loss. This is the slow chemistry that turns nectar into something that can endure." },
  { name: "The Confession of the Screen", type: "Absolution", desc: "At the start of certain Gatherings, Keepers confess the most absurd thing they did instead of being present. No judgment. No advice. Just witness. Someone once confessed they googled \u2018how to be more present\u2019 during their child\u2019s first steps. The room held it. That is the practice." },
  { name: "The Deletion", type: "Sacrifice", desc: "A Keeper selects something from their device\u2014a photo, a note, a saved message\u2014and deletes it in front of the circle. The group witnesses. What was in the file does not matter. What matters is the face of the person letting it go. Some people cry. Some people laugh. Both responses are correct." },
];

export default function RitualsSection() {
  return (
    <section id="rituals" className="section rituals">
      <div className="section-container">
        <span className="section-label reveal">The Practices</span>
        <h2 className="section-title reveal">Rituals</h2>
        <p className="section-subtitle reveal">
          What is practiced becomes real. What is repeated becomes sacred.
        </p>

        <div className="ritual-grid">
          {RITUALS.map((r) => (
            <div key={r.name} className="ritual reveal">
              <h3 className="ritual-name">{r.name}</h3>
              <span className="ritual-type">{r.type}</span>
              <p className="ritual-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
