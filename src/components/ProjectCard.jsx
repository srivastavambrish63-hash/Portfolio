import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  // Cursor-following glow
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={(index % 3) * 100}>
      <article className="card project" onMouseMove={onMove}>
        <span className="tag">{project.tag}</span>
        <h4>{project.name}</h4>
        <p>{project.desc}</p>
        <div className="chips">
          {project.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
        {(project.github || project.demo) && (
          <div className="project-links">
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">Code ↗</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live ↗</a>}
          </div>
        )}
      </article>
    </Reveal>
  );
}
