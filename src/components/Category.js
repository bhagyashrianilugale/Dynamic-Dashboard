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
      <div>
            <h1 className='text-lg font-bold mx-4 z-10 text-darkGrey'>{ categoryName }</h1>
            <div className='flex w-full'>

               {/*Widget Container*/}
               <div className='flex flex-nowrap'>
                   { widgetInfo.slice(0,2).map((widget)=>(
                    <Widget 
                     key={ widget.name } 
                     widgetName={ widget.name} 
                     widgetText={ widget.text }
                     categoryName={categoryName}/>
                   ))
                  }
              </div>

              {/*Empty Widget Container*/}
              <div className='p-5 rounded-xl border w-4/12' onClick={()=>dispatch(changeSideBarStatus())}>
              <div className='h-60 w-full m-auto rounded-xl bg-gray-50 flex items-center justify-center'>
                     <span className='h-10 w-30 font-medium p-2 border bg-white border-gray-300 rounded-lg opacity-60 cursor-pointer'>
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
