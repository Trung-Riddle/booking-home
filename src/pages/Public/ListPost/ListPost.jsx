import { BoxPost, Button } from 'components'
import React, { useEffect, memo } from 'react'
import { getPosts, getPostsLimit } from 'store/actions/post.action'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '..'

const ListPost = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.post)
  useEffect(() => {
    dispatch(getPostsLimit(0))
  }, [])
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center my-2'>
        <h2 className='text-2xl'>Danh Sách Các Tin Đăng</h2>
        <span>Cập nhật: 27/5/2023</span>
      </div>
      <div className='flex items-center gap-3 my-2 mb-6'>
        <span className='text-md'>Sắp Xếp Theo: </span>
        <Button border='border' children='Mới Nhất' />
        <Button border='border' children='Gần Nhất' />
        <Button border='border' children='Ngẫu Nhiên' />
      </div>
      <div className='items flex flex-wrap gap-2'>
        {posts?.length > 0 && posts.map(post => {
          return (
            <BoxPost key={post?.id} address={post?.address} star={post?.star} title={post?.title} attributes={post?.attributes} user={post?.user} images={JSON.parse(post?.images.image)}/>
          )
        })}
      </div>
    </div>
  )
}

export default memo(ListPost)
