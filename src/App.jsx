import "./App.css";
import ProjectCard from "./components/ProjectCard.jsx";
import { projects } from "./data/projects.js";

export default function App() {
  return (
    <main className="container">
      <header className="site-header">
        <h1>My Portfolio</h1>
        <p>Web projects with live demos</p>
      </header>

      <section className="grid">
        {projects.map(p => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            url={p.url}
            image={p.image}
          />
        ))}
      </section>
    </main>
  );
}
