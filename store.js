import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers/rootReducer';

// ایجاد استور
export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

