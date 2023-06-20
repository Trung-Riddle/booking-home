import React from 'react'
import { NavLink } from 'react-router-dom'

const navs = [
  { name: 'Trang Chủ', path: 'home' },
  { name: 'Cho thuê phòng trọ', path: 'cho-thue-phong-tro' },
  { name: 'Nhà cho thuê', path: 'nha-cho-thue' },
  { name: 'Cho thuê căn hộ', path: 'cho-thue-can-ho' },
  { name: 'Cho thuê mặt bằng', path: 'cho-thue-mat-bang' },
  { name: 'Tìm người ở ghép', path: 'tim-nguoi-o-ghep' }
]
const Navigate = () => {
  return (
    <div className='w-full py-3 px-4 bg-white'>
      <div className='w-1200 mx-auto'>
        {navs?.length > 0 &&
          navs.map((nav, index) => {
            return (
              <div key={index}>
                <NavLink to={nav.path}>{nav.name}</NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Navigate
