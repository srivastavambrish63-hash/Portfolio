import useReveal from "../hooks/useReveal";

// Fades + slides its children in when scrolled into view.
export default function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
