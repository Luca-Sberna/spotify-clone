// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione
import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducer";
import playerReducer from "../reducers/playerReducer";


const store = configureStore({
  reducer: {
    search: searchReducer,
    player: playerReducer
  }
});

export default store;
