import { useMutation } from "react-query";
import apiClient from "../apiClient";

export const usePostData = () => {
	const token = localStorage.getItem("userToken");
	console.log(token, "=================");
	return useMutation(async (formData) => {
		try {
			const response = await apiClient.post("/crimes/create", formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data;
		} catch (error) {
			console.error("Error in usePostData mutation:", error);
		}
	});
};