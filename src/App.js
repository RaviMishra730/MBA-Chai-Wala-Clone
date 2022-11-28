// Scss Files 
import "./Styles/App.scss"
import "./Styles/IntroVideo.scss"
import "./Styles/Section.scss"
// Importing image
import freshTopicImg from "./assets/asset 0.png";
// jsx Files 
import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section";
function App() {
  return <>
    <IntroVideo/>
    <Section h3={'lorem'} text="lorem" btnTxt={"lorem button"} imgsrc={freshTopicImg} />
  </>
}

export default App;
