import img1 from "../assets/travel-up.png";
import img2 from "../assets/goal2.png";

const projects = [
{
  id: 1,
  name: "Travel Up",
  image: img1,
  type: "Full Stack Web Project",
  smallDesc: "A full stack travel discovery web application for exploring destinations, hotels, and scenic spots.",

  longDesc: `
Travel Up is a full stack web application designed to help users explore
travel destinations, hotels, and scenic locations through a clean and
user-friendly interface. The platform uses server-side rendering with EJS
to deliver dynamic content and ensures responsive design across devices.

The backend is built using Node.js and Express with MongoDB for secure
data storage. It includes authentication features such as user signup
and login. The project demonstrates REST API development, server-side
rendering, database management, and full stack application design.
  `,

  githubLink: "https://github.com/ShubhamKumar0072/travel_up.git",
  liveLink: "https://travel-up.onrender.com/",

  features: [
    "Implemented secure user authentication with signup and login functionality using sessions.",
    "Developed RESTful APIs for managing destinations, hotels, and user data.",
    "Used EJS templating for dynamic server-side rendering of pages.",
    "Integrated MongoDB for efficient data storage and retrieval operations.",
    "Designed a responsive and user-friendly interface across multiple devices."
  ],

  techUsed: ["EJS", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"]
},
{
  id: 2,
  name: "Goal Craft",
  image: img2,
  type: "MERN Full Stack Project",
  smallDesc: "A full stack travel discovery web app to explore destinations, hotels, and scenic spots with a simple and responsive interface.",

  longDesc: `
Goal Craft is a full stack productivity application that enables users to
set, manage, and track their daily tasks and long-term goals efficiently.
It provides an intuitive interface with real-time updates and structured
goal management workflows.

The application is built using React for the frontend and Node.js with
Express for the backend, along with MongoDB for persistent data storage.
It includes secure authentication and allows users to visualize their
progress through interactive charts and calendar-based tracking.

The project demonstrates full stack development, REST API integration,
data visualization, and efficient state management in modern web
applications.
  `,

  githubLink: "https://github.com/ShubhamKumar0072/goal-tracker-app",
  liveLink: "https://goal-tracker-app-frontend.onrender.com/",

  features: [
    "Implemented secure user authentication and authorization for personalized task management.",
    "Developed RESTful APIs for handling tasks, goals, and user data with full CRUD functionality.",
    "Built interactive dashboards using charts to visualize daily, weekly, and monthly progress.",
    "Integrated calendar functionality for scheduling tasks and tracking deadlines effectively.",
    "Managed frontend state efficiently to enable real-time updates and seamless user experience."
  ],

  techUsed: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS", "Recharts"]
}
];

export default projects;