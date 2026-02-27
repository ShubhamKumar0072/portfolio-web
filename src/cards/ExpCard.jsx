import "./ExpCard.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ExpCard({
    company = "ABC Company",
    skills = ["aa","bb","cc","dd"],
    position = "Profile at Company",
}){
    return(
        <div className="ExpCard">
            <div className="exp-card-info">
                <h2>{position}</h2>
                <h4>{company}</h4>
                <div className="exp-skill">
                    {skills.map((skill,index)=>(
                        <div key={index}>{skill}</div>
                    ))}
                </div>
            </div>
            <div className="exp-card-footer">
                <span className="exp-date">From Jan 2023</span>
                <button className="exp-arrow">
                    <ArrowForwardIcon/>
                </button>
            </div>
        </div>
    )
}