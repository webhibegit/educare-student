import { createSlice } from '@reduxjs/toolkit'

export const LoaderSlice = createSlice({
  name: 'loader',
  initialState: {
   load:true
  },
  reducers: {
    setLoad(state, action) {
      state.load = true

    },
    HideLoad(state){
        state.load=false
    }
  
  }
})
export const { setLoad, HideLoad } = LoaderSlice.actions;

export default LoaderSlice.reducer;