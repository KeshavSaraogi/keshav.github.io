import React from "react";
import { ReactComponent as Code }     from "../../../assets/background-icons/code.svg";
import { ReactComponent as JS }       from "../../../assets/background-icons/js.svg";
import { ReactComponent as ReactSVG } from "../../../assets/background-icons/react.svg";
import { ReactComponent as Git }      from "../../../assets/background-icons/git.svg";
import { ReactComponent as Sql }      from "../../../assets/background-icons/sql.svg";
import { ReactComponent as Html }     from "../../../assets/background-icons/sql.svg";
import { ReactComponent as Chess }    from "../../../assets/background-icons/chess.svg";
import { ReactComponent as Coffee }   from "../../../assets/background-icons/coffee.svg";
import { ReactComponent as Web }      from "../../../assets/background-icons/web.svg";
import { ReactComponent as Cloud }    from "../../../assets/background-icons/cloud.svg";
import { ReactComponent as ML}        from "../../../assets/background-icons/ml.svg";
import "./Background.css";

function Background({ children }) {
  let arr = [];
  let qty = 12;

  for (let i = 0; i < qty; i++) {
    arr.push(i);
  }

  const layers = arr.map((i) => {
    return (
      <div key={i} className="animated-row">
        <div>
          <Chess />
          <Cloud />
          <Code />
          <Coffee />
          <Git />
          <Html />
          <JS />
          <ML />
          <ReactSVG />
          <Sql />
          <Coffee />          
          <Web />
        </div>

        <div>
          <Chess />
          <Cloud />
          <Code />
          <Coffee />
          <Git />
          <Html />
          <JS />
          <ML />
          <ReactSVG />
          <Sql />
          <Coffee />          
          <Web />
        </div>
      </div>
    );
  });

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>
  );
}

export default Background;
