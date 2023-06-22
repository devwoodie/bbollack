import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    metaAccount: "",
    metaEthereum: "",
}

export const metaSlice = createSlice({
    name: "metamask",
    initialState,
    reducers: {
        setMetaAccountStore: (state, action) => {
            state.metaAccount = action.payload
        },
        setMetaEthereumStore: (state, action) => {
            state.metaEthereum = action.payload
        },
    }
})

export const { setMetaAccountStore , setMetaEthereumStore} = metaSlice.actions
export default metaSlice.reducer