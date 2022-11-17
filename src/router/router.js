import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root/Root"
import CreateEmployee from "../pages/CreateEmployee"
import EmployeeList from "../pages/EmployeeList"

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
