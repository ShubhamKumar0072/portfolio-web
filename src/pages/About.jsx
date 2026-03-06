import "./About.css"
import profile from "./../assets/profile2.jpg"
import Skills from "../sections/Skills"
import ExpCard from "../cards/ExpCard"
import EducationCard from "../cards/EducationCard"
import exp from "../data/exp"
export default function About() {
    return (
        <div className="About">
            <div className="about-intro">
                <div className="profile">
                    <img className="enter fade-scale-up d-1" src={profile} alt="Profile Image" />
                </div>

                <div className="about-into-text">
                    <h1 className="enter fade-right d-1">About Me </h1>
                    <p className="enter flip-up d-1">
                        I am a Computer Science student at KIIT University with a strong interest in competitive programming and full stack web development. I enjoy solving complex problems and turning ideas into real-world applications. Over time, I have solved 400+ problems on LeetCode, which has helped me improve my logical thinking, problem-solving speed, and understanding of data structures and algorithms. I believe consistency and practice are the keys to becoming a better programmer.
                        Apart from coding, I like building clean and responsive web applications using the MERN stack. I focus on writing organized code and creating user-friendly interfaces. I also have experience working in teams through college societies and technical groups, which improved my communication and collaboration skills. I am always eager to learn new technologies, take on challenges, and grow both technically and personally.
                    </p>                    
                    <Skills />
                </div>
            </div>
            <div className="exp-edu">
                <div className="exp">
                    <h2 className="enter fade-right d-1">My Experiances</h2>
                    <div className="exp-cards">
                        {exp.map((data, id) => (
                            <ExpCard key={id} data={data} />
                        ))}
                    </div>
                </div>
                <div className="edu">
                    <h2 className="enter fade-right d-1">Education</h2>
                    <div className="exp-cards">
                        <EducationCard
                            period="2023 — 2027"
                            institute="KIIT University"
                            degree="B.Tech in Computer Science Engineering"
                            location="Bhubaneswar, India"
                            note="CGPA: 9.33"
                        />

                        <EducationCard
                            period="2020 — 2022"
                            institute="Delhi Public School, Bokaro"
                            degree="Class XII (CBSE)"
                            location="Bokaro, Jharkhand, India"
                            note="Percentage: 91.0%"
                        />

                        <EducationCard
                            period="2018 — 2020"
                            institute="Dayanand Anglo Vedic Public School, Bokaro"
                            degree="Class X (CBSE)"
                            location="Bokaro, Jharkhand, India"
                            note="Percentage: 90.0%"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}