import  { configureStore } from '@reduxjs/toolkit'
import todoSlice from './Todos/TodoReducer';

const store  = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
})

export default store;