import React, { useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { addWidget, changeSideBarStatus } from '../utils/widgetSlice';


const Sidebar = () => {
 
  const dispatch = useDispatch();
  const [ activeCategory, setActiveCategory ] = useState('CSPM');
  const [error, setError] = useState('');
  const widget_name = useRef(null);
  const widget_text = useRef(null);

  const categories = [ 'CSPM', 'CWPP', 'Registry Scan'];

  const confirmWidget =()=>{
       if( widget_name.current.value && widget_text.current.value ){
          try{
               let widgetInfo = { category: activeCategory, 
                                  widget: {name: widget_name.current.value, text: widget_text.current.value}
                                }
               dispatch(addWidget(widgetInfo));
               widget_name.current.value =''; 
               widget_text.current.value ='';
           } catch(err){
               console.log(err);
              setError(err.message);
           }
           } else{
           setError('Try again');
       }
  };

  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-40  backdrop-brightness-90 z-40'></div>
          <div className='fixed right-0 z-50 top-0 w-2/5 h-full bg-white shadow-lg flex flex-col'>
                    <header className='bg-headerBlue h-13 text-white p-1 flex justify-between text-sm'>
                             <h3 className='text-center p-2'>Add widget</h3>
                             <RxCross2 className='text-2xl p-1 font-extrabold mt-2 cursor-pointer' 
                                  onClick={()=>dispatch(changeSideBarStatus())}/>
                    </header>
                    <section className='p-4 flex flex-col flex-1 overflow-auto'>
                            <p className='text-sm font-medium text-gray-700'>
                                      Personalise your dashboard by adding the following widget
                           </p>
                            <div className='flex space-x-4 border-b-2 w-[70%] border-gray-300 mb-4'>
                               { categories?.map((category)=>(
                                  <div 
                                      key={category} 
                                      className='text-center font-semibold mt-6 text-gray-600'>
                                       <button 
                                            className={`pb-2 px-6 text-sm ${activeCategory === category ? 'border-b-4 border-buttonBlue text-buttonBlue' : ''}`}
                                            onClick={()=> setActiveCategory(category)}>
                                            {category}
                                       </button>
                                  </div>
                               ))}
                            </div>
                             <div className='mb-2 border-2 p-2 rounded-md flex-1 text-sm'>
                                         <label htmlFor='widget_name'
                                                className='font-semibold text-darkGrey'>
                                               Widget Name :
                                          </label>
                                          <input type='text'
                                                 id='widgetname'
                                                 name='widgetname'
                                                 required
                                                 ref={widget_name} 
                                                 placeholder='Enter widget name'
                                                 className='inline-block outline-none h-10 w-[85%] border 
                                                          border-zinc-200 shadow-lg shadow-gray-200 rounded-lg my-1 px-2'
                                                 /> 
                                         <br/>  
                                         <label htmlFor='widget_name'
                                                className='font-semibold text-darkGrey'>
                                               Widget Text :
                                          </label>
                                          <br/> 
                                          <input type='text'
                                                 id='widgettext' 
                                                 name='widgetext'
                                                 required
                                                 ref={widget_text} 
                                                 placeholder='Enter widget text'
                                                 className='inline-block outline-none h-10 w-[85%] border 
                                               border-zinc-200 shadow-lg shadow-gray-200 rounded-lg my-1 px-2'
                                     />
                                    {error.length ? <p className='font-semibold text-darkGrey'>{error}</p> : null}
                            </div>
                            <div className='flex justify-end space-x-2 p-6 mt-auto font-medium'>
                                  <button className='h-10 w-36 text-sm rounded-xl p-2 bg-white text-btncol border-2 border-btncol' 
                                          onClick={()=>dispatch(changeSideBarStatus())}>
                                          Cancel
                                  </button>
                                  <button className='h-10 w-36 text-sm rounded-xl px-2 bg-buttonBlue text-white' 
                                          onClick={ confirmWidget }>
                                          Confirm
                                  </button>
                           </div>
                  </section>
            </div> 
      </>
  );
};

export default Sidebar;
