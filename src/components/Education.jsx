import { education } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((e) => (
        <Reveal key={e.degree}>
          <div className="card">
            <h4>🎓 {e.degree}</h4>
            <p className="muted">{e.school} · {e.period}</p>
          </div>
        </Reveal>
      ))}
    </Section>
  );
}
