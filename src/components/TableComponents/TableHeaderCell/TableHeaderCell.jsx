import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import arrow from "../../../assets/sort-arrow.svg"
import arrowBlue from "../../../assets/sort-arrow-blue.svg"

const TableHeaderCell = ({ attribute, onSorting }) => {
	const sorter = useSelector((state) => state.table.sorter)

	const handleClick = (value) => {
		onSorting(value)
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
						src={sorter === attribute.value ? arrowBlue : arrow}
						alt="arrow-icon"
						className="sort-arrow sort-arrow-up"
					/>
				</div>
				{sorter !== attribute.value && (
					<div className="filter-icon">
						<img
							src={arrow}
							alt="arrow-icon"
							className="sort-arrow sort-arrow-down"
						/>
					</div>
				)}
			</div>
		</th>
	)
}

export default TableHeaderCell

TableHeaderCell.propTypes = {
	attribute: PropTypes.object.isRequired,
	onSorting: PropTypes.func.isRequired,
}