import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<h1></h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;