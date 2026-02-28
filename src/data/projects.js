import img1 from "../assets/pro1.svg";
import img2 from "../assets/pro1.svg";


const projects = [
  {
    id: 1,
    name: "AI Tic-Tac-Toe",
    image: img1,
    type: "AI-ML Project",
    smallDesc: "An intelligent Tic-Tac-Toe ldksfl;k lkdjflksdf  game using A* search algorithm.",

    longDesc: `
AI Tic-Tac-Toe is a browser-based game where users can play against an
intelligent computer opponent powered by the A* search algorithm.
The AI evaluates board states and always selects the optimal move,
making it impossible to defeat.

The project demonstrates strong understanding of game tree search,
heuristic evaluation, and state-space exploration. It is fully responsive,
features smooth UI interactions, and showcases algorithmic problem-solving
combined with front-end development skills.
    `,

    githubLink: "https://github.com/yourusername/ai-tic-tac-toe",
    liveLink: "https://yourwebsite.com/ai-tic-tac-toe",

    features: [
      "A* Search based AI decision making",
      "Interactive user vs computer gameplay",
      "Game state validation",
      "Win / Draw detection logic",
      "Responsive UI design",
    ],

    techUsed: ["JavaScript", "HTML", "CSS"]
  },

  {
    id: 2,
    name: "Full Stack Task Manager",
    image: img2,
    type:"MERN Project",
    smallDesc: "A MERN stack jk lkjklj lkklj lklkj lkjlkj lkjlkj lkjlkj sdfjh dsfskld kdkfjk  task management web application.",

    longDesc: `
Full Stack Task Manager is a productivity web application that allows
users to create, update, delete, and manage daily tasks efficiently.
It includes authentication, task filtering, and real-time UI updates.

The backend is built using Node.js and Express with MongoDB for data storage,
while the frontend is developed using React. This project highlights
REST API design, authentication handling, state management, and
full-stack integration.
    `,

    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://yourwebsite.com/task-manager",

    features: [
      "User authentication (Login / Register)",
      "CRUD operations for tasks",
      "JWT-based secure API",
      "Task filtering & status tracking",
      "Responsive dashboard layout",
    ],

    techUsed: ["React", "Node.js", "Express", "MongoDB", "CSS"]
  }
];

export default projects;