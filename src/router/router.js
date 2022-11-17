import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root/Root"
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee"
import EmployeeList from "../pages/EmployeeList/EmployeeList"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <CreateEmployee />,
			},
			{
				path: "/employees",
				element: <EmployeeList />,
			},
		],
	},
])

export default router
