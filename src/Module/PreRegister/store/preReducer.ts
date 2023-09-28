// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {PreMiddleWareData} from "./preMiddleWare"

// interface RepositoriesState {
//   loading: boolean;
//   error: string | null;
//   data: string[];
// }

// const initialState: RepositoriesState = {
//   loading: false,
//   error: null,
//   data: [],
// };

// const mySlice = createSlice({
//   name: "repositories",
//   initialState,
//   reducers: {
//     setLoading: (state) => {
//       state.loading = true;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     setPreRegDate: (state, action: PayloadAction<string[]>) => {
//       state.loading = false;
//       state.data = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(PreMiddleWareData.pending, (state) => {
//         state.loading = true;
//     });
//     builder.addCase(PreMiddleWareData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//     });
//     builder.addCase(PreMiddleWareData.rejected, (state, action) => {
//         state.loading = false;
//         // state.error = action.error.message
//     });
//   }
// });


// export const { setLoading, setError, setPreRegDate } = mySlice.actions;
// export default mySlice.reducer;
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { PreMiddleWareData } from './preMiddleWare';

const userInitialState: any = {
  isLoader: false,
  preData: [],
  error: ""
};

export const mySlice = createSlice({
  name: 'user_data',
  initialState: userInitialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setPregister: (state, action :any) => {
      state.loading = false
        // state.preData = action.payload

    },
    setError: (state, action :any) => {
      state.loading = false
        // state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PreMiddleWareData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PreMiddleWareData.fulfilled, (state, action) => {
      state.loading = false;
      state.preData = action.payload;
    });
    builder.addCase(PreMiddleWareData.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.error.message
    });
  }
});

export const { setLoading, setPregister, setError } = mySlice.actions;

export const preReducer = mySlice.reducer;


