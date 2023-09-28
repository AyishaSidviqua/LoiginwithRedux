import { createAsyncThunk } from "@reduxjs/toolkit";
import { PREREGISTER } from '../../../redux/actionType';
import data from "./data"

export const PreMiddleWareData = createAsyncThunk(PREREGISTER, async () => {
    try {
        const newData = data
        return newData;

    } catch (error) {
        throw error
    }
})
