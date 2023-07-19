import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toggle from "../../functions/toggler";


function Navbar() {
	const [burgerIsOpen, setBurgerIsOpen] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		return function () {
			setBurgerIsOpen(!burgerIsOpen);
		};
	}, [burgerIsOpen]);

	return (
		<div className="navbar">
			<a className="navbar-logo" href="/">
				Ultrasound Assistant
			</a>
			<NavLink
				onClick={() => {
					toggle(burgerIsOpen, setBurgerIsOpen);
					if (burgerIsOpen) {
				
						navigate("/");
					}
				}}
				className="navbar-menu-opener"
				to="/"
			>
				Выбрать инструмент
			</NavLink>

			<NavLink
				onClick={() => {
					toggle(burgerIsOpen, setBurgerIsOpen);
					if (burgerIsOpen) {
				
						navigate("/");
					}
				}}
				className="navbar-burger"
				to="/"
			>
				<span></span>
			</NavLink>
		</div>
	);
}

export default Navbar;
