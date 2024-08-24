import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { filteredwidgets } from '../utils/widgetSlice';

const SearchBar =() =>{

  const dispatch = useDispatch();
  const [ searchText, setSearchText] = useState("");

  const handleSearch = (e)=>{
        setSearchText(e.target.value);

        // Dispatch action to filter widgets
        if(searchText.length){
            dispatch(filteredwidgets(searchText));
        }
  }
  return (
    <>
      {/*earch bar container */}
      <div className='text-slate-200 inline h-16 text-center w-6/12 p-2'>
                   <FaSearch className='absolute left-[42%] h-3 top-5 text-gray-400'/>
                   <input
                    type='text'
                    placeholder='Search anything...'
                    className= 'border w-6/12 h-8 mx-16 text-xs text-start px-10 text-black bg-slate-100 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                    value= {searchText}
                    onChange={handleSearch}
                />
      </div>
    </>
  )
}

export default SearchBar;
