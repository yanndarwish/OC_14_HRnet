import "./Input.css"

const Input = ({ type = "text", label }) => {
	return (
		<div className="input-container">
			<input type={type} id={label} className="input" required/>
			<label htmlFor={label} className="input-label">
				{label}
			</label>
		</div>
	)
}

export default Input
