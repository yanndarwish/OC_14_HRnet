import { useState, useEffect } from "react"
import { employeeAttributeList } from "../../data/employeeAttributeList"
import TableHeader from "../TableComponents/TableHeader/TableHeader"
import TableRow from "../TableComponents/TableRow/TableRow"
import { useSelector } from "react-redux"
import Searchbar from "../TableComponents/Searchbar/Searchbar"
import EntriesFilter from "../TableComponents/EntriesFilter/EntriesFilter"
import EntriesDisplayInfo from "../TableComponents/EntriesDisplayInfo/EntrieDisplayInfo"
import Pager from "../TableComponents/Pager/Pager"
import { useDispatch } from "react-redux"
import {
	updateEmployees,
	updateEntriesPerPage,
	updatePageContent,
	updateSorter,
} from "../../redux/features/tableSlice"
import { sortEmployees } from "../../redux/features/employeesSlice"

const Table = () => {
	const employees = useSelector((state) => state.employees.employees)
	const currentPage = useSelector((state) => state.table.currentPage)
	const entriesPerPage = useSelector((state) => state.table.entriesPerPage)
	const pageContent = useSelector((state) => state.table.pageContent)
	const sorter = useSelector((state) => state.table.sorter)
	const filteredEmployees = useSelector(
		(state) => state.table.filteredEmployees
	)
	const [pageAmount, setPageAmount] = useState(1)
	const [first, setFirst] = useState(0)
	const [second, setSecond] = useState(0)
	const dispatch = useDispatch()

	const onSorting = (value) => {
		let arrayCopy = [...filteredEmployees]

		if (sorter === value) {
			arrayCopy.sort((a, b) => a.id - b.id)
			dispatch(updateSorter(""))
		} else {
			if (value.toLowerCase().includes("date")) {
				arrayCopy.sort((a, b) => {
					a = a[value].split("/")
					const monthA = a.splice(0, 1)[0]
					a.splice(1, 0, monthA)
					a = a.reverse().join("")
					b = b[value].split("/")
					const monthB = b.splice(0, 1)[0]
					b.splice(1, 0, monthB)
					b = b.reverse().join("")
					return a > b ? 1 : a < b ? -1 : 0
				})
			} else {
				arrayCopy.sort((a, b) => {
					return a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0
				})
			}
			dispatch(updateSorter(value))
		}
		dispatch(updateEmployees(arrayCopy))
		dispatch(sortEmployees(arrayCopy))
	}

	const onFilter = (value = "") => {
		dispatch(updateEntriesPerPage(value))

		let slice = filteredEmployees.slice(
			currentPage * value - value,
			currentPage * value
		)

		dispatch(updatePageContent(slice))
		setPageAmount(Math.ceil(filteredEmployees.length / entriesPerPage))
	}

	const onSearch = (string, key) => {
		let matches = []
		const hay = key === "Backspace" ? employees : filteredEmployees
		// find matches
		hay.forEach((employee) => {
			let str
			const keys = Object.keys(employee)
			keys.forEach((key) => {
				str += employee[key]
			})
			str.toLowerCase().includes(string.toLowerCase()) && matches.push(employee)
		})

		dispatch(updateEmployees(matches))
	}

	const computeEntriesStatus = () => {
		if (filteredEmployees.length < entriesPerPage) {
			setSecond(filteredEmployees.length)
		} else {
			setFirst(currentPage * entriesPerPage - entriesPerPage + 1)
			if (currentPage * entriesPerPage < filteredEmployees.length) {
				setSecond(currentPage * entriesPerPage)
			} else {
				setSecond(filteredEmployees.length)
			}
		}
	}

	useEffect(() => {
		onFilter(entriesPerPage)
		computeEntriesStatus()
	}, [currentPage, entriesPerPage, filteredEmployees])

	return (
		<div className="table-container">
			<EntriesFilter onFilter={onFilter} />
			<Searchbar onSearch={onSearch} />
			<table className="table">
				<TableHeader attributes={employeeAttributeList} onSorting={onSorting} />
				{/* todo make row rendering dynamic */}
				<tbody className="table-body">
					{pageContent.map((employee) => (
						<TableRow key={employee.id} employee={employee} />
					))}
				</tbody>
			</table>
			<EntriesDisplayInfo
				first={first}
				second={second}
				length={filteredEmployees.length}
			/>
			<Pager pageAmount={pageAmount} />
		</div>
	)
}

export default Table
