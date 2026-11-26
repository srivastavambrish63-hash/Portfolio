import { skills } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with day to day.">
      <div className="grid">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 90}>
            <div className="card skill-card">
              <h4><span className="icon">{g.icon}</span> {g.group}</h4>
              <div className="chips">
                {g.items.map((s, j) => (
                  <span key={s} className="chip" style={{ "--j": j }}>{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
