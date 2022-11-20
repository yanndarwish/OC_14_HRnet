import TableHeaderCell from "../TableHeaderCell/TableHeaderCell"
import PropTypes from "prop-types"
import "./TableHeader.css"

const TableHeader = ({ attributes, onSorting }) => {
	return (
		<thead className="table-header">
			<tr className="table-row">
				{attributes &&
					attributes.map((attribute, i) => (
						<TableHeaderCell
							key={i}
							attribute={attribute}
							onSorting={onSorting}
						/>
					))}
			</tr>
		</thead>
	)
}

export default TableHeader

TableHeader.propTypes = {
	attributes: PropTypes.array.isRequired,
	onSorting: PropTypes.func.isRequired,
}