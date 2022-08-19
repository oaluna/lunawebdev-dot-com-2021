import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    </Router>
  );
}

export default App;
