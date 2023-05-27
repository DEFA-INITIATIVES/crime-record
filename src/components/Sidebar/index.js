import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag, HiOutlineLogout } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
// import Header from './Header';

function Sidebar() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("userToken");
		navigate("/login");
	};

	const role = localStorage.getItem("role");
	console.log("ROLE", role);
	return (
		<div className="md:block hidden">
			{/* <Header /> */}

			<div className="fixed w-20 h-screen px-8  py-4 bg-white border-r-[1px] flex flex-col justify-between">
				<div className="flex flex-col items-center space-y-6">
					<div className="bg-purple-800 text-white p-3 rounded-lg inline-block ">
						<RxSketchLogo size={20} />
					</div>
					{role === "forensic" ? (
						<Link
							to="/forensic"
							className="flex flex-col justify-center items-center"
						>
							<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block">
								<RxDashboard size={20} />
							</div>
							<h3>Dasboard</h3>
						</Link>
					) : (
						<Link
							to="/"
							className="flex flex-col justify-center items-center"
						>
							<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block">
								<RxDashboard size={20} />
							</div>
							<h3>Dasboard</h3>
						</Link>
					)}

					<Link
						to="/evidence"
						className="flex flex-col justify-center items-center"
					>
						<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block">
							<RxPerson size={20} />
						</div>
						<h3>Evidence</h3>
					</Link>
					<Link
						to="/crime"
						className="flex flex-col justify-center items-center"
					>
						<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block">
							<HiOutlineShoppingBag size={20} />
						</div>
						<h3>Crimes</h3>
					</Link>
					<div
						onClick={handleLogout}
						className="bg-gray-100 hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block"
					>
						<HiOutlineLogout size={20} />
					</div>
					<h3>Logout</h3>
				</div>
				<main className="ml-20 w-full"></main>
			</div>
		</div>
	);
}

export default Sidebar;
