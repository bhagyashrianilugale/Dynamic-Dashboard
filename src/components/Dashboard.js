import React from 'react';
import Category from './Category';
import { useSelector } from 'react-redux';
import Widget from './Widget';

const Dashboard = () => {

  // Subscribing to the store using a selector
  const categories = useSelector((store) => store.widgets.categories);
  const filterwidget = useSelector((store) => store.widgets.filterwidget);
  const searchText = useSelector((store)=>store.widgets.searchText);

  return (
    <>
      {
        (searchText?.length > 1 && filterwidget?.length > 0)
            ? <div>{
                    filterwidget?.map((widget)=>(
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
