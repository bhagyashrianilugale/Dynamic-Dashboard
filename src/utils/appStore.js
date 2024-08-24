import { configureStore } from '@reduxjs/toolkit';
import widgetSlice from './widgetSlice';

export const appStore = configureStore({
    reducer: {
        widgets: widgetSlice,
    },
});