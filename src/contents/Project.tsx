import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import picExp from "../assets/Screenshot (127).png";
import picExp2 from "../assets/Screenshot (128).png";

export const data = [
  {
    date: "2022-2023",
    title: "Crud-App",
    link: "",
    materials: [
      { type: faGithub, link: "https://github.com/" },
      { type: faFacebook, link: "https://www.facebook.com/johnny.latikoun.9/" },
      { type: faInstagram, link: "https://www.instagram.com/04jul.johnny/" },
    ],
    description: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis non ipsum porro cupiditate delectus? Quisquam, repudiandae ab? Labore, fuga tenetur!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sapiente facere totam aliquid non modi ea, consequuntur, nihil, esse adipisci assumenda at perspiciatis accusantium mollitia aspernatur autem error ullam.",
    ],
    skills: [
      ["React", "TypeScript", "Tialwind Css"],
      ["nodeJS", "Sql"],
    ],
    picture: picExp,
  },

  {
    date: "2022-Now",
    title: "frontend Developer",
    link: "",
    materials: [{ type: faGithub, link: "https://github.com/" }],
    description: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis non ipsum porro cupiditate delectus? Quisquam, repudiandae ab? Labore, fuga tenetur!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam sapiente facere totam aliquid non modi ea, consequuntur, nihil, esse adipisci assumenda at perspiciatis accusantium mollitia aspernatur autem error ullam.",
    ],
    skills: [["React", "TypeScript", "Tialwind Css"]],
    picture: picExp2,
  },
];
