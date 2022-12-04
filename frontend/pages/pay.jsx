import React from "react";
import Image from "next/image";
import avatar from "../assets/avatar.png";
import styles from "../styles/Home.module.css";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Lifi from "../Functionality/Lifi";

export default function Pay() {
  const [togglePayComponent, setTogglePayComponent] = React.useState(false);
  const [pin, setPin] = useState("");

  const cancelButtonRef = useRef(null);
  return (
    <div className=" text-white flex flex-col px-4 py-6 text-center">
      <h1 className=" text-3xl mb-0 font-bold underline">SwiftUPI</h1>
      <div className="bg-purple-700 max-w-[200px] mx-auto rounded-xl mt-10   ">
        <Image src={avatar} alt="avatar" />
      </div>
      <span className="mt-12 text-xl font-bold">Kushagara Sarathe</span>
      <span className=" text-lg font-bold">kushagra@swift</span>

      <span className=" mt-12">You are paying </span>
      <span className="my-5  text-2xl font-bold">$ 100</span>

      <input
        type="text"
        id="input-group-1"
        className="mt-3 bg-gray-50 px-4 border w-11/12 mx-auto border-gray-900 text-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Note..."
      />

      <label className="mt-4 px-10 pt-4 md:mx-auto" htmlFor="">
        Enter CPIN{" "}
        <span className=" text-xs italic">
          &#40; 6 Digit Secret Crypto PIN &#41;
        </span>
      </label>
      <input
        onChange={(e) => setPin(e.target.value)}
        value={pin}
        type="password"
        pattern="[0-9]*"
        inputmode="numeric"
        minlength="6"
        maxlength="6"
        className="mt-3 bg-gray-50 px-4 border w-11/12 mx-auto md:mx-auto border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="secret CPIN..."
      />

      <div className=" flex flex-col  mt-8">
        <span>
          {" "}
          Paying with wallet:
          <span className="font-bold text-sm  block my-2">
            0xF0bAfD58E23726785A1681e1DEa0da15cB038C61
          </span>
        </span>

        <button className={styles.btn}>Pay Now</button>

        <Button
          onClick={() => {
            setTogglePayComponent(!togglePayComponent);
          }}
          className="w-[90%] mx-auto mt-3 rounded-sm"
        >
          Pay with LiFi
        </Button>

        <Transition.Root show={togglePayComponent} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setTogglePayComponent}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-[#0c0c1764] bg-opacity-75 transition-opacity backdrop-blur-[40px]" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-md  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-gradient-to-r bg-inherit textw px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:pl-0">
                      <div className="sm:flex sm:items-start ">
                        <div className="mt-3 flex flex-col justify-center items-center text-center sm:mt-0 sm:ml-4 w-full sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-3xl mx-auto mt-0 mb-2 font-semibold leading-6 mr-auto pl-4 text-gray-100 px-2"
                          >
                            Pay with LiFi
                          </Dialog.Title>

                          <div className={`mt-4`}>
                            <div className="my-2 text-center text-lg text-white">
                              <Lifi />
                              <button
                                onClick={() => {
                                  setTogglePayComponent(!togglePayComponent);
                                }}
                                ref={cancelButtonRef}
                                type="button"
                                className={` mt-0 inline-flex  rounded-md border border-transparent bg-white text-black px-4 py-2 text-base font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
