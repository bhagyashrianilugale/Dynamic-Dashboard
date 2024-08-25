import { createSlice } from '@reduxjs/toolkit';

const widgetSlice = createSlice({
    name: 'widgets',
    initialState: {
        categories : [
             {
              category: 'CSPM',
              widgets: [
                  { name: "Cloud Accounts", text: "Details about cloud accounts"},
                  { name: "Cloud Account Risk Assessment", text: "Assessment of cloud account risks"}
              ]
             },
             {
              category: 'CWPP',
              widgets: [
                  { name: "Top 5 Namespace Specific Alerts", text: "Alerts specific to top 5 namespaces"},
                  { name: "Workload", text: "Alerts related to workloads"}
              ]
             },
             {
              category: 'Registry Scan',
              widgets: [
                  { name: "Image Risk Assessment", text: "Assessmnet of image risks"},
                  { name: "Image Security Issues", text: "Security issues related to images"}
              ]
             }
        ],
      sidebarStatus : false,
      filteredwidget : null,
      searchText : ""
    },
    
    reducers: {
        addWidget : (state, action)=>{
            const { category , widget } = action.payload;
            //Find category object
            const categoryObj = state.categories.find(cat=> cat.category === category);
            //Add widget
            if(categoryObj){
                categoryObj.widgets.push(widget);
            }
            
        },

        removeWidget : (state, action)=>{
            const { category, widgetName } = action.payload;
            //Find the category object
            const categoryObj = state.categories.find(cat=>cat.category === category);
            //Remove widget 
            if(categoryObj){
                categoryObj.widgets = categoryObj.widgets.filter(widget=>widget.name !== widgetName );
            }
        },

        filteredwidgets : (state, action)=>{
            const searchTerm = action.payload.toLowerCase();
            if( searchTerm.length>0 ){
                       state.searchText = searchTerm;
                      //Filterd widget
                       state.filteredwidget = state.categories?.flatMap((category)=>(
                       category.widgets.filter((widget)=>widget.name.toLowerCase().includes(searchTerm))
            ))}else{
                 state.searchText.length=0;
            }
        },

        changeSideBarStatus : ( state )=>{
               // To open sidebar to add 
               state.sidebarStatus = !state.sidebarStatus;
        },
     },
});


export const { addWidget, 
               removeWidget, 
               changeSideBarStatus, 
               filteredwidgets } = widgetSlice.actions;
export default widgetSlice.reducer;
