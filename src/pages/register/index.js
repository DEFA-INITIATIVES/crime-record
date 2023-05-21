import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useRegister } from "../../api";

export default function Register() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		role: "",
		name: "",
	});

	const registerMutation = useRegister();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await registerMutation.mutateAsync(formData);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="relative w-full h-screen sm:bg-zinc-900/90  bg-gray-400   ">
			<img
				className="absolute w-full h-full object-cover mix-blend-overlay hidden  md:block"
				src="https://res.cloudinary.com/itgenius/image/upload/v1683377164/matt-popovich-7mqsZsE6FaU-unsplash_c7ywzi.jpg"
				alt="/"
			/>
			<div className="flex justify-center items-center h-full my-4">
				<form className="max-w-[400px] w-full mx-auto bg-white rounded-[24px] p-8">
					<h2 className="text-4xl font-bold text-center py-4 font-sans text-gray-700">
						Register
					</h2>

					<div className="flex flex-col mb-4">
						<label className="text-gray-900 font-sans font-bold">
							Name
						</label>
						<input
							className="border relative bg-gray-100 p-2 rounded-md "
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label className="text-gray-900 font-sans font-bold">
							Email
						</label>
						<input
							className="border relative bg-gray-100 p-2 rounded-md "
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col ">
						<label className="text-gray-900 font-sans font-bold">
							Role
						</label>
						<input
							className="border relative bg-gray-100 p-2 rounded-md"
							type="text"
							name="role"
							value={formData.role}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col ">
						<label className="text-gray-900 font-sans font-bold">
							Password
						</label>
						<input
							className="border relative bg-gray-100 p-2 rounded-md"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>
					<button
						onClick={handleSubmit}
						className="w-full py-3 mt-8 bg-indigo-600 rounded-md hover:bg-indigo-500 relative text-white"
					>
						Sign Up
					</button>

					<p className="flex items-center mt-2 font-semibold font-sans">
						<input className="mr-2" type="checkbox" />
						Remember Me
					</p>
					<p className="text-center mt-8 text-gray-700 font-sans cursor-pointer font-bold">
						Have an account{" "}
						<a href="/" className="text-blue-500">
							Login
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}
