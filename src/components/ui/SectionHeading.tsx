const sectionLabels: Record<string, string> = {
  projects: "01 · Work",
  experience: "02 · Path",
  skills: "03 · Toolkit",
};

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  const kicker = sectionLabels[id] ?? id;

  return (
    <header className="section-intro">
      <p className="section-kicker" id={`${id}-label`}>
        {kicker}
      </p>
      <h2 className="section-heading" id={`${id}-heading`}>
        {title}
      </h2>
      <p className="section-sub">{subtitle}</p>
    </header>
  );
}
