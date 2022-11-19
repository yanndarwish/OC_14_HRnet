import { createSlice } from "@reduxjs/toolkit"
import api from "../services/api"


const initialState = {
	filteredEmployees: [],
    pageContent: [],
	entriesPerPage: 10,
	currentPage: 1,
	pageAmount: 1,
    sorter: ""
}

const tableSlice = createSlice({
	name: "table",
	initialState,
	reducers: {
		updateEmployees(state, action) {
			state.filteredEmployees = action.payload
		},
		updatePageContent(state, action) {
			state.pageContent = action.payload
		},
		updatePageAmount(state, action) {
			state.pageAmount = action.payload
		},
		updateEntriesPerPage(state, action) {
			state.entriesPerPage = action.payload
		},
		updateCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		updateSorter(state, action) {
			state.sorter = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			api.endpoints.getEmployees.matchFulfilled,
			(state, action) => {
				state.filteredEmployees = action.payload
			}
		)
	},
})

export const {
	updateCurrentPage,
    updatePageContent,
	updateEmployees,
	updateEntriesPerPage,
	updatePageAmount,
    updateSorter
} = tableSlice.actions

export default tableSlice.reducer