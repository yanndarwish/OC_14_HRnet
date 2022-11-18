import "./Button.css"

const Button = ({label, onClick}) => {
    return (
        <button className="button" onClick={e => (onClick && onClick(e))}>{label}</button>
    )
}

export default Button