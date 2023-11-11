import { nanoid } from "nanoid"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    contacts: [
        { name: 'Sana', number: '495-03-24', id: '1' },
        { name: 'Bang Chan', number: '901-09-14', id: '2' },
        { name: 'Jihyo', number: '947-00-11', id: '3' },
        { name: 'Han Jisung', number: '754-74-94', id: '4' },
        { name: 'Lee Minho', number: '126-12-99', id: '5' },
    ],
    filter: '',
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload)
        },
        addContact: {
            prepare: contact => {
                return {
                    payload: {
                        ...contact,
                        id: nanoid(),
                    },
                };
            },
            reducer: (state, action) => {
                state.contacts.push(action.payload);
            },
        },
        filterContacts: (state, action) => {
            state.filter = action.payload;
        },
    }
})

export const { deleteContact, addContact, filterContacts } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer