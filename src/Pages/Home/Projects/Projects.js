import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css'
import tour from '../../../images/p2.jpg';
import shopsy from '../../../images/p3.jpg';
import healthCare from '../../../images/p1.jpg';
import soft from '../../../images/p4.JPG';
import kid from '../../../images/p5.jpg';


const Projects = () => {
    const projectData = [
        {
            title : "Shopsy",
            description : "Service Website including Admin panel to add, remove or confirm service.Form to leave review for the client and show on the homepage.Admin can add new products which will appear on Product Explore page.Different Dashboard for user and admin",
            technology : "HTML5, CSS-Module, React.js,React-Router, Express.js, MongoDB, Node.js,Firebase,Heroku, Axios",
            image : shopsy,
            liveSite : "https://niche-product-61802.web.app/",
            clint : "https://github.com/mjohra/Niche-product-client"
        },
        {
            title : "Heath Care",
            description : "Responsive Health Care Website with Email, Password Registration and Google login feature.User can see some extra feature after login.User can see details of every service.",
            technology : "HTML5, CSS Module, Bootstrap, React.Js, React-Router, Firebase,Heroku",
            image : healthCare,
            liveSite : "https://healthcare-service-c76fb.web.app/",
            clint : "https://github.com/mjohra/HealthCare-Service"
        },
    
        {
            title : "Love Tour",
            description : "Complete Tour Management Website with Google login feature.User can Update or Remove tour package.Option to add new products which will appear on Home page",
            technology : "HTML5, CSS3, Bootstrap, React.js,React-Router, Express.js,Node.js,Firebase,MongoDB",
            image : tour,
            liveSite : "https://tour-package-23c20.web.app/",
            clint : "https://github.com/mjohra/Travel-agency-client"
        },
        {
            title : "Software Power World",
            description : "Software Power World is a team selection.Shows details about top Software Professionals.Can add top professionals for your own IT company.Shows total number of added members.Show their total salary",
            technology : "HTML5, CSS3, Bootstrap, React.js,REST API, React-Bootstrap",
            image : soft,
            liveSite : "https://software-power.netlify.app/",
            clint : "https://github.com/mjohra/Software-Power-World"
        },
        {
            title : "Kid School",
            description : "In home page,viewer will see 4 courses.In service page, viewer can see all courses.In About Us page, can see team member",
            technology : "HTML5, CSS3, Bootstrap, React.js,REST API, JSON,React-router",
            image : kid,
            liveSite : "https://kid-school.netlify.app/.",
            clint : "https://github.com/mjohra/React-Educational-Website"
        },
    ];
    return (
        <section id="projects" className="">
        <div className="container head-style">
            <h1 className="text-center mb-5">Some of My Projects</h1>
            <div className="row">
            {
                projectData.map(project => <ProjectCard projects={project}></ProjectCard>)
            }
            </div>
        </div>
        </section>
    );
};

export default Projects;