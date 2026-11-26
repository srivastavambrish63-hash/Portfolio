import { experience } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 120} direction="left">
            <div className="job">
              <div className="job-head">
                <h4>{job.role}</h4>
                <span className="period">{job.period}</span>
              </div>
              <p className="muted job-company">{job.company} · {job.place}</p>
              <ul>
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
