import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        toShowMenu: true,
        setVideosData: null,
    },
    reducers:{
        toToggleMenu:(state) => {
            state.toShowMenu = !state.toShowMenu; 
        },
        clearMenu:(state) => {
            state.toShowMenu = false;
        },
        videosData:( state, action ) => {
            state.setVideosData = action.payload;
        }
    }
});

export const { toToggleMenu, clearMenu, videosData } = appSlice.actions;
export default appSlice.reducer;