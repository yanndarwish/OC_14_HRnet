import { useEffect, useState } from "react"

const EntriesDisplayInfo = ({ first, second, length }) => {

	return (
		<div>
			Showing {first} to {second} of {length}
		</div>
	)
}

export default EntriesDisplayInfo
