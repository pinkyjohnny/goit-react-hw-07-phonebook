import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';

axios.defaults.baseURL = 'https://654fb572358230d8f0cda289.mockapi.io';

export const fetchDataThunk = createAsyncThunk(
    'fetchAll',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get('contacts');
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            const { data } = await axios.delete(`contacts/${id}`);
            return data;
        } catch (error) {
            return thunkApi.fulfillWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
