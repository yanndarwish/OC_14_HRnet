import { NavLink, useHref } from "react-router-dom"

const Header = () => {
    const path = useHref()

    return (
			<header>
				<div className="brand">HRnet</div>
				<nav>
					{path === "/" ? (
						<NavLink to="/employees">Employee List</NavLink>
					) : (
						<NavLink to="/">Home</NavLink>
					)}
				</nav>
			</header>
		)
}

export default Header