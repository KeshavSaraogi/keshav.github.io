import "./Technologies.css";
import { techs } from "./techs";

function Technologies() {
  const technologiesList = techs.map((tech, idx) => {
    return (
      <div className="tech-frames background-animation" key={idx}>
        <img src={tech.image} alt={tech.name}/>
        <h3>{tech.name}</h3>
      </div>
    )
  })

  return (
    <div id="technologies" className="technologies-container">
      <h1>Technologies I Use</h1>
      <div className="tech-grid-container">
        {technologiesList}
      </div>
    </div>
  )
}

export default Technologies
