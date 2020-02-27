import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap, { Power3 } from "gsap";

export default function CharacterCard({
	character: { name, status, species, image }
}) {
	let card = useRef(null);

	useEffect(() => {
		gsap.from(card, {
			duration: 0.4,
			autoAlpha: 0,
			ease: Power3.Out,
			scale: 0.1
		});

		return () => {
			gsap.to(card, {
				duration: 0.4,
				y: 200,
				autoAlpha: 0,
				ease: Power3.Out,
				scale: 0.1,
				transformOrigin: "50% 50%"
			});
		};
	}, []);

	return (
		<StyledLine>
			<StyledCard ref={el => (card = el)}>
				<img src={image} alt="character" />
				<StyledText>
					<h3>{name}</h3>
					<p className="status">{`Status: ${status}`}</p>
					<p className="species">{`Species: ${species}`}</p>
				</StyledText>
			</StyledCard>
		</StyledLine>
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

const StyledLine = styled.div`
	overflow: hidden;
	height: 490px;
`;
