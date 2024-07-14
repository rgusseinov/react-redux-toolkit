import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
	'user/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
		}
	}
)

export const addUser = createAsyncThunk(
	'user/addUser',
	async (user, thunkAPI) => {
		try {
			const response = await axios.post<IUser>('https://jsonplaceholder.typicode.com/users', user);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue("Не удалось добавить пользователя")
		}
	}
)