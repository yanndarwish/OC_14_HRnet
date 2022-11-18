import { useState } from "react"
import arrow from "../../../assets/sort-arrow.svg"

const TableHeaderCell = ({ attribute, onSorting }) => {
	const [isSorter, setIsSorter] = useState(false)

	const handleClick = (value) => {
		onSorting(value)
		setIsSorter(!isSorter)
	}

	return (
		<th
			value={attribute.value}
			className="table-header-item"
			onClick={() => {
				handleClick(attribute.value)
			}}
		>
			<p>{attribute.name}</p>
			<div className="filter-icon-container">
				<div className="filter-icon">
					<img
						src={arrow}
						alt="sort-arrow"
						className="sort-arrow sort-arrow-up"
					/>
				</div>
				{!isSorter && (
					<div className="filter-icon">
						<img
							src={arrow}
							alt="sort-arrow"
							className="sort-arrow sort-arrow-down"
						/>
					</div>
				)}
			</div>
		</th>
	)
}

export default TableHeaderCell