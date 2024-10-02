import React, { useState } from "react";
import avator from "../assets/picture/avator.png";

const HomePage = () => {
  const [clock, setClock] = useState("08:00 AM");
  const [operator, setOperator] = useState("4G");
  const [date, setDate] = useState("25 Oct 2024");
  const [contactName, setContactName] = useState("Dinesh S");
  const [msgRevTime, setMsgRevTime] = useState("12:40");
  const [revMsg, setRevMsg] = useState("Hello How are you?");
  const [senderMsg, setSenderMsg] = useState("I'm always fine.!");
  const [senderTime, setSenderTime] = useState("12:55");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mx-5 my-5 ">
      <form className="bg-gray-500  min-h-screen rounded-xl ">
        <div className="mx-6 space-y-2 pt-5">
          <label htmlFor="clock" className="text-white font-semibold w-full">
            Clock
          </label>
          <input
            type="text"
            id="clock"
            onChange={(e) => setClock(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Enter the Time Ex: 08:00 AM"
          />
        </div>
        <div className="mx-6 space-y-2 pt-3">
          <label htmlFor="operator" className="text-white font-semibold w-full">
            Operator
          </label>
          <input
            type="text"
            id="operator"
            onChange={(e) => setOperator(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Ex 4G"
          />
        </div>
        <div className="mx-6 space-y-2 pt-3">
          <label htmlFor="date" className="text-white font-semibold w-full">
            Date
          </label>
          <input
            type="text"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Ex 25 Oct 2024"
          />
        </div>
        <div className="mx-6 space-y-2 pt-3">
          <label
            htmlFor="contactName"
            className="text-white font-semibold w-full"
          >
            Contact Name
          </label>
          <input
            type="text"
            id="contactName"
            onChange={(e) => setContactName(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Ex Dinesh S"
          />
        </div>
        <div className="mx-6 space-y-2 pt-3">
          <label
            htmlFor="receivedMsgTime"
            className="text-white font-semibold w-full"
          >
            Msg Received Time
          </label>
          <input
            type="text"
            id="receivedMsgTime"
            onChange={(e) => setMsgRevTime(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Ex 12:40"
          />
        </div>
        <div className="mx-6 space-y-2 pt-3">
          <label
            htmlFor="receivedMsg"
            className="text-white font-semibold w-full"
          >
            Received Msg
          </label>
          <input
            type="text"
            id="receivedMsg"
            onChange={(e) => setRevMsg(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Ex Hello how are you?"
          />
        </div>
        <div className="mx-6 space-y-2 pt-3">
          <label
            htmlFor="senderMsg"
            className="text-white font-semibold w-full"
          >
            Sender Msg
          </label>
          <input
            type="text"
            id="senderMsg"
            onChange={(e) => setSenderMsg(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Ex Type your msg here"
          />
        </div>
        <div className="mx-6 space-y-2 pt-3">
          <label
            htmlFor="senderTime"
            className="text-white font-semibold w-full"
          >
            Sender Time
          </label>
          <input
            type="text"
            id="senderTime"
            onChange={(e) => setSenderTime(e.target.value)}
            className="block w-full p-2 outline-none"
            placeholder="Ex 12:55"
          />
        </div>
        <div className="mt-3 text-center">
          <button
            className="font-semibold text-white bg-gray-800 p-2 rounded-md mb-2"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </form>
      <div className="bg-gray-500  min-h-screen rounded-xl">
        <div className="px-6 pt-5 space-y-5 bg-gray-800 pb-3 rounded-xl">
          <div className="text-white flex items-center justify-between">
            <p>{clock}</p>
            <p className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5m-12 10c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5S5 19.33 5 18.5v-3c0-.83.67-1.5 1.5-1.5m6-5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5"
                ></path>
              </svg>
              <span>{operator}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M152 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8m72-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"
                ></path>
              </svg>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-white space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"
                ></path>
              </svg>
              <img
                src={avator}
                class=" rounded-full w-14 bg-white"
                alt="Profile Clipart"
              ></img>
              <div className="px-1">
                <p>{contactName}</p>
                <span>online</span>
              </div>
            </div>
            <div className="flex text-white space-x-5 text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M303.7 128h-221C63.9 128 47 142.1 47 160.7v187.9c0 18.6 16.9 35.4 35.7 35.4h221c18.8 0 33.3-16.8 33.3-35.4V160.7c0-18.6-14.5-32.7-33.3-32.7zM320 348.6c0 9.3-6.9 18.4-16.3 18.4h-221c-9.4 0-18.7-9.1-18.7-18.4V160.7c0-9.3 9-15.5 18.4-15.5l221 .1c9.4 0 16.6 6.1 16.6 15.4v187.9z"
                  fill="currentColor"
                ></path>
                <path
                  d="M367 213v85.6l98 53.4V160l-98 53zm81-23v132.3l-64-33.5v-65.6l64.1-33.6-.1.4z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="px-6 p-3">
          <div className="text-center">
            <span className="bg-gray-800 p-2 text-white rounded-xl font-semibold">
              {date}
            </span>
          </div>
          <div className="mr-16">
            <p className="bg-gray-800 text-white p-5 pb-2 mt-5 rounded-lg">
              {revMsg}
              <span className="flex justify-end text-white text-sm ">
                {msgRevTime}
              </span>
            </p>
          </div>
          <div className="bg-gray-800  px-6 ml-16 pb-2 rounded-md">
            <p className=" text-white p-3 pb-2 mt-5 flex justify-end">
              {senderMsg}
            </p>
            <div className="flex space-x-3 justify-end ">
              <span className=" text-white text-sm ">{senderTime}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
