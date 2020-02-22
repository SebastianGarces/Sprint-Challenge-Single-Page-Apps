import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
	const [data, setData] = useState();
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(res => setData(res.data))
			.catch(err => console.log(err));
	}, []);

	const filteredCharacters = data?.results.filter(character => {
		return (
			character.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
		);
	});

	console.log("filteredCharacter: ", filteredCharacters);

	console.log("data", data?.results);

	if (!data) return <h1>Loading...</h1>;

	return (
		<StyledCharacterList className="character-list">
			<h2>All The Characters!</h2>

			<SearchForm search={search} setSearch={setSearch} />

			<StyledCardContainer>
				{filteredCharacters.map(character => {
					return (
						<CharacterCard
							character={character}
							key={character.id}
						/>
					);
				})}
			</StyledCardContainer>
		</StyledCharacterList>
	);
}

const StyledCardContainer = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const StyledCharacterList = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
