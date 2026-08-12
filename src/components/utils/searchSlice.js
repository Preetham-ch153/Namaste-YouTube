import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        addCacheData :(state,action) => {
            state = Object.assign(state,action.payload);
        }
    }
})

export const { addCacheData } =searchSlice.actions;
export default searchSlice.reducer;