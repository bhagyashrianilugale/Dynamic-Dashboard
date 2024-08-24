import React from 'react';
import Widget from './Widget';
import { GoPlus } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { changeSideBarStatus } from '../utils/widgetSlice';


const Category = ({props}) => {

   const { widgetInfo, categoryName } = props;
   const dispatch = useDispatch();
  
  return (
    <>
      <div className='relative'> 
            <div>
                <h1 className='text-sm font-bold mx-4 -top-2 text-darkGrey absolute z-20'>{ categoryName }</h1>
            </div>
            <div className='flex flex-wrap'>
               {/*Widget Container*/}
               <div className='flex'>
                   { widgetInfo.map((widget)=>(
                    <Widget 
                     key={ widget.name } 
                     widgetName={ widget.name} 
                     widgetText={ widget.text }
                     categoryName={categoryName}/>
                   ))
                  }
              </div>

              {/*Empty Widget Container*/}
              <div className='p-3 bg-widgetBackgraundWhite rounded-2xl shadow-sm widget_container' onClick={()=>dispatch(changeSideBarStatus())}>
              <div className='widget rounded-xl flex items-center justify-center bg-white'>
                     <span className='h-8 w-30 text-xs font-medium p-2 border bg-white border-gray-300 rounded-lg opacity-60 cursor-pointer'>
                          <GoPlus className='inline'/> Add widget
                    </span>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Category;
