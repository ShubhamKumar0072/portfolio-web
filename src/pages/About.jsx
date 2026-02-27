import "./About.css"
import profile from "./../assets/profile2.jpg"
import Skills from "../sections/skills"
import ExpCard from "../cards/ExpCard"
import EducationCard from "../cards/EducationCard"
export default function About() {
    return (
        <div className="About">
            <div className="about-intro">
                <div className="profile">
                    <img src={profile} alt="Profile Image" />
                </div>

                <div className="about-into-text">
                    <h1>About Me </h1>
                    <p>&Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique possimus magni doloremque nam dolore culpa consectetur commodi harum porro delectus blanditiis, ipsum aperiam ex magnam necessitatibus cumque neque voluptates tenetur excepturi ab? Excepturi beatae placeat, eligendi earum ipsum at, fuga libero inventore id consectetur nihil quasi omnis, consequatur quidem quas minus. Deserunt officia quia qui sint neque, iure animi et consectetur saepe assumenda exercitationem illo obcaecati nisi corrupti beatae, nostrum corporis repellendus! Eveniet, nihil! Incidunt perferendis consequatur laboriosam sapiente doloribus necessitatibus, quod commodi voluptas ratione porro, iste hic aut dolorum quasi neque eligendi architecto facere eaque? Ullam, pariatur. Iusto, laudantium?</p>
                    <Skills />
                </div>
            </div>

            <div className="exp-edu">
                <div className="exp">
                    <h2>My Experiances</h2>
                    <div className="exp-cards">
                        <ExpCard 
                            company="Coding Ninja Socity, KIIT"
                            position="Competitive Programer"
                        />
                        <ExpCard /><ExpCard />
                    </div>
                </div>
                <div className="edu">
                    <h2>Education</h2>
                    <div className="exp-cards">
                        <EducationCard
                            period="2023 — 2027"
                            institute="KIIT University"
                            degree="B.Tech in Computer Science"
                        />
                        <EducationCard
                            period="2023 — 2027"
                            institute="KIIT University"
                            degree="B.Tech in Computer Science"
                        />
                        <EducationCard
                            period="2023 — 2027"
                            institute="KIIT University"
                            degree="B.Tech in Computer Science"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}