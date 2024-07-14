import { IUser } from "../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUser, fetchUsers } from "./action-creators";


interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
				state.isLoading = false;
				state.error = '';
				state.users = action.payload;
			})
			.addCase(fetchUsers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUsers.rejected, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(addUser.fulfilled, (state, action: PayloadAction<IUser[]>) => {
				state.isLoading = false;
				state.error = '';
				state.users.push(action.payload);
			})
			.addCase(addUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addUser.rejected, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
})

export default userSlice.reducer;