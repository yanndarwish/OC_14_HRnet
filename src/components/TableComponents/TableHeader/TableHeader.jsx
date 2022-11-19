import TableHeaderCell from "../TableHeaderCell/TableHeaderCell"
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
