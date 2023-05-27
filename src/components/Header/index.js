/* eslint-disable no-octal-escape */
import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import Model from "../Model/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const role = localStorage.getItem("role");

	return (
		<div className="shadow-sm h-[60px] w-full bg-white items-center  top-0 z-30 fixed ">
			{role === "police" ? (
				<div className="ml-[1050px] flex  ">
					<button
						type="button"
						onClick={openModal}
						className=" border font-sans font-bold  border-gray-700 rounded-[24px] hover:bg-gray-300 px-10 mt-2   py-1/5  "
					>
						ADD F.I.R
					</button>

					<div className="hidden">
						<Model
							closeModal={closeModal}
							isOpen={isOpen}
							setIsOpen={setIsOpen}
						/>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default Header;
