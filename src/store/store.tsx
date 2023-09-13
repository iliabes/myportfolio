
import { configureStore ,combineReducers  } from '@reduxjs/toolkit'
import counterSlice from './slices/slice'
import  todoSlice  from './slices/sliceTodo'
import sliceWeather from './slices/sliceWeather'
import sliceBtn from './slices/sliceBtn'

export const rootReducer = combineReducers({counterSlice,todoSlice,sliceWeather,sliceBtn})


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