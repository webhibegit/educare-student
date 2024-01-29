import { createSlice } from '@reduxjs/toolkit'
import { reactLocalStorage } from 'reactjs-localstorage'


export const CourseData=createSlice({
    name:"CourseData",
    initialState:{
        CourseData:null,
        teacherId:null
    },
    reducers:{
        setCourseData(state,action){
            state.CourseData=action.payload
            if(action.payload){
                reactLocalStorage.setObject("courseData",state.CourseData)
              }
        },
    }
})


export const {setCourseData}=CourseData.actions

export default CourseData.reducer