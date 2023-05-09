import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://crimes-api.onrender.com/api", // Replace with your authentication API endpoint
});

export default apiClient;
