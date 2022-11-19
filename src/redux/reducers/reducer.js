import { combineReducers } from "@reduxjs/toolkit"
import api from "../services/api"
import employees from "../features/employeesSlice"
import table from "../features/tableSlice"

const rootReducer = combineReducers({
	employees,
    table,
    [api.reducerPath]: api.reducer
})

export default rootReducer