import { ContactSlice } from "./feature/contactSlice";
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        contact: ContactSlice.reducer,
    }
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook< ReturnType<typeof store.getState> >=useSelector;

