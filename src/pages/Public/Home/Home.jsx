import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import Navigate from "../Navigate/Navigate"

const Home = () => {
  return (
    <div className="w-full h-full bg-sky-400">
      <Header />
      <Navigate />
      <div className="w-full flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}

export default Home