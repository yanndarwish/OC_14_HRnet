import Table from "../../components/Table/Table"
import { useGetEmployeesQuery } from "../../redux/services/api"


const EmployeeList = () => {
	const { data, error, isLoading } = useGetEmployeesQuery()

	return (
		<>
			<h1 className="main-title slide-in two">Employee List</h1>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<Table />
			) : null}
		</>
	)
}

export default EmployeeList
