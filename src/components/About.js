import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am  a <b>Computer Science Graduate</b> from
        <a href="https://www.geu.ac.in/"> Graphic era Deemed to be University</a>, currently working as a <b> Software Developer</b> at{" "}
        <a href="https://www.turing.com/">Turing</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm deeply interested in <b>Automotive Engineering</b> and <b>aerodynamic design</b>. I love exploring how software, especially Python, can help simulate and optimize aerodynamic performance. My goal is to blend software engineering with automotive innovation in practical and creative ways.
      </p>
    );

    const tech_stack = [

      "Python",
      "Django",
      "Docker",
      "CI/CD",
      "TypeScript",
      "Git",
      "SQL",
      "Flask"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Nettam Charan Sai" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
