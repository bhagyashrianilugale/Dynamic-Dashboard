import React from 'react'
import SearchBar from './SearchBar';
import { IoIosArrowForward, IoIosArrowDown} from "react-icons/io";
import { LuBellRing } from 'react-icons/lu';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  
  return (
    <>
      <div className='h-12 flex justify-between'>
          <div className='my-4 mx-12 text-sm'>
              <span className='text-neutral-400'>Home</span>
              <IoIosArrowForward className='inline text-neutral-400 mx-2'/>
              <span className='font-bold text-secondaryBlue'>Dashboard V2</span>
           </div>
           <SearchBar />
           <div className='flex text-xl fond-bold text-slate-400'>
              <IoIosArrowDown className='m-5 p-1 text-black'/>
              <LuBellRing className='m-5 p-1'/>
              <CgProfile className='mx-4 my-5 p-1'/>
           </div>
        </div>
    </>
  )
}

export default Header;
