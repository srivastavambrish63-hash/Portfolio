import { projects } from "../data/portfolio";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Platforms and systems I've built.">
      <div className="grid">
        {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
      </div>
    </Section>
  );
}
