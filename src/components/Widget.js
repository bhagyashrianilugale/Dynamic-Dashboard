import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget } from '../utils/widgetSlice';
import  graphImg  from '../assets/graphImg.jpg';

const Widget = ({ widgetName, widgetText, categoryName }) => {
 
   // Selecting searchText from the Redux store
  const searchText = useSelector((store) => store.widgets.searchText);
  const dispatch = useDispatch();

  return (
    <>
      <div className='relative'>
      <div className='p-8 bg-widgetBackgraundWhite rounded-2xl z-1 shadow-sm widget_container 
                      flex justify-center items-center flex-col' >
          <div 
          className={`widget rounded-xl ${searchText?.length > 1 ? 'p-4 mx-6' : ''}`}>
               {searchText?.length > 1 
                   ? null 
                   : <RxCross2 
                     className='text-xl ml-[92%] pt-2 font-extrabold cursor-pointer'
                     onClick={()=> dispatch(removeWidget({category: categoryName, widgetName: widgetName}))}
                  />}
              <div className='px-4'>
                <h1 className='font-bold text-sm'>{widgetName}</h1>
                <h2 className='text-xs'>{widgetText}</h2>
               </div>
               <div className='py-2'>
                   <img src={ graphImg }    
                        alt="graph_img"
                        className='h-20 w-38 mx-[40%]'/>
                       <p className='text-sm text-center  from-neutral-200'>No Graph data available!</p>
               </div>
          </div>
         </div>
       </div>
     </>
  )
}

export default Widget;
