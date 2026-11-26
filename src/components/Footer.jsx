import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
