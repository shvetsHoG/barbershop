import {configureStore} from "@reduxjs/toolkit";
import ModalVisibleSlice from "./slices/ModalVisibleSlice";
import ChoiceSlice from "./slices/ChoiceSlice";
import ClassListSlice from "./slices/ClassListSlice";

const rootReducers = {
    modal: ModalVisibleSlice,
    choice: ChoiceSlice,
    list: ClassListSlice,
}

export const store = configureStore({
    reducer: rootReducers
})