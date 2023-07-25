import Button from '../Button'
import SearchModel from '../SearchModel/SearchModel'
import icons from '../../utilities/icons'

const { HiMagnifyingGlass, GiSpookyHouse, HiOutlineMapPin, IoPricetagsOutline, TfiRulerAlt2, BsChevronDown } = icons
const FilterSearch = ({ className }) => {
  return (
    <div className={`flex ${className} justify-around gap-2 py-4 px-3 rounded-lg `}>
      <SearchModel
        fontWeight
        children='Căn Hộ'
        iconBefore={<GiSpookyHouse size={16} />}
        iconAfter={<BsChevronDown size={16} color='color: rgb(100 116 139)' />}
      />
      <SearchModel
        children='Địa Lý'
        iconBefore={<HiOutlineMapPin size={16} />}
        iconAfter={<BsChevronDown size={16} color='color: rgb(100 116 139)' />}
      />
      <SearchModel
        children='Khoảng Giá'
        iconBefore={<IoPricetagsOutline size={15} />}
        iconAfter={<BsChevronDown size={16} color='color: rgb(100 116 139)' />}
      />
      <SearchModel
        children='Diện Tích, tỉnh thành akhghdgfhiyg'
        iconBefore={<TfiRulerAlt2 size={15} />}
        iconAfter={<BsChevronDown size={16} color='color: rgb(100 116 139)' />}
      />
      <Button
        bgColor='bg-white'
        icon={<HiMagnifyingGlass />}
        className={'w-[70%] border bg-orange-200 flex justify-center text-gray-700'}
        children='Tìm Kiếm'
      />
    </div>
  )
}

export default FilterSearch
