import { isAnyOf } from '@reduxjs/toolkit/dist';
import {
    addContactThunk,
    deleteContactThunk,
    fetchDataThunk,
} from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        filterContacts: (state, { payload }) => {
            state.filter = payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
                state.contacts.items = payload;
                state.contacts.isLoading = false;
                state.contacts.error = null;
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.items = state.contacts.items.filter(
                    contact => contact.id !== payload.id
                );
                state.contacts.isLoading = false;
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.items.push(payload);
                state.contacts.isLoading = false;
            })
            .addMatcher(
                isAnyOf(
                    addContactThunk.rejected,
                    deleteContactThunk.rejected,
                    fetchDataThunk.rejected
                ),
                (state, { payload }) => {
                    state.contacts.isLoading = false;
                    state.contacts.error = payload;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchDataThunk.pending,
                    addContactThunk.pending,
                    deleteContactThunk.pending
                ),
                (state, { payload }) => {
                    state.contacts.isLoading = true;
                    state.contacts.error = null;
                }
            );
    },
});

export const { filterContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
