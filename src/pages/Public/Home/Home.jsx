import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Navigate from '../Navigate/Navigate'
import './Home.scss'
import { FilterSearch } from 'components'

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Header />
      <Navigate />
      <FilterSearch className='Home-w shadow-main' />
      <div className='Home-w flex'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
