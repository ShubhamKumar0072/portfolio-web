import "./GameCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function GameCard({
  image,
  title = "Mini Game",
  desc = "A small fun game project built for practice.",
  tech = ["HTML", "CSS", "JS"],
  github = "#",
  live = "#",
}) {
  return (
    <div className="GameCard">
      <div className="game-thumb">
        <img src={image} alt={title} />
      </div>

      <div className="game-body">
        <div className="game-top">
          <h3 className="game-title">{title}</h3>

          <div className="game-links">
            <a className="game-icon" href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon fontSize="small" />
            </a>
            <a className="game-icon" href={live} target="_blank" rel="noreferrer" aria-label="Live Demo">
              <LaunchIcon fontSize="small" />
            </a>
          </div>
        </div>

        <p className="game-desc">{desc}</p>

        <div className="game-tech">
          {tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}