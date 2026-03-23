const STEPS = [
  { num: 1, name: "Capture", desc: "Notice what is lived. Not everything\u2014just what stayed after the others faded. The sentence that repeated itself. The look that wouldn\u2019t leave. Write it down. Hold it lightly." },
  { num: 2, name: "Reflect", desc: "The hardest step. Sit with it. Do not publish. Do not share. Let the story you told yourself about what happened start to crack, and wait for something truer to show through." },
  { num: 3, name: "Consent", desc: "Some wisdom is not ready. Some is not yours to give. Decide what, if anything, to share. The offering must come from willingness, not obligation." },
  { num: 4, name: "Refine", desc: "Shape the raw experience into something that can carry meaning for others. Not polish\u2014distill. Find where the knowing lives in your body, not just your memory." },
  { num: 5, name: "Offer", desc: "Give it to the Hive. What you pour is no longer yours. It belongs to everyone who finds it. This is the death that makes it live. This is the pour." },
];

export default function MethodSection() {
  return (
    <section id="method" className="section method">
      <div className="section-container">
        <span className="section-label reveal">The Practice</span>
        <h2 className="section-title reveal">The Method</h2>
        <p className="section-subtitle reveal">From living to offering. Five movements.</p>

        <div className="method-steps">
          {STEPS.map((s) => (
            <div key={s.num} className="method-step reveal">
              <span className="method-step-num">{s.num}</span>
              <div className="method-step-body">
                <h3 className="method-step-name">{s.name}</h3>
                <p className="method-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
