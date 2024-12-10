import { createSlice } from '@reduxjs/toolkit';

const initialStateContacts = {
    items: [],
    isLoading: false,
    error: null,
    updatingItem: null,
    isAddingContact: false,
    isDeleteContact: null,
    isEditContact: false
}


const slice = createSlice({
    name: 'filters',
    initialState: initialStateContacts,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    }
});

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;