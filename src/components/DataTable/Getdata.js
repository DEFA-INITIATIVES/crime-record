import React from "react";
import Table, { SelectColumnFilter } from "../DataTable/index";
import apiClient from "../../api/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import addData from "../../redux/dataSlice";

const getData = () => {
	const data = [
		{
			name: "Jane Cooper",
			description: "Regional Paradigm Technician",
			code: "Optimization",
			suspect: "Admin",
		},
	];
	return [...data];
};

function Getdata() {
	const token = localStorage.getItem("userToken");
	const dispatch = useDispatch();
	

	const getReports = async () => {
		const res = await apiClient.get("/crimes", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return res.data;
	};

	const result = useQuery("crimes", getReports);

	// if (result) dispatch(addData(result.data[0]));

	const { isLoading, isError } = result;
	console.log(result.data, "hey roland am here ");

	const columns = React.useMemo(
		() => [
			{
				Header: "Name",
				accessor: "name",
				// Cell: AvatarCell,
				// imgAccessor: "imgUrl",
				// emailAccessor: "email",
			},
			{
				Header: "Description",
				accessor: "description",
			},
			// {
			//   Header: "Status",
			//   accessor: "status",
			//   Cell: StatusPill,
			// },
			{
				Header: "Code",
				accessor: "code",
			},
			{
				Header: "Suspect",
				accessor: "suspect",
				Filter: SelectColumnFilter, // new
				filter: "includes",
			},
		],
		[]
	);

	const data = React.useMemo(() => getData(), []);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">
			if(isLoading)
			{
				<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
					<div className="">
						<h1 className="text-xl font-semibold">TAMPER PROOF SYSTEM</h1>
					</div>
					<div className="mt-6">
						<Table columns={columns} data={data} />
					</div>
				</main>
			}
		</div>
	);
}
export default Getdata;
