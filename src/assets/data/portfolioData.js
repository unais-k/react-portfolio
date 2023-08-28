import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";

const portfolios = [
    {
        id: "01",
        imgUrl: portfolioImg01,
        category: "Web Design",
        title: "Gigant Elektra",
        description: `Gigant Elektra is a website with all the features of an e-commerce web application On the client side, features include user authentication, product listing and etc. On the Admin side features include user management,product management, coupon management and etc..`,
        technologies: ["HTML", "css", "Node.js", "MongoDB", "Express js", "twilio", "paypal", "Bootstrap 5"],
        siteUrl: "https://elektra.onrender.com/",
    },
    {
        id: "02",
        imgUrl: portfolioImg05,
        category: "Ux",
        title: "first Static web page",
        description: "This is my very first project, where I learned about HTML and CSS. It's a static web site",
        technologies: ["HTML", "CSS"],
        siteUrl: "https://unais-k.github.io/Web-design-1/",
    },
    {
        id: "03",
        imgUrl: portfolioImg02,
        category: "Ux",
        title: "Microsoft website Clone",
        description: "This is also a static website, I used to study HTML and CSS",
        technologies: ["HTML", "CSS"],
        siteUrl: "https://unais-k.github.io/Web-design-2/",
    },
    {
        id: "04",
        imgUrl: portfolioImg04,
        category: "Web Design",
        title: "Go-Play",
        description:
            "Go-Play is a complete responsive web application where user's can view rating of registered turf and play ground and book a one hour or multiple hour slot. the people who are looking to merchandise their plot can add and maintain booking and reviews",
        technologies: [
            "React",
            "Tailwind css",
            "Node.js",
            "jwt",
            "MongoDB",
            "Express js",
            "paypal",
            "twilio",
            "socket.io",
            "Axios",
        ],
        siteUrl: "https://go-play.onrender.com/",
    },
    {
        id: "05",
        imgUrl: portfolioImg03,
        category: "Web Design",
        title: "Netflix Clone",
        description: "Its a netflix clone web application, where i learned to use react js and tmbd api",
        technologies: ["React", "Tailwind css", "TMDB api"],
        siteUrl: "#",
    },
    {
        id: "06",
        imgUrl: portfolioImg06,
        category: "Ux",
        title: "OLX Clone",
        description: "This is a Olx clone web application, where i studied react js and tailwind css",
        technologies: ["React", "Tailwind css", "MongoDB"],
        siteUrl: "#",
    },
];

export default portfolios;
