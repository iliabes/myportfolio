import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IResponse, ITodo } from '../../type/type'


interface ITodos {
    todos:ITodo[],
    isLoading:boolean
    response:IResponse
}


const initialState:ITodos = { 
    todos:[
        {
            userId: 1,
            id: 1,
            title: "test",
            completed: false,

        },
        {
            userId: 1,
            id: 1,
            title: "test2",
            completed: false
        },
    ],
    isLoading:false,
    response :{
        statusText:'string',
        status: 20
    }
    
}
  
export const todoSlice = createSlice({
name: 'todo',
initialState,
reducers: {
    loading(state) {
    state.isLoading = true
    },
    succes(state,action: PayloadAction<any>) {
    state.isLoading = false
    state.todos = action.payload
    state.response = {
        statusText:action.payload.statusText,
        status:action.payload.status
    }
    },
    fail(state, action: PayloadAction<any>) {
    state.isLoading = false
    state.response = {
        statusText:action.payload.statusText,
        status:action.payload.status
    }
    },
    },
})


export const { loading, succes, fail } = todoSlice.actions
export default todoSlice.reducer