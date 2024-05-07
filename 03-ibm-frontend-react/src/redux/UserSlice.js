// UserSlice.js 

import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loginStatus: false,
        loggedInUser: '',
        jwtToken: ''
    },
    reducers: {
        userRegister: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = '';
            state.loginStatus = false;
        },
        userLogin: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = action.payload.user;
            state.jwtToken = action.payload.token;
            state.loginStatus = true;
        },
        userUpdateProfile: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = action.payload;
            state.loginStatus = true;
        },

        userLogout: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = '';
            state.loginStatus = false;
        }
    }
});

export default UserSlice.reducer;

export const { userLogin, userLogout, userRegister, userUpdateProfile } = UserSlice.actions;
