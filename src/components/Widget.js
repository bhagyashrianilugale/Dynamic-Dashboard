import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget } from '../utils/widgetSlice';

const Widget = ({ widgetName, widgetText, categoryName }) => {
 
  const searchText = useSelector((store) => store.widgets.searchText);
  const dispatch = useDispatch();

  return (
    <>
      <div className='p-3 bg-widgetBackgraundWhite rounded-2xl shadow-sm'>
          <div className='widget_container rounded-xl'>
               {searchText?.length > 1 
                   ? null 
                   : <RxCross2 
                     className='text-lg ml-[90%] font-extrabold cursor-pointer'
                     onClick={()=> dispatch(removeWidget({category: categoryName, widgetName: widgetName}))}
                  />}
              <div className='text-xm p-4'>
                <h1 className='font-bold'>{widgetName}</h1>
                <h2>{widgetText}</h2>
               </div>
          </div>
       </div>
     </>
  )
}

export default Widget;
