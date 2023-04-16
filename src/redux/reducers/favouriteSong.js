import { createSlice } from "@reduxjs/toolkit";

export const favouriteSong = createSlice({
    name: "favourite",
    initialState: [],
    reducers: {

        setFavouriteSong: (state, action) =>
            [...state, action.payload]


    }
});


export const { setFavouriteSong } = favouriteSong.actions;

export default favouriteSong.reducer;


