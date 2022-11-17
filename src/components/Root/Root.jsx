import { Outlet } from "react-router-dom"
import "./Root.css"
import Header from "../Header/Header"

const Root = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default Root