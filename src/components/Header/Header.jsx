import { NavLink, useHref } from "react-router-dom"
import "./Header.css"

const Header = () => {
    const path = useHref()

    return (
			<header className="header">
				<div className="brand">HRnet</div>
				<nav className="primary-nav">
					{path === "/" ? (
						<NavLink to="/employees" className="nav-link">Employee List</NavLink>
					) : (
						<NavLink to="/" className="nav-link">Home</NavLink>
					)}
				</nav>
			</header>
		)
}

export default Header