import { configureStore } from "@reduxjs/toolkit";
import userAccountReducer from "./reducers/metamaskData";
import userEthereumReducer from "./reducers/metamaskData";

export const store = configureStore({
    reducer: {
        metaAccount: userAccountReducer,
        metaEthereum: userEthereumReducer,
    }
})