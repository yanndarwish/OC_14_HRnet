const Searchbar = ({ onSearch }) => {
	const onKeyUp = (e) => {
		onSearch(e.target.value, e.key)
	}

	return (
		<input
			type="text"
			id="searchbar"
			onKeyUp={(e) => onKeyUp(e)}
			placeholder="Search ..."
		/>
	)
}
export default Searchbar
