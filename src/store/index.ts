import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import reducers
import categoryReducer from "./CategoryReducer";

// Define a root state type
type RootState = ReturnType<typeof store.getState>;

// Create a redux-persist configuration object
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["category"], // Specify the reducers to persist
};

// Combine your reducers
const rootReducer = combineReducers({
  category: categoryReducer,
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor
export const persistor = persistStore(store);

// Export the dispatch and useSelector hooks with the correct types
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
