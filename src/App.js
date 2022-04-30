import "./styles.css";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <div className="App">
      <nav class="nav">
        <a class="nav-link active" aria-current="page" href="#">
          Rolex
        </a>
        <a class="nav-link" href="#">
          Link
        </a>
        <a class="nav-link" href="#">
          Link
        </a>
        <a class="nav-link disabled">Disabled</a>
      </nav>

      <div className="bg-new">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <h3 class="display-4 text-center">
              Check out our best and the cheapest watches{" "}
            </h3>
          </div>

          <div className="col-lg-6 col-md-5 col-sm-12">
            <Canvas></Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
