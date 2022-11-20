import "./EntriesFilter.css"

const EntriesFilter = ({ onFilter }) => {
	const handleChange = (e) => {
		onFilter(parseInt(e.target.value))
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
