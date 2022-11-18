import { useState, useEffect } from "react"
import { employeeAttributeList } from "../../data/employeeAttributeList"
import TableHeader from "../TableComponents/TableHeader/TableHeader"

const Table = () => {
	const onSorting = (value) => {
		console.log(value)
	}
	return (
		<div className="table-container">
			<table className="table">
				<TableHeader attributes={employeeAttributeList} onSorting={onSorting}/>
				<thead className="table-header">
					{/* todo make row rendering dynamic */}
					<tr className="table-row"></tr>
				</thead>
			</table>
		</div>
	)
}

export default Table
