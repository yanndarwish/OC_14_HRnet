import "./Input.css"
import PropTypes from "prop-types"


const Input = ({ type = "text", label, onChange }) => {
	return (
		<div className="input-container">
			<input type={type} id={label} className="input" onChange={(e) => onChange && onChange(e.target.value)} required/>
			<label htmlFor={label} className="input-label">
				{label}
			</label>
		</div>
	)
}

export default Input

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func,
}