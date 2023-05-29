import React, { useState } from "react";
import { usePostData } from "../../api/hooks/usePostData";

import { displaySuccessMessage } from "../toast/Toast";

function Form({ setIsOpen }) {
	const postDataMutation = usePostData("/crimes/create");

	const [formData, setFormData] = useState({
		name: "",
		crimeCode: "",
		suspect: "",
		description: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevformData) => ({ ...prevformData, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await postDataMutation.mutateAsync(formData);
			setLoading(!loading);
			if (response.status == "201") {
				displaySuccessMessage("Crime created successfully");
				setIsOpen(false);
			}
		} catch (error) {
			console.log("===", error, "===");
		} finally {
			setLoading(false);
		}
	};

	// const handleFileInputChange = (e) => {
	// 	const { name } = e.target;
	// 	setformData((prevformData) => ({
	// 		...prevformData,
	// 		[name]: e.target.files[0],
	// 	}));
	// };

	return (
		<div className="flex justify-center flex-col items-center">
			<div className="grid grid-cols-2 gap-8 w-full mx-auto px-5">
				<div>
					<div className="mb-2">
						<label className="text-sm font-bold" htmlFor="caseID">
							Case Name{" "}
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							onChange={handleChange}
							value={formData.name}
							name="name"
							type="text"
							placeholder="rape"
						/>
					</div>

					<div className="mb-2">
						<label className="text-sm font-bold" htmlFor="code">
							Code
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="crimeCode"
							onChange={handleChange}
							value={formData.crimeCode}
							name="crimeCode"
							type="text"
							placeholder="bv123x"
						/>
					</div>
				</div>

				<div>
					<div className="mb-2">
						<label className="text-sm font-bold" htmlFor="exhibitName">
							Suspect
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="suspect"
							onChange={handleChange}
							value={formData.suspect}
							name="suspect"
							type="text"
							placeholder="suspect name"
						/>
					</div>

					<div className="mb-2">
						<label className="text-sm font-bold" htmlFor="description">
							Description
						</label>
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="description"
							onChange={handleChange}
							value={formData.description}
							name="description"
							type="text"
							rows="1"
							cols="60"
							placeholder="one line description"
						></textarea>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-4">
				<button
					onClick={handleSubmit}
					className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
				>
					{loading ? (
						<div>Uploading....</div>
					) : (
						<div>Upload To blockchain</div>
					)}
				</button>
			</div>
		</div>
	);
}

export default Form;
