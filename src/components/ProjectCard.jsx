export default function ProjectCard({ title, description, url, image }) {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <a
          className="card-link"
          href={url}
          target="_blank"
          rel="noopener"
        >
          Open project
        </a>
      </div>
    </article>
  );
}
