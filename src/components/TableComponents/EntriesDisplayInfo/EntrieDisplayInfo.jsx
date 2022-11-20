import "./EntriesDisplayInfo.css"

const EntriesDisplayInfo = ({ first, second, length }) => {

	return (
		<div className="entries-display-info">
			Showing {first} to {second} of {length}
		</div>
	)
}

export default EntriesDisplayInfo
