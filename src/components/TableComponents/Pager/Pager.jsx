import { useDispatch, useSelector } from "react-redux"
import { updateCurrentPage } from "../../../redux/features/tableSlice"
import PropTypes from "prop-types"
import "./Pager.css"


const Pager = ({ pageAmount }) => {
	const dispatch = useDispatch()
	const currentPage = useSelector(state => state.table.currentPage)

	const handleClick = (e) => {
		if (e.target.value === "next") {
			dispatch(updateCurrentPage(currentPage + 1))
		} else {
			dispatch(updateCurrentPage(currentPage - 1))
		}
	}

	return (
		<div className="pager">
			<button
				className={currentPage === 1 ? "disabled page-button button" : "page-button button"}
				value="prev"
				onClick={(e) => handleClick(e)}
			>
				Previous
			</button>
			<span>{currentPage}</span>
			<button
				className={
					currentPage === pageAmount ? "disabled page-button button" : "page-button button"
				}
				value="next"
				onClick={(e) => handleClick(e)}
			>
				Next
			</button>
		</div>
	)
}

export default Pager

Pager.propTypes = {
	pageAmount: PropTypes.number.isRequired,
}