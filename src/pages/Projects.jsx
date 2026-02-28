import "./Projects.css";
import game1 from "./../assets/pro1.svg"
import ProCard from "../cards/ProCard";
import GameCard from "../cards/GameCard";
import projects from "../data/projects";
export default function Projects() {
    return (
        <div className="Projects">
            <h1>Main Projects</h1>
            <div className="pro-main">
                {projects.map((project) => (
                    <ProCard key={project.id} data={project}/>
                ))}
            </div>
            <hr />
            <h1>Just Some Games</h1>
            <div className="pro-games">
                <GameCard
                    image={game1}
                    title="Tic Tac Toe"
                    desc="Play vs friend with clean UI and win detection."
                    tech={["HTML", "CSS", "JS"]}
                    github="https://github.com/..."
                    live="https://your-site..."
                />
                <GameCard
                    image={game1}
                    title="Tic Tac Toe"
                    desc="Play vs friend with clean UI and win detection."
                    tech={["HTML", "CSS", "JS"]}
                    github="https://github.com/..."
                    live="https://your-site..."
                />
            </div>
        </div>
    )
}