import { Dialog, Transition } from "@headlessui/react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Fragment, useState } from "react";

export default function MyModal({ closeModal, isOpen, setIsOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center ml-10">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform   overflow-hidden rounded-2xl  bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-1 ml-[350px]">
                    <CrossCircledIcon
                      onClick={closeModal}
                      className=" w-10 h-10 cursor-pointer "
                      color="gray"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-700 ml-[150px] font-sans"
                  >
                    FIR FORM
                  </Dialog.Title>

                  <div className="mt-2 ml-10">
                    <div className="w-full max-w-xs">
                      <form className="">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                          >
                            Username
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                          >
                            Name
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                          >
                            Name
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                          >
                            Name
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[70px] w-full rounded focus:outline-none focus:shadow-outline"
                            type="button"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
