"use strict";
var _a;
exports.__esModule = true;
exports.visibleProject = exports.visibleContacts = exports.visibleSkills = exports.counterSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    visProj: false,
    visSkills: false,
    visContact: false
};
exports.counterSlice = toolkit_1.createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        visibleProject: function (state, action) {
            state.visProj = action.payload;
        },
        visibleSkills: function (state, action) {
            state.visSkills = action.payload;
        },
        visibleContacts: function (state, action) {
            state.visContact = action.payload;
        }
    }
});
exports.visibleSkills = (_a = exports.counterSlice.actions, _a.visibleSkills), exports.visibleContacts = _a.visibleContacts, exports.visibleProject = _a.visibleProject;
exports["default"] = exports.counterSlice.reducer;
