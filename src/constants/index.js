import { hyperloop, rendevous, tryst, literacyApp} from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    figma,
    chatIcon,
    bookIcon,
    youtubeIcon,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    }, 
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    }

];

export const experiences = [
    {
        title: "Front-End Developer",
        company_name: "Infinity Hyperloop",
        icon: hyperloop,
        iconBg: "#8F8F8F",
        date: "June 2023 - August 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
        link: "https://infinityhyperloop.iitd.ac.in/",
        linkText: "Live Link",
    },
    {
        title: "Front-End Developer",
        company_name: "RendevousX",
        icon: rendevous,
        iconBg: "#fbc3bc",
        date: "August 2023 - October 2023",
        points: [
            "Building and managing web applications with a focus on React.js, Typescript and associated technologies.",
            "Working closely with diverse teams, including designers, and fellow developers,",
            "Executing responsive design principles and guaranteeing compatibility across different web browsers."
        ],
        link: "",
        linkText: "",
    },
    {
        title: "Full-Stack Web Developer",
        company_name: "Literacy App (Desktop Version)",
        icon: literacyApp,
        iconBg: "#FFE8A0",
        date: "Jan 2024 - Feb 2024",
        points: [
            "Participated in a hackathon, our aim was to develop an interactive website for Telangana students under the Foundational Literacy & Numeracy Program.",
            "Utilized React.js and Node.js for seamless integration, Axios for API data exchange, and Splinetool for immersive 3D elements.",
            "Project was aimed to enhance education through technology, fostering innovation and collaboration in addressing real-world challenges.",
            "Project was to made strictly in desktop view only, as tests will we given on desktops."
        ],
        link: "https://literacy-app.vercel.app/",
        linkText: "Live Link",
    },
    {
        title: "Front-End Web Developer",
        company_name: "Tryst 2024",
        icon: tryst,
        iconBg: "#030A17",
        date: "Jan 2024 - March 2024",
        points: [
            "Building and sustaining web applications utilizing React.js.",
            "Collaborating with other verticals such as designers, marketing team and fellow developers.",
            "Designing built-in games and incorporating spline for a 3D aesthetic."
        ],
        link: "https://www.tryst-iitd.org/",
        linkText: "Live Link", 
    },
];

export const socialLinks = [
    {
        name: 'Aryan Dharwa',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/aryandharwa',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aryan-dharwa',
    }
];

export const projects = [
    {
        iconUrl: chatIcon,
        theme: 'btn-back-green',
        name: 'Chat Application',
        description: 'Developed a web chat application facilitating seamless communication between users, boasting robust features for real-time messaging, and emoji sharing.',
        link: 'https://github.com/aryandharwa/chat-app.git',
    },
    {
        iconUrl: bookIcon,
        theme: 'btn-back-blue',
        name: 'Literacy App',
        description: 'Developed an immersive literacy web app within an intense 48-hour timeframe. Our website empowers students with interactive testing features, designed to engage and enhance their learning experience, aligning seamlessly with educational goals.',
        link: 'https://github.com/aryandharwa/LiteracyApp.git',
    },
    {
        iconUrl: youtubeIcon,
        theme: 'btn-back-red',
        name: 'Youtube Backend Clone',
        description: 'Created backend clone of YouTube, harnessing cutting-edge technologies to replicate core functionalities. Our solution offers seamless video uploading, content management, and user interaction',
        link: 'https://github.com/aryandharwa/youtube-clone-backend.git',
    },
    
];




