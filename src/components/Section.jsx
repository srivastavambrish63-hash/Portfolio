import Reveal from "./Reveal";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <Reveal>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="muted section-sub">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}
