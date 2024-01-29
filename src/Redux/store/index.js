import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "../reducer";


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const Store = createStore(persistedReducer);

const persistor = persistStore(Store);

export default Store;
export { persistor };


// const Store = configureStore({
//   reducer 
// })


// export default Store;