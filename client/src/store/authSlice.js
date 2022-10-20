import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        username: ''
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username
            state.isLoggedIn = true
        },
        logout: (state, action) => {
            state.username = ''
            state.isLoggedIn = false
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer