import { useMutation } from "react-query";
import apiClient from "./apiClient";

export function SubmitData(data) {
	return useMutation(async () => {
		const response = await apiClient.post("/crimes/create", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response) {
			throw new Error("Failed to submit data ");
		}

		return response.json();
	});
}
