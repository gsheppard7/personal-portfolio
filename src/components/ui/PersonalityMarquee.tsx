import "./personality-marquee.css";

const signals = [
  { label: "Focus", value: "Sports analytics → decisions" },
  { label: "Stack", value: "Next.js · Supabase · Python" },
  { label: "Vibe", value: "Late-night builds, clean diffs" },
  { label: "Home", value: "GT · Atlanta · Cleveland roots" },
  { label: "Now", value: "Hivemind agents & Guardians data" },
  { label: "Ask me about", value: "Vision pipelines & wearables" },
];

function Track() {
  return (
    <div className="personality-marquee-track" aria-hidden="true">
      {signals.map((signal) => (
        <span className="personality-marquee-item" key={signal.label}>
          <span className="personality-marquee-dot" />
          <strong>{signal.label}</strong>
          {signal.value}
        </span>
      ))}
    </div>
  );
}

export function PersonalityMarquee() {
  return (
    <div className="personality-marquee" aria-hidden="true">
      <div className="personality-marquee-inner">
        <Track />
        <Track />
      </div>
    </div>
  );
}
