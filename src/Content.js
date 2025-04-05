// import images
import Hero_person from "../public/Hero/person.png";
import Resume from "../public/Hero/myresume.pdf";

import services_logo1 from "../public/Services/logo1.png";
import services_logo2 from "../public/Services/logo2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SABIN",
    LastName: "ACHARYA",
    btnText: "Download CV",
    image: Hero_person,
    resume: Resume,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        logo: "https://static.vecteezy.com/system/resources/thumbnails/048/332/149/small_2x/js-icon-transparent-background-free-png.png",
      },
      {
        name: "Node js",
        logo: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
      },
      {
        name: "React js",
        logo: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
      },
      {
        name: "Mongo Db",
        logo: "https://miro.medium.com/v2/resize:fit:1000/0*4Sm8jbdZunAYusQF.gif",
      },
      {
        name: "Express js",
        logo: "https://images.seeklogo.com/logo-png/33/2/express-js-logo-png_seeklogo-339850.png",
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: `High-quality development of sites at the professional level.`,
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: `High-performance backend services designed for scalability and
              seamless user experience.`,
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    gitLogo: FaGithub,
    liveLogo: BsGlobe,
    project_content: [
      {
        id: 1,
        img: "https://i.postimg.cc/vBMXpFrx/temp-Image-XHEkjj.avif",
        title: "Notify",
        liveLink: "https://clerk-note-client.vercel.app",
        gitLink: "https://github.com/sabinacharyadev/clerk-note-client",
      },
      {
        id: 2,
        img: "https://i.postimg.cc/PJH96z86/temp-Imagevld0u7.avif",
        title: "Recipe Book",
        liveLink: "https://react-recipe-book-three.vercel.app",
        gitLink: "https://github.com/sabinacharyadev/react-recipe-book",
      },
      {
        id: 3,
        img: "https://i.postimg.cc/26BRVS4D/temp-Imagee2yu7-T.avif",
        title: "Favorite Dogs",
        liveLink: "https://my-fav-dogs.vercel.app",
        gitLink: "https://github.com/sabinacharyadev/my-fav-dogs",
      },
      {
        id: 4,
        img: "https://i.postimg.cc/ZnW8k0v1/temp-Image-Dy-U81-U.avif",
        title: "Homely.",
        liveLink: "https://node-express-basics.onrender.com/login",
        gitLink:
          "https://github.com/sabinacharyadev/express_server_side_rendering",
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sabinacharya444@gmail.com",
        icon: GrMail,
        link: "mailto:sabinacharya444@gmail.com",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
