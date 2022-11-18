import { useState, useEffect } from "react"
import "./SelectInput.css"
import "../Input/Input.css"

const SelectInput = ({ label, data, onChange }) => {
	const [selected, setSelected] = useState("")

	const toggleMenu = () => {
		const container = document.querySelector("." + label)
		if (container.classList.contains("show")) {
			container.classList.remove("show")
			container.style.height = "0"
		} else {
			container.classList.add("show")
			container.style.height = data.length * 42 <= 300 ? `${data.length * 42}px` : `${300}px`
		}
	}

	const closeMenu = () => {
		const container = document.querySelector("." + label)
		container.classList.remove("show")
		container.style.height = "0"
	}

	const handleClick = (e) => {
		const value = e.target.innerText
		setSelected(value)
		onChange && onChange(value)
	}

	// close menu if is not focused
	document.addEventListener("click", () => {
		const container = document.querySelector("." + label)
		if (container && container.classList.contains("show")) {
			const input = document.querySelector(`.input-${label}`)
			const isFocused = document.activeElement === input
			!isFocused && closeMenu()
		}
	})

	// lock the label in the upper left corner when a value is entered
	// prevents it from taking its original place
	useEffect(() => {
		selected !== "" &&
			document.querySelector(`#label-${label}`).classList.add("valid")
	}, [selected, label])

	return (
		<div className="input-container" onClick={() => toggleMenu()}>
			<div className={"input selected-input input-" + label} tabIndex="0">
				{selected}
			</div>
			<label
				htmlFor={label}
				id={"label-" + label}
				className={"input-label select-label label-" + label}
			>
				{label}
			</label>
			<div className={"option-container " + label}>
				{data &&
					data.map((option, i) => (
						<div
							key={i}
							value={typeof option === "object" ? option.abbreviation : option}
							className="option"
							onClick={(e) => handleClick(e)}
						>
							{typeof option === "object" ? option.name : option}
						</div>
					))}
			</div>
		</div>
	)
}

export default SelectInput
