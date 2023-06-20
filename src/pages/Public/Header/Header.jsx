import { useCallback } from 'react'
import Search from '../../../components/Search'
import { TbBrandBooking } from 'react-icons/tb'
import { Button } from '../../../components'
import icons from '../../../utilities/icons'
import { useNavigate, Link } from 'react-router-dom'
import { path } from '../../../utilities/constants'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../store/actions'

const { RiAddCircleLine, BiLogOutCircle } = icons

const Header = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const goLogin = useCallback((flag) => {
    navigate(path.ACCOUNT, { state: { flag } })
  })
  return (
    <div className='flex py-4 bg-slate-200 px-3 shadow-lg'>
      <Link to={'/'} className='logo-main text-grey-1 flex items-center w-32'>
        <span className='text-4xl leading-none'>
          <TbBrandBooking />
        </span>
        <span className='font-bold text-2xl'>ookerr</span>
      </Link>
      <Search width={'420px'} />
      <div className='flex justify-end flex-1 gap-1 items-center'>
        {isLoggedIn && (
          <span className='border-b-2 rounded-t-md py-2 shadow-md px-2 border-rose-500 bg-white'>Hello your name</span>
        )}
        {!isLoggedIn && (
          <div className='flex justify-end flex-1 gap-1 items-center'>
            <p className='border-b-2 rounded-t-md py-2 shadow-md px-2 border-rose-500 bg-white'>Xin Chào Bạn!</p>
            <Button
              children={'Đăng Ký'}
              textColor={'text-white'}
              border={'border border-1'}
              bgColor={'bg-rose-600'}
              onClick={() => goLogin(true)}
            />
            <Button
              children={'Đăng Nhập'}
              textColor={'text-grey-1'}
              border={'border border-rose-500'}
              bgColor={'bg-white'}
              onClick={() => goLogin(false)}
            />
          </div>
        )}
        <Button
          children={'Đăng Tin'}
          icon={<RiAddCircleLine />}
          textColor={'text-white'}
          border={'border border-1'}
          bgColor={'bg-rose-600'}
        />
        {isLoggedIn && (
          <Button
            children={<BiLogOutCircle size={24} />}
            textColor={'text-white'}
            border={'border border-1'}
            bgColor={'bg-gray-600'}
            onClick={() => dispatch(actions.logout())}
          />
        )}
      </div>
    </div>
  )
}

export default Header
