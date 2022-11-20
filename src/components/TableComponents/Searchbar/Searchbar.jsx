import PropTypes from "prop-types"

const Searchbar = ({ onSearch }) => {
	const onKeyUp = (e) => {
		onSearch(e.target.value, e.key)
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
