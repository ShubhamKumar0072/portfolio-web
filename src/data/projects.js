import img1 from "../assets/pro1.svg";

const projects = [
  {
    id: 1,
    name: "Travel Up",
    image: img1,
    type: "MERN Full Stack Project",
    smallDesc: "A full stack travel discovery web application for exploring destinations, hotels, and scenic spots.",

    longDesc: `
Travel Up is a full stack web application designed to help users explore
travel destinations, hotels, and scenic locations through a clean and
user-friendly interface. The platform provides smooth navigation and
responsive design across devices.

The backend is built using Node.js and Express with MongoDB for secure
data storage. It includes authentication features such as user signup
and login. The project demonstrates REST API integration, full stack
development, database management, and modern UI design.
    `,

    githubLink: "https://github.com/shubhamkumar/travel-up",
    liveLink: "https://travelup-demo.vercel.app",

    features: [
      "Implemented secure user authentication system with signup and login functionality.",
      "Designed and developed RESTful APIs for managing destinations, hotels, and user data.",
      "Integrated MongoDB database for efficient data storage and retrieval operations.",
      "Built a fully responsive and modern UI ensuring smooth user experience across devices.",
      "Structured the application following clean code practices and modular architecture."
    ],

    techUsed: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"]
  }
];

export default projects;