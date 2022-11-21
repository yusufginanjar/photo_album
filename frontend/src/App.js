import React from "react";
import Layout from "./component/layout";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<Layout>Photo album app</Layout>
			</ThemeProvider>
		</CssBaseline>
	);
};

export default App;
