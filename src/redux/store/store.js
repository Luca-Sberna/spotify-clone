// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione
import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducer";
import playerReducer from "../reducers/playerReducer";
import favouriteSong from "../reducers/favouriteSong";


const store = configureStore({
  reducer: {
    search: searchReducer,
    player: playerReducer,
    favourite: favouriteSong
  }
});

export default store;

/* CODE GPT mi ha consigliato di utilizzare gli slice in quanto è una forma più concisa 
combinando lo stato iniziale , i reducer e le action  in un'unica definizione,riducendo di molto
la quantità di codice necessaria per creare e gestire gli stati e le azioni di redux.
fornisce anche funzionalità aggiuntive nel redux toolkit */

/* ps -non ho fatto in tempo ad aggiungere un'azione remove favourite all' HearthBroken 
      -ha smesso di funzionare la search all'ultimo anche se in redux tool mi rende ciò che vorrei 
      -stile e responsive da sistemare*/