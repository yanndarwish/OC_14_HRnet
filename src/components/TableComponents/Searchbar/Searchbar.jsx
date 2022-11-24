import { useSelector } from "react-redux"
import PropTypes from "prop-types"

const Searchbar = ({ onSearch }) => {
	const employees = useSelector((state) => state.employees.employees)
	const filteredEmployees = useSelector(
		(state) => state.table.filteredEmployees
	)

	const onKeyUp = (e) => {
		e.key === "Backspace" ? onSearch(e.target.value, employees) : onSearch(e.target.value, filteredEmployees)
	}

	return (
		<div className="input-container">
			<input
				type="text"
				id="searchbar"
				className="input"
				onKeyUp={(e) => onKeyUp(e)}
				required
				autoComplete="off"
			/>
			<label htmlFor="searchbar" className="input-label">
				Search
			</label>
		</div>
	)
}
export default Searchbar

Searchbar.propTypes = {
	onSearch: PropTypes.func.isRequired,
}
