import { profile } from "../data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <Reveal>
        <div className="card contact-card">
          <h3>Let's build something together</h3>
          <p className="muted">
            I'm open to backend and full-stack .NET opportunities. Drop me a message and I'll get back to you.
          </p>
          <div className="actions center">
            <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn" href={`tel:${profile.phone}`}>Call</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
