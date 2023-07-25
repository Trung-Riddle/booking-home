import { memo } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

const PageNumber = ({ number, className }) => {
  const navigate = useNavigate()
  const handlePageNumber = () => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        page: number

      }).toString()
    })
  }
  return (
    <button className={`outline outline-offset-4 outline-orange-400 w-[45px] text-center py-[13px] font-semibold text-orange-500 bg-white tst-color hover:bg-orange-500 hover:text-white rounded-lg shadow-md ${className}`} onClick={handlePageNumber}>
      {number}
    </button>
  )
}

export default memo(PageNumber)
