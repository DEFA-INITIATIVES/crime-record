import { Table } from 'antd';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { SelectColumnFilter } from "../DataTable/index";
import apiClient from "../../api/apiClient";
import { useQuery } from "react-query";
import addData from "../../redux/dataSlice";
import { Button } from 'antd';
import MyModal from "../Model"
import { useDispatch } from 'react-redux';
import { setCrimeId } from '../../redux/dataSlice';
import {useSelector} from "react-redux"


// const getData = () => {
// 	const data = [
// 		{
// 			name: "Jane Cooper",
// 			description: "Regional Paradigm Technician",
// 			code: "Optimization",
// 			suspect: "Admin",
// 		},
// 	];
// 	return [...data];
// };
const getRandomuserParams = (params) => ({
	results: params.pagination?.pageSize,
	page: params.pagination?.current,
	...params,
});
function  Forensics() {
	const token = localStorage.getItem("userToken");
	const dispatch = useDispatch();
	const [resultData, setResult] = useState()
	const {crimeId} = useSelector(state=>state?.data)
	const [crimedata, setData] = useState();
	const [rowId,setRowId] = useState()
	const [isOpen,setIsOpen] = useState(false)
	const [closeModal,setCloseModal] = useState()
	const [loading, setLoading] = useState(false);
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});
    //  console.log(crimeId)
	const getReports = async () => {
		setLoading(true);
		const res = await apiClient.get(`https://crimes-api.onrender.com/api/crimes?${qs.stringify(getRandomuserParams(tableParams))}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		setData(res.data)
		setLoading(false);
		setTableParams({
			...tableParams,
			pagination: {
				...tableParams.pagination,
				total: res.length,
			},
		});
	};
	useEffect(() => {
		getReports()
	}, [JSON.stringify(tableParams)]);



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

	// const result = useQuery("crimes", getReports);

	// // if (result) dispatch(addData(result.data[0]));

	// const { isLoading, isError } = result;
	// // console.log(result.data, "hey roland am here ");

	const columns =  [
			{
				title: "Name",
				dataIndex: "name",
			},
			{
				title: "Description",
				dataIndex: "description",
			},
			{
				title: "Code",
				dataIndex: "code",
			},
			{
				title: "Suspect",
				dataIndex: "suspect",
			},
			{
				title: "Actions",
				dataIndex: "_id",
				render: (_id) => (
				  <button onClick={()=>setIsOpen(true)} className ="w-20  mt-2 py-2 bg-slate-600 rounded-md hover:bg-indigo-500 relative text-white">Add Report</button>
				),
			  },
		]


		const handleEdit = (id) =>{
			console.log(id)
		}

	// const data = React.useMemo(() => getData(), []);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">

			<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
				<div className="mt-10">
					<h1 className="text-xl font-semibold">FORENSIC MODULES</h1>
				</div>
				<div className="mt-6">
					{/* <Table columns={columns} data={resultData?.data} /> */}
					<Table
						columns={columns}
						rowKey={(record) => record?.login?.uuid}
						style={{ cursor: 'pointer', color: 'var(--colorIcon)' }}
						dataSource={crimedata?.data}
						pagination={tableParams.pagination}
						loading={loading}
						onChange={handleTableChange}
						onRow={(record) => ({
							onClick: () => {
							  dispatch(setCrimeId(record._id))
							},
						  })}
					/>
				</div>
			</main>
               {
				isOpen &&(
					<MyModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={()=>setIsOpen(false)}/>
				)
			   }
		</div>
	);
}
export default Forensics;
