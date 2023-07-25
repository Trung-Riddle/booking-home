import React, {memo} from 'react'
import icons from 'utilities/icons'
import './BoxPost.scss'
import { NavLink } from 'react-router-dom'

const { HiOutlineMapPin, TfiRulerAlt2, GiBackwardTime, RiBookmark3Line, SiZalo, BsPhoneVibrate, BsFillStarFill } = icons
// const images = [
//   'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/img-1475_1686997951.jpg',
//   'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/11c874d516379eb8e507e5342160a933_1686997951.jpg',
//   'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/06/17/870d627df044cef9c81b869f48c80447_1686997941.jpg'
// ]
const BoxPost = ({ images, title, attributes, user, star, address }) => {
  return (
    <div className='flex p-3 h-[360px] w-[49%] shadow-main rounded-lg'>
      <div className='images h-full w-3/6 flex flex-col gap-1 cursor-pointer'>
        <div className='h-3/5 w-full relative'>
          <img className='w-full h-full object-cover rounded-lg ' src={images[0]} alt='' />
          <span className='absolute p-1 rounded-lg blur-black left-2 top-2 text-white bg-slate-400 text-[13px]'>{`${images.length} ảnh`}</span>
        </div>
        <div className='h-2/5 w-full flex justify-between'>
          <img className='w-[49%] object-cover rounded-lg' src={images[1]} alt='' />
          <img className='w-[49%] object-cover rounded-lg' src={images[2]} alt='' />
        </div>
      </div>
      <div className='content w-3/6 px-3 relative'>
        <div className='absolute right-1 top-1 text-orange-400'>
          <RiBookmark3Line size={22} />
        </div>
        <h4 className='price text-lg font-normal uppercase'>{attributes.price}</h4>
        <p className='flex items-center text-stone-500 gap-2'>
          <HiOutlineMapPin />
          <span className='text-[12px]'>{`${address.split(',')[address.split(',').length -2]} - ${address.split(',')[address.split(',').length -1]}`}</span>
        </p>
        <hr className='w-[30%] mt-3 border border-orange-500' />
        <div className='flex mt-3 gap-6'>
          <p className='flex items-center text-stone-500 gap-2'>
            <TfiRulerAlt2 size={13} />{' '}
            <span className='text-[12px]'>
            {attributes.acreage}
            </span>
          </p>
          <p className='flex items-center text-stone-500 gap-2'>
            <GiBackwardTime size={16} /> <span className='text-[12px]'>{attributes.published}</span>
          </p>
        </div>
        <div className='mt-3'>
          <h5 className='capitalize font-medium text-[16px] text-stone-800 mb-1'>Thông tin bài đăng</h5>
          <div className='text-[14px] text-stone-600 container-text'>
            <p className='text'>
              {title}
            </p>
          </div>
        </div>
        <div className='mt-3'>
          <h5 className='capitalize font-medium text-[14px] text-stone-700 mb-1'>Thông tin liên hệ</h5>
          <p className='flex items-center text-stone-500 gap-2 cursor-pointer'>
            <BsPhoneVibrate size={16} /> <span className='text-[12px]'>{user.phone}</span>
          </p>
          <p className='flex items-center text-stone-500 gap-2 cursor-pointer'>
            <SiZalo size={26} /> <span className='text-[12px]'>--------</span>
          </p>
        </div>
        <div className="mt-1 flex items-center gap-3">
          <img className='w-8 h-8 rounded-full shadow-md object-contain' src="https://i.pinimg.com/564x/74/42/e8/7442e858e6232a86cdb6df9757f9909c.jpg" alt="" />
          <p className='overflow-hidden flex-1 whitespace-nowrap text-ellipsis'>{user.name}</p>
        </div>
        <div className="mt-3 flex gap-3 items-center">
          <div className="star flex items-center border border-orange-500 w-16 justify-center rounded-xl gap-1 px-3 py-[1px] text-orange-600">
            <span>{star}</span> <BsFillStarFill className='text-orange-500' size={13} />
          </div>
          <NavLink className='capitalize text-sm font-medium border bg-orange-500 border-orange-500 py-[3px] justify-center rounded-xl px-3 text-white'>Xem chi tiết</NavLink>
        </div>
      </div>
    </div>
  )
}

export default memo(BoxPost)
