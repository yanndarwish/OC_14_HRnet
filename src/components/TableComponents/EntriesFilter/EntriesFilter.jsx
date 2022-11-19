const EntriesFilter = ({ onFilter }) => {
	const handleChange = (e) => {
		onFilter(parseInt(e.target.value))
	}

	return (
		<div className="entries-filter">
			<span>Show</span>
			<select onChange={(e) => handleChange(e)}>
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
