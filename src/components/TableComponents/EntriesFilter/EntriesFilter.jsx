import "./EntriesFilter.css"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"


const EntriesFilter = ({ onFilter }) => {
	const filteredEmployees = useSelector(state => state.table.filteredEmployees)
	const currentPage = useSelector(state => state.table.currentPage)
	
	const handleChange = (e) => {
		onFilter(filteredEmployees, currentPage, parseInt(e.target.value))
	}

	return (
		<div className="entries-filter input-container">
			<span>Show</span>
			<select onChange={(e) => handleChange(e)} className="input">
				<option value="10">10</option>
				<option value="25">25</option>
				<option value="50">50</option>
				<option value="100">100</option>
			</select>
			<span>entries</span>
		</div>
	)
}

export default EntriesFilter

EntriesFilter.propTypes = {
	onFilter: PropTypes.func.isRequired,
}