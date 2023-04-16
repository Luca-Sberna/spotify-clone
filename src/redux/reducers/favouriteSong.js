import { createSlice } from "@reduxjs/toolkit";

export const favouriteSong = createSlice({
    name: "favourite",
    initialState: {

        currentSong: {}
    },
    reducers: {

        setFavouriteSong: (state, action) => {
            state.currentSong = action.payload;
        }
    }
});


export const { setFavouriteSong } = favouriteSong.actions;

export default favouriteSong.reducer;


