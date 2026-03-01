import "./Projects.css";
import ProCard from "../cards/ProCard";
import GameCard from "../cards/GameCard";
import projects from "../data/projects";
import games from "../data/games";
export default function Projects() {
    return (
        <div className="Projects">
            <h1 className="enter fade-right d-1">Main Projects</h1>
            <div className="pro-main">
                {projects.map((project,id) => (
                    <ProCard key={id} data={project}/>
                ))}
            </div>
            <hr />
            <h1 className="enter fade-right d-1">Just Some Games</h1>
            <div className="pro-games">
                {games.map((game, id)=>(
                    <GameCard key={id} data={game}/>
                ))}
            </div>
        </div>
    )
}