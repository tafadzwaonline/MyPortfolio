import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faCss3, faJsSquare,faBootstrap} from '@fortawesome/free-brands-svg-icons';
import {faDotNet,faDatabase,faCode} from '@fortawesome/free-solid-svg-icons';


// ...rest of your component code

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Tafadzwa</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <div className="hero--section-icons">
    <FontAwesomeIcon icon={faReact} style={{ color: '#61DAFB', margin: '0 10px' }} size="2x" /> {/* React (Blue) */}
    <FontAwesomeIcon icon={faNodeJs} style={{ color: '#68A063', margin: '0 10px' }} size="2x" /> {/* Node.js (Green) */}
    <FontAwesomeIcon icon={faHtml5} style={{ color: '#E34F26', margin: '0 10px' }} size="2x" /> {/* HTML5 (Orange) */}
    <FontAwesomeIcon icon={faCss3} style={{ color: '#1572B6', margin: '0 10px' }} size="2x" /> {/* CSS3 (Blue) */}
    <FontAwesomeIcon icon={faJsSquare} style={{ color: '#F0DB4F', margin: '0 10px' }} size="2x" /> {/* JavaScript (Yellow) */}
    <FontAwesomeIcon icon={faBootstrap} style={{ color: '#7952B3', margin: '0 10px' }} size="2x" /> {/* Bootstrap (Indigo) */}
    <FontAwesomeIcon icon={faDatabase} style={{ color: '#E44D26', fontSize: '2em', margin: '0 10px' }} />

</div>




            <p className="hero--section-description">
            Hi, I'm Tafadzwa Kahwai. A passionate Full-Stack Developer based in Harare, Zimababwe.
              <br /> 
            </p>
          </div>
          <a href={process.env.PUBLIC_URL + '/img/Tafadzwa Kahwai.Docx'} download="Tafadzwa Kahwai.Docx">
  <button className="btn btn-outline-primary">Download Resume</button>
</a>


          
        </div>
        <div className="hero--section--img">
          <img src="./img/Tafadzwa1.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }
  