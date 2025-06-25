import softwareagImg from "../assets/history/Software AG.jpg";
import infotactImg from "../assets/history/white.png";

export const experiences = [
  {
    role: "Intern for R&D Department ",
    organisation: "Software AG, Chennai",
    startDate: "March, 2017",
    endDate: "Nov, 2017",
    experiences: [
      "Designed and developed scalable RESTful APIs (using Spring Boot) for an internal corporate event management system.",
      "Optimized database queries (using Hibernate/JPA) to reduce API response time.",
      "Assisted in debugging, optimizing, and maintaining legacy Java modules in an enterprise application.",
      "Built a hybrid mobile app for event registrations and notifications using Ionic + Angular.",
      "Consumed self-developed REST APIs to fetch real-time event data and user registrations.",
    ],
    imageSrc: softwareagImg,
  },
  {
    role: "Associate L1(Web Development)",
    organisation: "Infotact Solutions Private Ltd, Bangalore",
    startDate: "March, 2025",
    endDate: "April, 2025",
    experiences: [
      "Developed a Learning Management System (LMS) using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS for responsive styling.",
      "Designed and implemented user authentication (Login/Signup) using JWT (JSON Web Tokens) for secure access control.",
      "Built interactive UI components (course cards, dashboards, quizzes) using React.js and optimized performance with state management.",
      "Integrated RESTful APIs with Express.js & Node.js for seamless frontend-backend communication.",
      "Collaborated with the team using Git/GitHub for version control and followed Agile methodologies.",
    ],
    imageSrc: infotactImg,
  },
];
