import { createSlice } from "@reduxjs/toolkit";
import { MESSAGE_COUNT } from "./helper";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addChatMessages:( state, action ) => {
            state.messages.splice(MESSAGE_COUNT, 1);
            state.messages.push(action.payload);
        }
    }
})

export const { addChatMessages } = chatSlice.actions;
export default chatSlice.reducer;