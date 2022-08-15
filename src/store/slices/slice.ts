import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    projectsVisivle: boolean,
    projectsSkills: boolean,
    projectsContact: boolean,
}
const initialState:CounterState = { 
    projectsVisivle: false,
    projectsSkills: false,
    projectsContact: false,
}

export const counterSlice = createSlice({
name: 'counter',
initialState,
reducers: {
    visibleProject(state, action: PayloadAction<boolean>) {
        console.log(action)
        state.projectsVisivle = action.payload;

    },
    increment(state) {
    console.log('state')

    },
    decrement(state) {

    },
    incrementByAmount(state, action: PayloadAction<number>) {

    },
    },
})


export const { increment, decrement, incrementByAmount ,visibleProject} = counterSlice.actions
export default counterSlice.reducer