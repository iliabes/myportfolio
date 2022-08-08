
import { configureStore ,combineReducers  } from '@reduxjs/toolkit'
import counterSlice from './slices/slice'
import  todoSlice  from './slices/sliceTodo'
import sliceWeather from './slices/sliceWeather'

export const rootReducer = combineReducers({counterSlice,todoSlice,sliceWeather})


const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store
export type RootState = ReturnType<typeof store.getState>   
export type AppDispatch = typeof store.dispatch