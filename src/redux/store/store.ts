import { configureStore } from "@reduxjs/toolkit";
import uploadVideosSlicer from '../slices/uploadVideos'

export const store = configureStore({
    reducer:{
        videoUpload: uploadVideosSlicer
    }
})
