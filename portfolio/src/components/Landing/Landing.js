import Background from "../animations/Background/Background";
import Text from "../animations/Text/Text"
import "./Landing.css";

let msgArray = [
  "A Software Engineer",
  "Front-End Developer",
  "Back-End Developer",
  "Full stack Developer",
];

function Landing() {
  return (
    <Background>
      <div id="landing-type">
        <div>What am I?</div>
        <Text data={msgArray} />
      </div>
    </Background>
  );
}

export default Landing;
