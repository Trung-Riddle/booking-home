import React from 'react'
import ListPost from '../ListPost/ListPost'
import { Pagination } from '..'
import { useSearchParams } from 'react-router-dom'

const MainPage = () => {
  const [params] = useSearchParams()
  console.log(params.get('page'))
  return (
    <div className='w-full flex flex-col gap-4'>
        {/* { province} */}
        <div className='w-full flex justify-between my-12'>
          <div className='listPost w-[79%]'>
            <ListPost />
            <Pagination number={params.get('page')} />
          </div>
          <div className="sideBar w-[20%]">
            Side bar
          </div>
        </div>
    </div>
  )
}

export default MainPage