import {configureStore} from "@reduxjs/toolkit";
import ModalVisibleSlice from "./slices/ModalVisibleSlice";
import ChoiceSlice from "./slices/ChoiceSlice";

const rootReducers = {
    modal: ModalVisibleSlice,
    choice: ChoiceSlice,
}

export const store = configureStore({
    reducer: rootReducers
})