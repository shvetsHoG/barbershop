import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    masters: [
        {
            id: 1,
            name: "Любой специалист",
            focus: false,
        },
        {
            id: 2,
            name: "Любой специалист",
            focus: false,
        },
        {
            id: 3,
            name: "Любой специалист",
            focus: false,
        },
        {
            id: 4,
            name: "Любой специалист",
            focus: false,
        },
    ]
}

const ClassListSlice = createSlice({
    name:"classList",
    initialState,
    reducers: {
        setAllFalse: (state) => {
            state.masters.map(master => master.focus = false)
        },

        setTrueById: (state, {payload}) => {
            for (let master of state.masters) {
                if (master.id === payload) {
                    master.focus = true;
                    break;
                }
            }
        }
    }
})


export default ClassListSlice.reducer
export const {setAllFalse, setTrueById} = ClassListSlice.actions