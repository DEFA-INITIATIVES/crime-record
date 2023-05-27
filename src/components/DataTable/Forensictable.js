/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import qs from "qs";
// import { SelectColumnFilter } from "../DataTable/index";
import apiClient from "../../api/apiClient";
import { useQuery } from "react-query";
// import { useDispatch } from "react-redux";
// import { useQuery } from "react-query";

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
const getRandomuserParams = (params) => ({
	results: params.pagination?.pageSize,
	page: params.pagination?.current,
	...params,
});
function Forensics() {
	const token = localStorage.getItem("userToken");
	// const dispatch = useDispatch();
	// const [resultData, setResult] = useState();

	const [crimedata, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});

	const getReports = async () => {
		const res = await apiClient.get("/forensics", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};
	useEffect(() => {
		getReports();
	}, [JSON.stringify(tableParams)]);

	// console.log(crimedata, "<<<<<<");

	const handleTableChange = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters,
			...sorter,
		});

		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};

	const result = useQuery("crimes", getReports);
   console.log(result)
	// if (result) dispatch(addData(result.data[0]));

	// const { isLoading, isError } = result;
	// // console.log(result.data, "hey roland am here ");

	const columns = React.useMemo(
		() => [
			{
				title: "Name",
				dataIndex: "name",
				// Cell: AvatarCell,
				// imgAccessor: "imgUrl",
				// emailAccessor: "email",
			},
			{
				title: "Description",
				dataIndex: "description",
			},
			// {
			//   Header: "Status",
			//   accessor: "status",
			//   Cell: StatusPill,
			// },
			{
				title: "Code",
				dataIndex: "code",
			},
			{
				title: "Suspect",
				dataIndex: "suspect",
				// Filter: SelectColumnFilter, // new
				// filter: "includes",
			},
		],
		[]
	);

	const data = React.useMemo(() => getData(), []);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">

				<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
					<div className="">
						<h1 className="text-xl font-semibold">  FORENSICS MODULE</h1>
					</div>
					<div className="mt-6">
						<Table columns={columns} data={data} />
					</div>
				</main>
		
		</div>
	);
}
export default Forensics;
