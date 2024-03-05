import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const ModalVisibleSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalVisible: (state, {payload}) => {
            state.value = payload
        }
    }
})

export default ModalVisibleSlice.reducer
export const {setModalVisible} = ModalVisibleSlice.actions