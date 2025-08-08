import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "S I M S": {
        title: "Stock Management System",
        desc:
          "",
        techStack: "PHP, Blade, Vue.js, JavaScript, SCSS, Sass, CSS",
        link: "https://github.com/NettamCharansai/CableInventory-Analytics",
        open: "https://github.com/NettamCharansai/CableInventory-Analytics",
        image: "/assets/sims.png"
      },
      //Truth: {
      // title: "truth",
      //  desc:
      //    "A three.js simulation of the planet system revolving around a monolith.",
      //  techStack: "JAVASCRIPT (THREE.JS)",
      //  link: "https://github.com/gazijarin/truth",
      //  open: "https://gazijarin.github.io/Truth/",
      //  image: "/assets/truth.png"
      //},
      //"Tall Tales": {
      //  title: "tall tales",
      //  desc:
      //    "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
      //  techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
      //  link: "https://github.com/gazijarin/TallTales",
      //  open: "https://talltales.herokuapp.com/",
      //  image: "/assets/talltales.png"
      //},
      Portfolio: {
        title: "portfolio",
        desc:
          "A personal portfolio website showcasing my projects, skills, and achievements with a modern, responsive design.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/NettamCharansai",
        open: "https://github.com/NettamCharansai",
        image: "/assets/portfolio.jpg"
      }
    };
    const projects = {
      "Docker-Airflow-Master": {
        desc:
          "A Dockerized Apache Airflow setup with PostgreSQL and Redis for streamlined workflow orchestration and scalable task execution.",
        techStack: "Docker, Apache Airflow, PostgreSQL, Redis, Python",
        link: "https://github.com/NettamCharansai/Docker-Airflow-Master",
        open: ""
      },
      "Lossy Floating-Point Compression.": {
        desc:
          "A study on lossy floating-point compression by truncating mantissa bits, analyzing compression gains against statistical and numerical accuracy.",
        techStack: "Python, Numpy, Matplotlib, SciPy",
        link: "https://github.com/NettamCharansai/Lossy_FP_Compression",
        open: ""
      },
      "Crypto_Pulse": {
        desc:
          "A high-frequency trading signal generator using Binance BTC/USDT order book data for price movement prediction.",
        techStack: "Python",
        link:
          "https://github.com/NettamCharansai/Crypto_Pulse"
      }
      //"Odin Bot": {
      //  desc:
      //    "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      //  techStack: "Javascript, Node.js, Natural NLP, Telegram API",
      //  link: "https://github.com/gazijarin/OdinBot",
      //  open: ""
      //},
      //"Game Centre": {
      //  desc:
      //    "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      //  techStack: "Java, Android Studio",
      //  link: "https://github.com/gazijarin/gamecentre",
      //  open: ""
      //},
      //"Minimax Stonehenge": {
      //  desc:
      //    "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      //  techStack: "Python",
      //  link: "https://github.com/gazijarin/stonehenge",
      //  open: ""
      //}
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
