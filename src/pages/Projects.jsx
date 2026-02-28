import "./Projects.css";
import game1 from "./../assets/pro1.svg"
import ProCard from "../cards/ProCard";
import GameCard from "../cards/GameCard";
import projects from "../data/projects";
import games from "../data/games";
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
                {games.map((game)=>(
                    <GameCard key={game.id} data={game}/>
                ))}
            </div>
        </div>
    )
}