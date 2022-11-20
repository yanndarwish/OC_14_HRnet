import PropTypes from "prop-types"
import "../TableHeader/TableHeader.css"
import "./TableRow.css"


const TableRow = ({ employee }) => {
	return (
		<tr className="table-row" id={employee.id}>
			<td className="table-cell">{employee.firstName}</td>
			<td className="table-cell">{employee.lastName}</td>
			<td className="table-cell">{employee.startDate}</td>
			<td className="table-cell">{employee.department}</td>
			<td className="table-cell">{employee.dateOfBirth}</td>
			<td className="table-cell">{employee.street}</td>
			<td className="table-cell">{employee.city}</td>
			<td className="table-cell">{employee.state}</td>
			<td className="table-cell">{employee.zipCode}</td>
		</tr>
	)
}

export default TableRow

TableRow.propTypes = {
	employee: PropTypes.object.isRequired,
}