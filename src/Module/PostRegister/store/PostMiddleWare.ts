import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTREGISTER } from '../../../redux/actionType';
import dataa from "./dataa"

export const PostMiddleWareData = createAsyncThunk(POSTREGISTER, async () => {
    try {
        const newData = dataa
        console.log(newData,"new");
        return newData;

    } catch (error) {
        throw error
    }
})
