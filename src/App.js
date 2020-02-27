import React from "react";
import Header from "./components/Header.js";
import { Route, Switch } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";

const App = () => {
	return (
		<main>
			<Header />

			<Switch>
				<Route
					exact
					path="/"
					render={props => <WelcomePage {...props} />}
				/>
				<Route
					exact
					path="/characters"
					render={props => <CharacterList {...props} />}
				/>
			</Switch>
		</main>
	);
};

export default App;
