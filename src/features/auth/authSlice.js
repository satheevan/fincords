import {createSlice} from '@reduxjs/toolkit';
import { clear } from '@testing-library/user-event/dist/clear';

const initialState ={
    user: null,
    roles:[],
    permission:[],
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state, action)=>{
            state.user = action.payload.user;
            state.roles = action.payload.roles;
            state.permission = action.payload.permission;
        },
        clearUser:(state)=>{
            state.user = null;
            state.roles = [];
            state.permission =[];
        },
    },
});

export const {setUser,clearUser} = authSlice.actions;

export default authSlice.reducer;