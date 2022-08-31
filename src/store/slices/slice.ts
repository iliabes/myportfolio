import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    visProj: boolean,
    visSkills: boolean,
    visContact: boolean,
}
const initialState:CounterState = { 
    visProj: false,
    visSkills: false,
    visContact: false,
}

export const counterSlice = createSlice({
name: 'counter',
initialState,
reducers: {
    visibleProject(state, action: PayloadAction<boolean>) {
        state.visProj = action.payload;
        console.log('proj',action.payload)
    },
    visibleSkills(state, action: PayloadAction<boolean>) {
        state.visSkills = action.payload;
    },
    visibleContacts(state, action: PayloadAction<boolean>) {
        state.visContact = action.payload;

    },

    },
})


export const { visibleSkills, visibleContacts, visibleProject} = counterSlice.actions
export default counterSlice.reducer