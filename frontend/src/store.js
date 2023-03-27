import { createSlice, configureStore } from '@reduxjs/toolkit'

const casesSlice = createSlice({
    name: 'cases',
    initialState: {
        caseList: []
    },
    reducers: {
        appendCase: (state, {payload}) => { state.caseList.push(payload) },
    }
})

export const { appendCase } = casesSlice.actions;

export default configureStore({
    reducer: casesSlice.reducer
})