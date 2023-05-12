import { HiMagnifyingGlass } from "react-icons/hi2";
import { memo } from "react";

const Search = ({ name, onClick, width }) => {
  return (
    <div className={`flex w-[420px] overflow-hidden bg-transparent ${width}`}>
      <input
        type="text"
        className="search-data w-5/6 outline-none rounded-tl-md rounded-bl-md p-2 pr-3 pl-4 bg-white"
        name={name}
        placeholder="Tìm kiếm ở đây ..."
      />
      <button
        className="w-1/6 text-grey-2 border-l-2 bg-white border-rose-500 rounded-tr-md rounded-br-md text-center flex justify-center items-center" 
        onClick={onClick}
      >
        <HiMagnifyingGlass size={19} />
      </button>
    </div>
  );
};

export default memo(Search);
