import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";

export const store = configureStore({
    //los reducer son variables globales q pueden ser usadas
    //en cualquier parte del proyecto
    reducer :{
        user:userSlice
    }
})