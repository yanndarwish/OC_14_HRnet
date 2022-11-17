import { useState, useEffect } from "react"

const EmployeeList = () => {
	const [employees, setEmployees] = useState([]) 

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await fetch("http://localhost:3000/employees")
				const data = await response.json()
				setEmployees(data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchEmployees()
	}, [])

	console.log(employees)

	return (
		<>
			<h1 className="main-title">Employee List</h1>
		</>
	)
}

export default EmployeeList
