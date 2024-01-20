import "./App.scss";
import { Routes, Route, useLocation,  } from "react-router-dom";
import Particles from "react-tsparticles";

import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particlesConfig from "./utils.js/particles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";


function App() {
  const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  const location = useLocation();
  console.log(location);

  // const handleInit = async (main) => {
  //   await loadFull(main);
  // };

  const reanderParticleJsHomePage = window.location.pathname === "/";
  // console.log(reanderParticleJsHomePage);

  return (
    <div className="App">
    {reanderParticleJsHomePage && (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
                
        />)}

      <Navbar />
      <div className="App__main-page-content">

      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      {/*<Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
    </Routes> */}
      </div>
      
    </div>
  );
}

export default App;
