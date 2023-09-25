import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    loginForm: boolean,
    loginState: boolean,
    user: {
        fname: string,
        lname: string,
        email: string
    }
}

interface userAction {
    fname: string,
    lname: string,
    email: string
}

const initialState:InitialState = {
    loginForm: true,
    loginState: false,
    user: {
        fname: '',
        lname: '',
        email: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeForm: (state) => {
            state.loginForm = !state.loginForm
        },
        login: (state, action: PayloadAction<userAction>) => {
            state.user.fname = action.payload.fname
            state.user.lname = action.payload.lname
            state.user.email = action.payload.email;
            state.loginState = true
        },
        logout: (state) => {
            state.user.fname = ''
            state.user.lname = ''
            state.user.email = ''
            state.loginState = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { changeForm, login, logout } =
  authSlice.actions;

export default authSlice.reducer;