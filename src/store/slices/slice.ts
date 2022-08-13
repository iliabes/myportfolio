import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {value: any}
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
        state.projectsVisivle = action.payload;

    },
    increment(state) {
    console.log('state')
    state.value++
    },
    decrement(state) {
    state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
    state.value += action.payload
    },
    },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer