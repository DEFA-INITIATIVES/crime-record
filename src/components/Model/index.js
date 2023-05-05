import { Dialog, Transition } from "@headlessui/react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Fragment, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { FirstStep, SecondStep, ThirdStep } from "../stepperSteps/index.js";
import Stepper from "../Stepper/Stepper.jsx";
import StepperControl from "../Stepper/StepperControl.jsx"

export default function MyModal({ closeModal, isOpen, setIsOpen }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "first Details",
    "second Details",
    "third Details",
  ];
  
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 " onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 mt-2 text-center ml-10">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white ">
                  <div className="mt-1 pr-2 flex justify-end">
                    <CrossCircledIcon
                      onClick={closeModal}
                      className=" w-10 h-10 cursor-pointer "
                      color="gray"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-700   font-sans mb-5"
                  >
                    New FIR
                  </Dialog.Title>

                  <div className="">
                    <div className="container horizontal mt-5">
                      <Stepper steps={steps} currentStep={currentStep} />    

                      <div className="md:w-4/5 mx-auto">
                        <StepperContext.Provider value={{
                          userData,
                          setUserData,
                          finalData,
                          setFinalData
                        }} >
                          <form className='mt-4'>
                            {displayStep(currentStep)}
                          </form>
                          
                        </StepperContext.Provider>
                      </div>   
                      
                    </div>
                      <StepperControl handleClick = {handleClick} currentStep = {currentStep} steps = {steps} />
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
