"use client"
import axios from "axios";
import { initialStateType } from "./../../types/initialState.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: initialStateType = {
  loading: false,
  data: [],
  error: null,
};

export const uploadVideLesson = createAsyncThunk(
  "videos/upload",
  async (video: any) => {
    let response = await axios.post("http://localhost:3001/videos", video);
    let result = response.data;
    return result;
  }
);

const uploadVideosSlicer = createSlice({
    name: "videos/upload",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(uploadVideLesson.pending, (state)=>{
            state.loading = true
        }).addCase(uploadVideLesson.fulfilled, (state, action)=>{
            state.data = action.payload
        }).addCase(uploadVideLesson.rejected, (state, action:any)=>{
            state.error = action.payload
        })
    }
})

export default uploadVideosSlicer.reducer