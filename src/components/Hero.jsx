import { profile, stats } from "../data/portfolio";
import useTyped from "../hooks/useTyped";
import CountUp from "./CountUp";

export default function Hero() {
  const role = useTyped(profile.roles);

  return (
    <section className="hero" id="top">
      <p className="eyebrow fade-up" style={{ "--i": 0 }}>
        <span className="wave">👋</span> Hi, I'm
      </p>
      <h1 className="fade-up" style={{ "--i": 1 }}>
        {profile.name}
      </h1>
      <h3 className="fade-up typed" style={{ "--i": 2 }}>
        <span className="gradient-text">{role}</span>
        <span className="cursor" />
      </h3>
      <p className="tagline fade-up" style={{ "--i": 3 }}>
        {profile.tagline}
      </p>

      <div className="actions fade-up" style={{ "--i": 4 }}>
        <a className="btn primary" href="#projects">View projects</a>
        <a className="btn" href="#contact">Contact me</a>
        {profile.resumeUrl && (
          <a className="btn" href={profile.resumeUrl} download>Download CV</a>
        )}
      </div>

      <div className="socials fade-up" style={{ "--i": 5 }}>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>

      <div className="stats fade-up" style={{ "--i": 6 }}>
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong><CountUp to={s.to} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about">↓</a>
    </section>
  );
}
