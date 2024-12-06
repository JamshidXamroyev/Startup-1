import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: false
}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    GetUser: (state) => {
        state.user = !state.user
    }
  },
})

export const { GetUser } = AuthSlice.actions

export default AuthSlice.reducer