import React from "react";
import styled from "styled-components";

export default function CharacterCard({
	character: { name, status, species, image }
}) {
	console.log("name", name);

	return (
		<StyledCard>
			<img src={image} alt="character image" />
			<StyledText>
				<h3>{name}</h3>
				<p className="status">{`Status: ${status}`}</p>
				<p className="species">{`Species: ${species}`}</p>
			</StyledText>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	border: 1px solid red;
	flex-grow: 1;
	margin: 1rem;

	img {
		width: 100%;
	}
`;

const StyledText = styled.div`
	padding: 1rem;
`;
