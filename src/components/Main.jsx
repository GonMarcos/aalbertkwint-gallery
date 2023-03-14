import Gallery from "./Gallery";
import AboutMe from "./AboutMe";
import "./layout/Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div className="Main" id="Main">
      <h2>Gallery</h2>
      <Gallery/>
      <AboutMe/>
    </div>
  );
}

export default Main;
