import "./Project.css";
import { useLocation, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Project() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const data = state?.data;

    // Prevent crash if user refreshes or opens route directly
    if (!data) {
        return (
            <div className="Project">
                <div className="proj-empty">
                    <p>Project data not found. Please open a project from the Projects page.</p>
                    <button className="proj-back-btn" onClick={() => navigate(-1)}>
                        <ArrowBackIcon fontSize="small" />
                        Back
                    </button>
                </div>
            </div>
        );
    }

    const techUsed = Array.isArray(data.techUsed) ? data.techUsed : [];
    const features = Array.isArray(data.features) ? data.features : [];

    return (
        <div className="Project">
            <div className="proj-top">
                <div className="proj-top-img enter fade-scale-up d-1">
                    <img className="enter fade-scale-up d-2" src={data.image} alt={`${data.name} preview`} />
                </div>

                <div className="proj-top-desc enter zoom-in d-1">
                    <div className="proj-title-row">
                        <h1 className="proj-title enter float-in d-2">{data.name}</h1>
                        <button className="proj-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
                            <ArrowBackIcon fontSize="small" />
                        </button>
                    </div>

                    <p className="proj-longdesc">{data.longDesc}</p>

                    <div className="proj-tech">
                        {techUsed.map((tech) => (
                            <span key={tech} className="tech-pill enter pop d-2">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="proj-bottom enter swing-in d-1">
                <h3>Features</h3>

                <ul className="proj-features">
                    {features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>

                <div className="proj-link">
                    <a
                        className="proj-icon"
                        href={data.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                    >
                        <GitHubIcon fontSize="small" />
                        GitHub
                    </a>

                    <a
                        className="proj-icon"
                        href={data.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live project"
                    >
                        <LaunchIcon fontSize="small" />
                        Live
                    </a>
                </div>
            </div>
        </div>
    );
}