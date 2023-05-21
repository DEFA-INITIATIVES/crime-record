import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api";
import { AuthProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ReactQueryDevtools } from "react-query/devtools";

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Provider store={store}>
					<AuthProvider>
						<App />
					</AuthProvider>
				</Provider>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
