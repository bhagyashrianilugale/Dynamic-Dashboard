import React from 'react';
import Dashboard from './Dashboard';
import { IoIosArrowDown } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { TbRefresh } from "react-icons/tb";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdWatchLater } from 'react-icons/md';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { changeSideBarStatus } from '../utils/widgetSlice';



const Body = () => {

  // Subscribing to the store using a selector
  const sidebarStatus = useSelector((store)=>store.widgets.sidebarStatus);
  const dispatch = useDispatch();
  
  // Function to toggle sidebar visibility
  const handleSideBar = () => {
        dispatch(changeSideBarStatus());
  };

  return (
    <>
      <div className='relative h-full w-full bg-backgroundBlue p-10'>
           <div className='flex justify-between py-4 text-darkGrey'>
                <h1 className='text-lg font-bold'>CNAPP Dashboard</h1>
                 <div className='text-center text-lightGreyBlue'>
                     <span className='h-1 w-4 mx-1 font-medium text-xs p-2 border bg-white border-gray-300 rounded-lg cursor-pointer' onClick={handleSideBar}>
                                     Add widget <GoPlus className='inline my-4'/>
                    </span>
                    <span className='h-1 w-4 py-1 px-2 mx-1 border bg-white border-gray-200 rounded-lg'>
                        <TbRefresh className='inline  rotate-45 text-xs'/>
                    </span>
                    <span className='h-1 w-4 py-1 px-2  border bg-white border-gray-200 rounded-lg'>
                        <BsThreeDotsVertical className='inline text-sm'/>
                    </span>
                    <div className='border mx-4 border-primaryBlue text-primaryBlue text-xs inline-block p-1 rounded-sm'>
                        <span className='border-spacing-1 h-4 border-r-2 border-primaryBlue'>
                             <MdWatchLater className='inline mx-1'/>
                        </span>
                         <span className='font-semibold px-1'>Last 2 days <IoIosArrowDown className='inline'/></span>
                    </div>
                     
                 </div>
           </div>
           <Dashboard/>
           { 
            sidebarStatus && <div><Sidebar handler={ handleSideBar }/></div> 
           }
        </div>
    </>
  )
}

export default Body;
