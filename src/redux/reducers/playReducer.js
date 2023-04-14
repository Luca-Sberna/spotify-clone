import { createSlice } from "@reduxjs/toolkit";

export const playReducer = createSlice({
  name: "player",
  initialState: {

    currentSong: {}
  },
  reducers: {

    setPlay: (state, action) => {
      state.currentSong = action.payload;
    }
  }
});


export const { setPlay } = playReducer.actions;

export default playReducer.reducer;


