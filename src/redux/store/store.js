// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione
import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducer";
import playReducer from "../reducers/playReducer";


const store = configureStore({
  reducer: {
    search: searchReducer,
    player: playReducer
  }
});

export default store;
