import "./About.css";
import me from "../../images/hipster2.jpeg";

const About = () => (
  <section className="about">
    <div className="about__portrait-wrapper">
      <img className="about__portrait" src={me} alt="autor ilustration" />
    </div>
    <div className="about__bio-wrapper">
      <h3 className="about__title ">About the author</h3>
      <p className="about__biography">
        Hi! my name is Angel Baez, a very passionate full stack software
        engineer. Very curious and enthusiastic about solving problems and
        figuring stuff out. I'd love to built aesthetic and user appealing web
        applications. I manage a series of technologies such as Javascript,
        ReactJS, NodeJs, Express, MongoDB, Bootstrap.
      </p>
    </div>
  </section>
);

export default About;
