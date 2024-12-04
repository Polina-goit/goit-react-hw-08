import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: 'filters',
     initialState: {
    name: "",
  },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    }
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

// export const selectNameFilter = (state) => state.filters.name;
// export const selectContacts = (state) => state.contacts.items;
// export const selectLoading = (state) => state.contacts.isLoading;
// export const selectError = (state) => state.contacts.error;
// export const selectFilteredContacts = createSelector([selectNameFilter, selectContacts], (filterContacts, contacts) =>
//     contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
//     )
// );
