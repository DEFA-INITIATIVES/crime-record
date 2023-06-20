import React, { useState } from "react";
import { usePostData } from "../../api/hooks/usePostData";
import { displaySuccessMessage, displayErrorMessage } from "../toast/Toast";
import { useSelector } from "react-redux";
import axios from "axios";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
	name: "file",
	multiple: true,
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	onChange(info) {
		const { status } = info.file;
		if (status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (status === "done") {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		console.log("Dropped files", e.dataTransfer.files);
	},
};

function ForensicForm({ setIsOpen }) {
	const postDataMutation = usePostData("/forensics/create");

	const crimeId = useSelector((state) => state?.data?.crimeId);
	const [files, setFiles] = useState("");
	const [formData, setFormData] = useState({
		crimeId: crimeId,
		description: "",
		photos: [],
	});
	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	console.log(formData);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevformData) => ({ ...prevformData, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!formData.description) {
			displayErrorMessage("Description and photos are  required");
		}
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

	const handleFileInputChange = async (e) => {
		setFiles(e.target.files);
		setSelectedFile(files);

		const urls = await Promise.all(
			Object.values(files).map(async (file) => {
				const data = new FormData();
				data.append("file", file);
				data.append("upload_preset", "upload");
				console.log(data);
				const uploadRes = await axios.post(
					"https://api.cloudinary.com/v1_1/ultronic-software-developers/image/upload",
					data
				);

				const { url } = uploadRes.data;
				console.log(url);
				return url;
			})
		);

		setFormData((prevFormData) => ({
			...prevFormData,
			photos: [...prevFormData.photos, ...urls],
		}));
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
							disabled
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

					{/* <div className="mt-4">
						<label className="flex justify-center w-full h-[16rem] px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
							<span className="flex items-center space-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 text-gray-600"
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
								<span className="font-medium text-gray-600">
									{selectedFile ? (
										<img
											src={URL.createObjectURL(selectedFile)}
											alt="Selected"
											className="h-16 w-16 object-cover"
										/>
									) : (
										<>
											Drop files to Attach, or
											<span className="text-blue-600 underline">
												{" "}
												browse
											</span>
										</>
									)}
								</span>
							</span>
							<input
								type="file"
								name="photos"
								className="hidden"
								id="file"
								onChange={handleFileInputChange}
							/>
						</label>
					</div> */}

					<Dragger {...props}>
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
						<p className="ant-upload-text">
							Click or drag file to this area to upload
						</p>
						<p className="ant-upload-hint">
							Support for a single or bulk upload. Strictly prohibited
							from uploading company data or other banned files.
						</p>
					</Dragger>
				</div>
			</div>

			<div className="flex justify-center py-8">
				<button
					disabled={!formData.description || !formData.photos}
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
