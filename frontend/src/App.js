import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/home";

const App = () => {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</CssBaseline>
	);
};

export default App;
