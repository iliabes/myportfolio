import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface buttonsSlice {
    actAbout: boolean,
    actSkills: boolean,
    actProject: boolean,
    actContacts: boolean,
}
const initialState:buttonsSlice = { 
    actAbout:true,
    actSkills: false,
    actProject: false,
    actContacts: false,
}

export const buttonsSlice = createSlice({
name: 'buttons',
initialState,
reducers: {
    activeAbout(state, action: PayloadAction<boolean>) {
        state.actAbout = action.payload;
        // console.log('proj',action.payload)
    },
    activeSkills(state, action: PayloadAction<boolean>) {
        state.actSkills = action.payload;
        // console.log('proj',action.payload)
    },
    activeProject(state, action: PayloadAction<boolean>) {
        state.actProject = action.payload;
    },
    activeContacts(state, action: PayloadAction<boolean>) {
        state.actContacts = action.payload;

    },

    },
})


export const {activeAbout,activeSkills,activeProject,activeContacts} = buttonsSlice.actions
export default buttonsSlice.reducer