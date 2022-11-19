import { createSlice } from "@reduxjs/toolkit"
import api from "../services/api"

const initialState = {
	employees: [],
}

export const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		sortEmployees(state, action) {
			state.employees = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			api.endpoints.getEmployees.matchFulfilled,
			(state, action) => {
				state.employees = action.payload
			}
		)
	},
})

export const { sortEmployees } = employeesSlice.actions
export default employeesSlice.reducer
