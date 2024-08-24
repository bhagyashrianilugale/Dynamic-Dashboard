import { configureStore } from '@reduxjs/toolkit';
import widgetSlice from './widgetSlice';


//Configuring the Redux store with a widgetSlice
export const appStore = configureStore({
    reducer: {
        widgets: widgetSlice,
    },
});