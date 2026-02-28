import { useState } from "react";
import "./ExpCard.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ExpCard({ data }) {
    console.log(data);
    const [showDet, setShowDet] = useState(false);

    return (
        <div className={`ExpCard ${showDet ? "expanded" : ""}`}>
            <div className="exp-card-info">
                <h2>{data.position}</h2>
                <h4>{data.company}</h4>

                {/* ✅ keep it always in DOM */}
                <ul className="exp-list">
                    {data.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                    ))}
                </ul>

                <div className="exp-skill">
                    {data.skills.map((skill, index) => (
                        <div key={index}>{skill}</div>
                    ))}
                </div>
            </div>

            <div className="exp-card-footer">
                <span className="exp-date">{data.duration}</span>

                <button className="exp-arrow" onClick={() => setShowDet(!showDet)}>
                    <ArrowForwardIcon
                        style={{
                            transform: showDet ? "rotate(-90deg)" : "rotate(0deg)",
                            transition: "0.3s",
                        }}
                    />
                </button>
            </div>
        </div>
    );
}