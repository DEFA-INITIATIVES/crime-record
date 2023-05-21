/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    reportsData:null
}
const dataSlice = createSlice({
	name: "data",
	initialState: [],
	reducers: {
		addData: (state, action) => {
			state.reportsData(action.payload);
		},
	},
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
