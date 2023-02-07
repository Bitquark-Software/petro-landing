import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<h1></h1>
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;