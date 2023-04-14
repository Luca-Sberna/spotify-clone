// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione

import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";


// cartReducer e userReducer ad esempio gestiscono la loro porzione di stato più piccola,
// con combineReducer riportiamo le sezioni (slices) in un'unico macro oggetto globale
// prima di passarlo allo store
const rootReducer = combineReducers({

});

// configureStore ha bisogno della struttura del nostro store/stato globale come parametro principale(quindi un reducer)
const store = configureStore({
  // reducer
  reducer: rootReducer
});

export default store;
