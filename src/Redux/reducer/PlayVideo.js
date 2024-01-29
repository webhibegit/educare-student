import { createSlice } from '@reduxjs/toolkit'
import { reactLocalStorage } from 'reactjs-localstorage'


export const PlayVideo=createSlice({
    name:"PlayVideo",
    initialState:{
        videoData:null
    },
    reducers:{
        setVideoLink(state,action){
            state.videoData=action.payload
            if(action.payload){
                reactLocalStorage.setObject("videoData",state.videoData)
              }
        }
    }
})


export const {setVideoLink}=PlayVideo.actions

export default PlayVideo.reducer