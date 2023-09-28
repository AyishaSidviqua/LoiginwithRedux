import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGINDATA } from "../../../redux/actionType";
import { RootState } from "../../../redux/store"; 
import { useNavigate } from "react-router-dom";

const simulateLoginRequest = async(
  email: string,
  password: string,
  // navigate: ReturnType<typeof useNavigate>
) => {
  try {
    await 
    new Promise((resolve) => setTimeout(resolve, 1000));
    if (email === "ayesha@gmail.com" && password === "1235") {
      // navigate("/preRegister")
      alert("hiii")
      return {
        email: "ayesha@gmail.com",
        password : "1235"
      };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.log("errrrorrrrr");
    
    throw error;
  }
};
export const LoginMiddleWare = createAsyncThunk(
  LOGINDATA,
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      // const navigate = useNavigate();
      const data = await simulateLoginRequest(email, password);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


