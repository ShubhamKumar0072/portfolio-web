import "./EducationCard.css";

export default function EducationCard({
  period = "2023 — 2027",
  institute = "KIIT University",
  degree = "B.Tech in Computer Science",
  location = "Bhubaneswar, India",
  note = "CGPA: 8.5 (current) • Coursework: DSA, DBMS, OS, CN"
}) {
  return (
    <div className="EduCard">
      <div className="edu-accent" />

      <div className="edu-content">
        <span className="edu-period">{period}</span>

        <h3 className="edu-institute">{institute}</h3>
        <p className="edu-degree">{degree}</p>

        <div className="edu-meta">
          <span className="edu-location">{location}</span>
          <span className="edu-dot">•</span>
          <span className="edu-note">{note}</span>
        </div>
      </div>
    </div>
  );
}