import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { apiGetCategory } from 'services/category'
import { formatVietnameseToString } from 'utilities/Common/formatString'

const Navigate = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchApiCategory = async () => {
      const response = await apiGetCategory()
      if (response?.data?.err === 0) {
        setCategories(response.data.response)
      }
    }
    fetchApiCategory()
  }, [])
  return (
    <div className='w-full py-3 px-4 bg-white'>
      <div className='w-1200 mx-auto'>
      <NavLink className={({isActive}) => isActive ? 'bg-rose-500' : 'hover:bg-rose-500'} to={'/'}>Trang Chủ</NavLink>
        {categories?.length > 0 &&
          categories.map((nav) => {
            return (
                <NavLink key={nav.code} className={({isActive}) => isActive ? ' bg-rose-500' : 'hover:bg-rose-500'} to={formatVietnameseToString(nav.value)}>{nav.value}</NavLink>
            )
          })}
      </div>
    </div>
  )
}
export default Navigate
