import "./Input.css"

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
