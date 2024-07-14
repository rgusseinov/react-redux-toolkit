import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "../features/post-service";
import userReducer from "../reducers/user-slice";
// import { logger } from "../middleware/logger";

export const rootReducers = combineReducers({
	userReducer,
	[postApi.reducerPath]: postApi.reducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducers,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(postApi.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
