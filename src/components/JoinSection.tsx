"use client";

import { type FormEvent } from "react";

export default function JoinSection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="join" className="section join">
      <div className="section-container">
        <span className="section-label reveal">Enter</span>
        <h2 className="section-title reveal">Take the Oath</h2>
        <p className="section-subtitle reveal">The First Pour begins with a promise.</p>

        <div className="oath reveal">
          <p>I am a Keeper.</p>
          <p>
            I do not collect&mdash;I witness.<br />I do not extract&mdash;I receive what is offered.
            <br />I do not rush&mdash;I let what is lived become what endures.
          </p>
          <p>
            I tend the vessel.<br />I honor the ferment.<br />I pour only what is ready.
          </p>
          <p>
            In a world that remembers everything,<br />I choose what is worth becoming.
          </p>
        </div>

        <div className="join-form reveal">
          <h3 className="join-form-title">The First Pour</h3>
          <p className="join-form-desc">
            Share one piece of lived wisdom. Not data. Not information. Something that changed you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="keeperName">What shall we call you?</label>
              <input
                type="text"
                id="keeperName"
                placeholder="Your name or chosen name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pourType">What form does your nectar take?</label>
              <select id="pourType" defaultValue="offering">
                <option value="offering">Offering</option>
                <option value="testimony">Testimony</option>
                <option value="proverb">Proverb</option>
                <option value="psalm">Psalm</option>
                <option value="reflection">Reflection</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="pourText">The offering</label>
              <textarea
                id="pourText"
                rows={4}
                placeholder="One truth. Not an explanation — the thing itself."
                required
              />
            </div>
            <button type="submit" className="btn btn--primary">
              Pour into the Hive
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
