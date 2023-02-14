import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {}

export const getTestCards = createAsyncThunk('/getTest', async(id) => {
    try {
        const {data} = await axios.get(`/api/cards/${id}`)
        return data
    } catch(err) {
        console.log(err)
    }
})

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {},
    extraReducers: {
        [getTestCards.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export default testSlice.reducer