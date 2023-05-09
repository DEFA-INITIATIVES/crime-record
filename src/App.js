import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/home";
import NotFoundpage from "./pages/Notfound/notFound";
import Register from "./pages/register";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
	return (
		<div className="">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="home"
					element={<ProtectedRoute element={<HomePage />} />}
				/>
				<Route path="/signup" element={<Register />} />
				<Route path="*" element={<NotFoundpage />} />
			</Routes>
		</div>
	);
}
export default App;
