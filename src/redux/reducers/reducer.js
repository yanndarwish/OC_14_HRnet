import { combineReducers } from "@reduxjs/toolkit"
import api from "../services/api"
import employees from "../features/employeesSlice"

const rootReducer = combineReducers({
	employees,
    [api.reducerPath]: api.reducer
})

export default rootReducer