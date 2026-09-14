type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="section-intro">
      <p className="section-kicker" id={`${id}-label`}>
        // {id}
      </p>
      <h2 className="section-heading" id={`${id}-heading`}>
        {title}
      </h2>
      <p className="section-sub">{subtitle}</p>
    </header>
  );
}
