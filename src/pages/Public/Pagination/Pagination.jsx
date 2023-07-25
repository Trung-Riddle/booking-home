import { useSelector } from 'react-redux'
import { PageNumber } from 'components'
import icons from 'utilities/icons'

const {GrFormNext} = icons

const Pagination = ({number}) => {
    const { count, posts } = useSelector(state => state.post)
    console.log(count)
    const handlePageNumber = () => {
        let max = Math.floor(count / posts.length)
        let arrNumber = []
        for (let i = 1; i <= max; i++) {
            arrNumber.push(i)
        }
        return arrNumber.length > 4 ? arrNumber.filter(i => i < 5) : arrNumber
    }
    console.log(handlePageNumber())
  return (
    <div className='flex gap-5 justify-center my-5 py-4'>
      {
        handlePageNumber().length > 0 && handlePageNumber().map(item => (
          <PageNumber key={item} number={item} />
        ))
      }
      <PageNumber number={'...'}/>
      <PageNumber className='font-bold' number='>>'/>
    </div>
  )
}

export default Pagination