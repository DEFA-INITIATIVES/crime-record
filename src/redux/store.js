import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import dataReducer from "./dataSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
	data: dataReducer,
	auth: authReducer,
});
const store = configureStore({
	reducer: {
		reducer: rootReducer,
	},
	// enhancers: [composeWithDevTools()],
});

export default store;
