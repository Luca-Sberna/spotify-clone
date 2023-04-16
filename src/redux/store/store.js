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

/* CODE GPT mi ha consigliato di utilizzare gli slice in quanto è una forma più concisa 
combinando lo stato iniziale , i reducer e le action  in un'unica definizione,riducendo di molto
la quantità di codice necessaria per creare e gestire gli stati e le azioni di redux.
fornisce anche funzionalità aggiuntive nel redux toolkit */