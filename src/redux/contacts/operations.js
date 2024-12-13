
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const respons = await axios('/contacts');
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async ({ name, number }, thunkAPI) => {
        try {
            const respons = await axios.post('/contacts', { name, number });
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const respons = await axios.delete(`/contacts/${contactId}`);
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const respons = await axios.patch(`/contacts/${{ name, number }.id}`, {
                name,
                number,
            });
            return respons.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }
);
