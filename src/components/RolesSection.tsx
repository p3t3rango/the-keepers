const ROLES = [
  { name: "Keepers", desc: "The core practitioners. They hold and tend the archive. They decide\u2014with care, not authority\u2014what endures. A Keeper does not collect. A Keeper witnesses." },
  { name: "Speakers", desc: "The storytellers. They carry wisdom outward\u2014not as broadcast, but as offering. They translate experience into narrative. A Speaker does not perform. A Speaker transmits." },
  { name: "Guardians", desc: "The protectors of consent and integrity. They ensure nothing enters the Hive that was not freely given. A Guardian does not gatekeep. A Guardian tends the threshold." },
  { name: "Listeners", desc: "Those who practice deep attention. They come to the Gatherings not to speak but to be present. A Listener does not wait for their turn. A Listener has already arrived. In the silence of full attention, something is transmitted that no recording could capture." },
];

export default function RolesSection() {
  return (
    <section id="roles" className="section roles">
      <div className="section-container">
        <span className="section-label reveal">The Called</span>
        <h2 className="section-title reveal">Roles</h2>
        <p className="section-subtitle reveal">
          Not ranks. Callings. Each one a way of serving the whole.
        </p>

        <div className="role-grid">
          {ROLES.map((r) => (
            <div key={r.name} className="role reveal">
              <h3 className="role-name">{r.name}</h3>
              <p className="role-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
