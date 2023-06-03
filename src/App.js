import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/home";
import NotFoundpage from "./pages/Notfound/notFound";
import Register from "./pages/register";
import { ProtectedRoute } from "./ProtectedRoute";
import Crime from "./pages/crime";
import Evidence from "./pages/evidence";
import EvidenceInfo from "./pages/evidenceInfo";
import Redirection from "./pages/Redirection";
import Forensic from "./pages/home/Forensic";

function App() {
	return (
		<div className="">
			<Routes>
				<Route
					index
					path="/"
					element={<ProtectedRoute element={<HomePage />} />}
				/>

				<Route
					path="/crime"
					element={<ProtectedRoute element={<Crime />} />}
				/>
				<Route
					path="/evidence"
					element={<ProtectedRoute element={<Evidence />} />}
				/>

                   <Route
					path="/evidence/:id"
					element={<ProtectedRoute element={<EvidenceInfo />} />}
				/>
				<Route
					path="/redirect"
					element={<ProtectedRoute element={<Redirection />} />}
				/>

				<Route
					path="/forensic"
					element={<ProtectedRoute element={<Forensic />} />}
				/>

				

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				<Route path="*" element={<NotFoundpage />} />
			</Routes>
		</div>
	);
}
export default App;
