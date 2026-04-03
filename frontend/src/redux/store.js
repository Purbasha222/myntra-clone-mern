import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./SLice/productSlice";
import authSlice from "./SLice/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./SLice/cartSlice";
import wishlistSlice from "./SLice/wishlistSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  product: productSlice.reducer,
  auth: authSlice,
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
