import "./Home.css";
import learningSvg from "./../assets/programming-animate.svg";
import { useState, useEffect } from "react";

const roles = ["WEB DEVELOPER", "COMPETITIVE PROGRAMMER"];

export default function Home() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    //add typing logic 

    useEffect(() => {
        const current = roles[index];
        let timeout;

        // typing phase
        if (!isDeleting) {
            if (text !== current) {
                timeout = setTimeout(() => {
                    setText(current.slice(0, text.length + 1));
                }, 100);
            } else {
                // finished typing, wait and start deleting
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 1000);
            }
        } else {
            // deleting phase
            if (text !== "") {
                timeout = setTimeout(() => {
                    setText(current.slice(0, text.length - 1));
                }, 60);
            } else {
                // finished deleting; move to next word
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);


    return (
        <div className="Home">
            <div className="home-tital">
                <h3>Hi, I am </h3>
                <h1>Shubham Kumar</h1>
                <h2><span className="type">{text}</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam repellendus dolorum dolorem harum suscipit qui minus optio corrupti veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque placeat odio modi sapiente magni quia officiis ut aut voluptas.</p>
                <div>
                    <button className="btn-primary">Downlode Resume</button>
                    <button className="btn-secondary">Contact me</button>
                </div>
            </div>
            <img src={learningSvg} alt="Learning" />
        </div>
    )
}