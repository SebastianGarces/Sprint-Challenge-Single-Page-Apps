import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
	return (
		<SyledHeader className="ui centered">
			<h1 className="ui center">Rick &amp; Morty Fan Page</h1>
			<nav className="nav-container">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/characters">Characters</NavLink>
			</nav>
		</SyledHeader>
	);
}

const SyledHeader = styled.header`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	justify-content: space-around;

	.nav-container {
		width: 100%;
		display: flex;
		justify-content: space-around;

		a {
			text-decoration: none;
			color: #333;
			border: 1px solid red;
			padding: 0.5rem;

			&:hover {
				background: violet;
			}
		}
	}
`;
