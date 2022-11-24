import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { employeeAttributeList } from "../../data/employeeAttributeList"
import TableHeader from "../TableComponents/TableHeader/TableHeader"
import TableRow from "../TableComponents/TableRow/TableRow"
import Searchbar from "../TableComponents/Searchbar/Searchbar"
import EntriesFilter from "../TableComponents/EntriesFilter/EntriesFilter"
import EntriesDisplayInfo from "../TableComponents/EntriesDisplayInfo/EntrieDisplayInfo"
import Pager from "../TableComponents/Pager/Pager"
import { sortEmployees } from "../../redux/features/employeesSlice"
import {
	updateCurrentPage,
	updateEmployees,
	updateEntriesPerPage,
	updatePageContent,
	updateSorter,
} from "../../redux/features/tableSlice"
import "./Table.css"

const Table = () => {
	const currentPage = useSelector((state) => state.table.currentPage)
	const entriesPerPage = useSelector((state) => state.table.entriesPerPage)
	const pageContent = useSelector((state) => state.table.pageContent)
	const filteredEmployees = useSelector(
		(state) => state.table.filteredEmployees
	)
	const [pageAmount, setPageAmount] = useState(1)
	const [first, setFirst] = useState(0)
	const [second, setSecond] = useState(0)
	const dispatch = useDispatch()

	// when sorting from the header cells
	// sorts the emloyees arrays based on the actual sorter
	const onSorting = (value, sorter, filteredEmployees) => {
		const arrayCopy = [...filteredEmployees]
		//  if is already sorted, then sort by ID
		if (sorter === value) {
			arrayCopy.sort((a, b) => a.id - b.id)
			dispatch(updateSorter(""))
		} else {
			// else sort by value
			arrayCopy.sort((a, b) => {
				return a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0
			})
			dispatch(updateSorter(value))
		}
		dispatch(updateEmployees(arrayCopy))
		dispatch(sortEmployees(arrayCopy))
	}

	// when modifying the "entries per page" number
	// updates the page content based on the current page, the number of items per page and the employees array
	const onFilter = (filteredEmployees, currentPage, value) => {
		dispatch(updateEntriesPerPage(value))
		// slice the right portion from the array and update the page content
		const slice = filteredEmployees.slice(
			currentPage * value - value,
			currentPage * value
		)

		dispatch(updatePageContent(slice))
		setPageAmount(Math.ceil(filteredEmployees.length / value))
	}

	// when searching in the searchbar
	// update emloyees array with the matches
	const onSearch = (string, employees) => {
		dispatch(updateCurrentPage(1))
		let matches = []

		// find matches in every properties of the employee object
		employees.forEach((employee) => {
			let str
			const keys = Object.keys(employee)
			keys.forEach((key) => {
				str += employee[key]
			})
			str.toLowerCase().includes(string.toLowerCase()) && matches.push(employee)
		})

		dispatch(updateEmployees(matches))
	}

	// update the infos of entriesDisplayInfo component => "showing ... to ... of ..." (bottom left)
	// based on the current page, the number of items per page and the employees array
	const computeEntriesStatus = (
		filteredEmployees,
		currentPage,
		entriesPerPage
	) => {
		if (filteredEmployees.length < entriesPerPage) {
			setFirst(1)
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
		onFilter(filteredEmployees, currentPage, entriesPerPage)
		computeEntriesStatus(filteredEmployees, currentPage, entriesPerPage)
	}, [currentPage, entriesPerPage, filteredEmployees])

	return (
		<div className="table-container">
			<div className="table-top">
				<EntriesFilter onFilter={onFilter} />
				<Searchbar onSearch={onSearch} />
			</div>
			<div className="table-wrapper">
				<table className="table">
					<TableHeader
						attributes={employeeAttributeList}
						onSorting={onSorting}
					/>
					<tbody className="table-body">
						{pageContent.map((employee) => (
							<TableRow key={employee.id} employee={employee} />
						))}
					</tbody>
				</table>
			</div>
			<div className="table-bottom">
				<EntriesDisplayInfo
					first={first}
					second={second}
					length={filteredEmployees.length}
				/>
				<Pager pageAmount={pageAmount} />
			</div>
		</div>
	)
}

export default Table
