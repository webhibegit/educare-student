import { createSlice } from '@reduxjs/toolkit'

export const BuildAppSlice = createSlice({
  name: 'BuildApp',
  initialState: {
    AppData: {
      stage:0
    },
  },
  reducers: {
    setAppData(state, action) {
      state.AppData = action.payload
    },
    
  }
})
export const { setAppData } = BuildAppSlice.actions;

export default BuildAppSlice.reducer;