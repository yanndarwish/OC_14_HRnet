import "./EntriesDisplayInfo.css"
import PropTypes from "prop-types"


const EntriesDisplayInfo = ({ first, second, length }) => {

	return (
		<div className="entries-display-info">
			Showing {first} to {second} of {length}
		</div>
	)
}

export default EntriesDisplayInfo

EntriesDisplayInfo.propTypes = {
	first: PropTypes.number.isRequired,
	second: PropTypes.number.isRequired,
	length: PropTypes.number.isRequired,
}