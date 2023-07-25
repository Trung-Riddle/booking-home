import { Routes, Route } from 'react-router-dom'
import { path } from './utilities/constants'
import { Home, Account, RentalApartment, RentalSpace, RentalRoom, RentalHouse, RoomMates, MainPage } from './pages/Public'
// import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // })
  return (
    <div className='App h-screen mx-auto'>
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={'*'} element={<MainPage />} />
          <Route path={path.HOME__PAGE} element={<MainPage />} />
          <Route path={path.ACCOUNT} element={<Account />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
          <Route path={path.TIM_NGUOI_O_GHEP} element={<RoomMates />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
