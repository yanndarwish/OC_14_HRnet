import "./Button.css"
import PropTypes from "prop-types"

const Button = ({label, onClick}) => {
    return (
        <button className="button" onClick={e => (onClick && onClick())}>{label}</button>
    )
}

export default Button

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}