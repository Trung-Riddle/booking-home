import { Routes, Route } from "react-router-dom";
import { path } from "./utilities/constants";
import { Home, Login } from "./pages/Public";
// import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // })
  return (
    <div className="App h-screen mx-auto">
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
        <Routes>
          <Route path={path.HOME} element={<Home />}>
            <Route path={path.LOGIN} element={<Login />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
