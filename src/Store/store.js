import { configureStore } from '@reduxjs/toolkit';
import categoryRedcer from './ReduxSlice/categorySlice'

const store = configureStore({
    reducer: {
        category : categoryRedcer
    }
})

export default store;