import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddlWare) => getDefaultMiddlWare().concat(logger)
})
export default store;