import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile from './profile.jpeg'
export const assets = {
    profile,
     user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};
export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: ['HTML', 'CSS', 'JavaScript','Typescript', 'React Js', 'Next Js','Tailwind CSS'] },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: [{
        id1:1,
       degree:"Master's in Computer Science",
        year:"2025-Present",
        college:"California State Univserity,USA"
    },
    {
         id1:1,
         degree:"B.Tech in Computer Science",
        year:"2019-2022",
        college:"SRM University,India"
    }

]},
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' },
    { icon: assets.mail_icon, iconDark: assets.project_icon_dark, title: 'Links', description: [{
        id:1,
        github:"https://github.com/anushkaDev9"
    },{
        id:2,
        linkedln:"https://www.linkedin.com/in/anushka-rangari-/"
    },

] }
];

export const workData = [
   { 
    id:1,
    role:"Intern Full Stack Web Developer (Remote)",
    company:"Investorey Hyderabad, India",
    date:"Sep- 2023 to Feb 2024",
    description:"Developed a scalable platform tailored for building comprehensive, industry-specific solutions with seamless enterprise integrations. The application is built using React.js, JavaScript, HTML, Tailwind CSS."
},{ 
    id:2,
    role:"Intern Web Developer (Remote)",
    company:"Mphasis San Jose, CA",
    date:"Aug-2023 to Sep-2023",
    description:"Contributed to the development of a GPT platform that gives healthcare practitioners access to generative AI technology. Technologies used HTML, CSS, JavaScript."
}
]

export const projects=[{
    id:1,
    name:"Blog Website",
    description:"A clean and responsive blog platform designed to showcase articles across various categories. The site emphasizes readability, modern design, and dynamic content rendering. Built with reusable components and scalable layout for easy content management and future expansion.",
    stack:["NEXT JS,Tailwind CSS"],
    githuLink:"https://github.com/anushkaDev9/Blog-website",
    livelink:"https://blog-website-nush.netlify.app/"
    

},{
    id:2,
    name:"E-commerce",
    description:"A complete e-commerce web application designed to replicate a real-world online shopping experience. It includes essential features like cart management, product filtering, order placement, and tracking, all within a responsive, user-friendly interface.",
    stack:["REACT JS,Tailwind CSS,"],
   githuLink:"https://github.com/anushkaDev9/Shoppers",
    livelink:"https://shoppers-nush.netlify.app/",
},{
id:3,
    name:"Portfolio",
    description:"A sleek and professional personal portfolio website designed to showcase projects, skills, and experience with a strong emphasis on clean UI, accessibility, and performance across all devices.It features a resume download option and a fully functional contact form that allows visitors to send messages directly.",
    stack:["NEXT JS,Tailwind CSS,motion UI"],
    githuLink:"https://github.com/anushkaDev9/portfolio",
    livelink:"",
},{
    id:4,
    name:"Toggle-day-night",
    description:"A visually engaging UI feature that smoothly transitions between day and night modes using animation.",
    stack:["REACT JS,Typescript,Tailwind CSS,"],
    githuLink:"https://github.com/anushkaDev9/Toggle-day-night",
    livelink:"https://toggle-day-night-nush.netlify.app/"
},
{
id:5,
    name:"Banking application",
    description:"A simple and user-friendly web application to track banking transactions, including deposits, withdrawals, and balance updates.",
    stack:["REACT JS,Typescript,Tailwind CSS,"],
    githuLink:"https://github.com/anushkaDev9/Banking-application",
    livelink:"https://anushka-rangaribankingapplication.netlify.app/",
},
{
   id:6,
    name:"Real-Time-Bus-Tracker",
    description:"Display the live location of the busses on Map by using an API to source real-time data of the Boston MBTA buses.",
    stack:["Typescript,Tailwind CSS,"],
    githuLink:"https://github.com/anushkaDev9/Real-Time-Bus-Tracker",
   
},{
    id:7,
    name:"Age calculator",
    description:"An interactive age calculator that takes user input (birth date) and dynamically displays the exact age in years, months, and days. Designed with accessibility and visual clarity in mind, this project highlights attention to UI detail and input validation logic.",
    stack:["HTML,CSS,Javascript"],
    githuLink:"https://github.com/anushkaDev9/age-calculator",
    livelink:"https://anushkadev9.github.io/age-calculator/",
},{
    
    id:8,
    name:"Tip Calculator",
    description:"A responsive and interactive calculator that helps users quickly determine the tip amount and total per person based on bill amount, tip percentage, and number of people. Designed to provide a smooth user experience with real-time updates and input validation.",
    stack:["HTML,CSS,Javascript"],
    githuLink:"https://github.com/anushkaDev9/Tip-Calculator-",
    livelink:"https://anushkadev9.github.io/Tip-Calculator-/",

},{
  id:9,
    name:"Star Rating",
    description:"The challenge is to build out a star component app and get it looking as close to the design as possible.",
    stack:["HTML,CSS,Javascript"],
    githuLink:"https://github.com/anushkaDev9/star-Rating-",
}
]
