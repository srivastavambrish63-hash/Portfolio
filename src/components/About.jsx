import { profile } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about">
        <Reveal className="about-text">
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>
        <Reveal delay={150} direction="right">
          <div className="card about-card">
            <div className="avatar">AS</div>
            <h4>{profile.name}</h4>
            <p className="muted">📍 {profile.location}</p>
            <p className="muted">✉️ {profile.email}</p>
            <p className="muted">📞 {profile.phone}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
