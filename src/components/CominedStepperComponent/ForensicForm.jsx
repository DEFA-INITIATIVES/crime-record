import React, { useState } from "react";
import { usePostData } from "../../api/hooks/usePostData";
import { displaySuccessMessage } from "../toast/Toast";
import { useSelector } from "react-redux";

function ForensicForm({ setIsOpen }) {
	const postDataMutation = usePostData("/forensics/create");

	const crimeId = useSelector((state) => state?.data?.crimeId);
	const [formData, setFormData] = useState({
		crimeId: crimeId,
		description: "",
		photos: [],
	});
	const [loading, setLoading] = useState(false);

	console.log(formData);
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
				displaySuccessMessage("Report created successfully");
				setIsOpen(false);
			}
		} catch (error) {
			console.log("===", error, "===");
		} finally {
			setLoading(false);
		}
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			const base64Data = reader.result.split(",")[1]; // Extract base64 data without the "data:image/png;base64," prefix

			setFormData((prevFormData) => ({
				...prevFormData,
				photos: base64Data,
			}));
		};

		if (file) {
			const blob = new Blob([file]);
			reader.readAsDataURL(blob);
		}
	};

	return (
		<div className="flex justify-center flex-col items-center">
			<div className="grid grid-col-1 gap-8 w-full mx-auto px-5">
				<div>
					<div className="mb-2">
						<label
							className="text-sm text-start font-bold"
							htmlFor="caseID"
						>
							CrimeId{" "}
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="crimeId"
							onChange={handleChange}
							value={formData.crimeId}
							name="crimeId"
							type="text"
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
							rows="6"
							cols="60"
							placeholder="one line description"
						></textarea>
					</div>

					<div class="mt-4">
						<label class="flex justify-center w-full h-[16rem] px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
							<span class="flex items-center space-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-6 h-6 text-gray-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
									/>
								</svg>
								<span class="font-medium text-gray-600">
									Drop files to Attach, or
									<span class="text-blue-600 underline">browse</span>
								</span>
							</span>
							<input
								type="file"
								name="photos"
								class="hidden"
								onChange={handleFileInputChange}
							/>
						</label>
					</div>
				</div>
			</div>

			<div className="flex justify-center py-8">
				<button
					onClick={handleSubmit}
					className="bg-green-500 text-white uppercase py-4 px-4 max-w-full rounded-md font-semibold cursor-pointer hover:bg-slate-700/50 hover:text-white transition duration-200 ease-in-out"
				>
					Upload To blockchain
				</button>
			</div>
		</div>
	);
}

export default ForensicForm;
