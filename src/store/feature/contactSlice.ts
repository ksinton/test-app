import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Contact {
    id: number;
    name: string;
}

interface ContactState {
    contacts: Contact[];
}

const initialState: ContactState = {
    contacts: [],
}

export const ContactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<{ name: string }>) => {

            console.log("inside add contact");

            state.contacts.push({
                id: state.contacts.length,
                name: action.payload.name,
            });
        },
    },
});

export default ContactSlice.reducer;
export const  { addContact }=ContactSlice.actions;