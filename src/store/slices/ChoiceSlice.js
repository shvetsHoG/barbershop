import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: "main"
}

const ChoiceSlice = createSlice({
    name: "choice",
    initialState,
    reducers: {
        setChoice: (state, {payload}) => {
            state.value = payload
        }
    }
})

export default ChoiceSlice.reducer
export const {setChoice} = ChoiceSlice.actions