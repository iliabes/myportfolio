import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IWether,IWeatherCurrent  } from '../../type/type'




const initialState:IWether = { 
    current:{
        feels_like:0,
        pressure:0,
        temp:0,
        weather:[
            {        
            description:'string',
            main: 'string'
            }
        ]
    },
    dayly:[
        {
            pressure:1,
            weather:[
                {
                    description:'bla',
                    main:'blabla'
                }
            ]
            
        },
        {
            pressure:1,
            weather:[
                {
                    description:'bla',
                    main:'blabla'
                }
            ]
            
        }
    ],
    isLoading:false,
    response : {
        statusText:'string',
        status:0
    }
}
  




export const sliceWeather = createSlice({
name: 'counter',
initialState,
reducers: {
    Loading(state) {
        state.isLoading = true
    },
    Succes(state,action: PayloadAction<any>) {
        console.log(action.payload.daily)
        state.isLoading = false
        state.current = action.payload.current
        state.dayly = action.payload.daily
        state.response = {
            statusText:action.payload.statusText,
            status:action.payload.status
        }
    },
    Error(state, action: PayloadAction<any>) {
        state.isLoading = false
        state.response = {
            statusText:action.payload.statusText,
            status:action.payload.status
        }
    },
    },
})




export const { Loading, Succes, Error } = sliceWeather.actions
export default sliceWeather.reducer