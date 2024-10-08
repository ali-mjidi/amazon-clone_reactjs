import { Outlet } from "react-router-dom"

import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import "./style.scss";

function Layout() {
	return (
		<div className="layout">
			<Header />	
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
