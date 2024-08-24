import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget } from '../utils/widgetSlice';


const Widget = ({ widgetName, widgetText, categoryName }) => {
 
  const searchText = useSelector((store) => store.widgets.searchText);
  const dispatch = useDispatch();

  return (
    <>
          <div
              className='p-5 rounded-xl text-darkGrey bg-gray-200 w-10/12'>
               <div 
                className='h-60 w-80 m-auto rounded-2xl bg-white shadow-md'>
                {searchText?.length > 1 
                   ? null 
                   : <RxCross2 
                   className='text-4xl p-2 font-extrabold mt-2 cursor-pointer mx-50' 
                   onClick={()=> dispatch(removeWidget({category: categoryName, widgetName: widgetName}))}
                  />}

                <h1 className='text-lg p-4 font-bold'>Widget name : {widgetName}</h1>
                <h1 className='text-sm p-4 font-bold'>Widget text : {widgetText}</h1>
              </div>
         </div>
    </>
  )
}

export default Widget;
