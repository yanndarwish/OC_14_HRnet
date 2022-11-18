import { useState } from "react"
import TableHeaderCell from "../TableHeaderCell/TableHeaderCell"
import arrow from "../../../assets/sort-arrow.svg"
import "./TableHeader.css"

const TableHeader = ({ attributes, onSorting }) => {
	const [isSorter, setIsSorter] = useState(false)

	const handleClick = (value) => {
		onSorting(value)
		setIsSorter(!isSorter)
	}

	return (
		<thead className="table-header">
			<tr className="table-row">
				{attributes &&
					attributes.map((attribute, i) => (
						<TableHeaderCell key={i} attribute={attribute} onSorting={onSorting} />
					))}
			</tr>
		</thead>
	)
}

export default TableHeader
