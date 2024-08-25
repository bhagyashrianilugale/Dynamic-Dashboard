import React from 'react';
import Category from './Category';
import { useSelector } from 'react-redux';
import Widget from './Widget';

const Dashboard = () => {

  // Selecting  categories from the Redux store
  const categories = useSelector((store) => store.widgets.categories);

  // Selecting filteredwidget from the Redux store
   const filteredwidget = useSelector((store) => store.widgets.filteredwidget);
     
  // Selecting searchText from the Redux store
  const searchText = useSelector((store)=>store.widgets.searchText);
  

  return (
    <> 
      {/*Conditional rendering for filteredwidget */}
      {(searchText?.length > 1 && filteredwidget?.length > 0)
            ? <div className='flex flex-wrap'>{
                    filteredwidget?.map((widget)=>(
                                <Widget 
                                  key={ widget.name } 
                                  widgetName={ widget.name} 
                                  widgetText={ widget.text }
                                  />
                      )) 
                  } 
            </div>
          : <div>
            { categories?.map((c) => (
                <Category
                 key={c.category}
                 props={{ widgetInfo: c.widgets, categoryName: c.category }}
               />
            ))}
        </div>
      }
     </>
  );
};

export default Dashboard;
