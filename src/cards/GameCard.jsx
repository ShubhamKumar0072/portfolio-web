import "./GameCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function GameCard({data}) {
  return (
    <div className="GameCard">
      <div className="game-thumb">
        <img src={data.image} alt={data.title} />
      </div>

      <div className="game-body">
        <div className="game-top">
          <h3 className="game-title">{data.title}</h3>

          <div className="game-links">
            <a className="game-icon" href={data.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon fontSize="small" />
            </a>
            <a className="game-icon" href={data.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
              <LaunchIcon fontSize="small" />
            </a>
          </div>
        </div>

        <p className="game-desc">{data.desc}</p>

        <div className="game-tech">
          {data.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}