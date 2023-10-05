import { MdClose } from "react-icons/md";
import { useState } from "react";
import { NewTagStore } from "../../../hooks/newTagStore";
import { themeStore } from "../../../hooks/editThemeStore";
import { newBillStore } from "../../../hooks/newBillStore";

export default function NewAndEditBillPopup() {
  const [nameTag, setNameTag] = useState<string>("");
  const [billValue, setBillValue] = useState<number>(0);
  const { color } = themeStore();
  const { setEditNewStore } = NewTagStore();
  const { setBillStore, isEditMode } = newBillStore();

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-20 ">
      <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-60"></div>
      <div className="relative flex w-screen h-screen">
        <div className="relative bg-white w-2/6 h-auto m-auto rounded-lg p-4 shadow-md">
          <button
            onClick={() => setEditNewStore(false)}
            className="absolute top-4 right-4 text-black"
          >
            <MdClose
              onClick={() => {
                setBillStore(false);
              }}
              className="text-3xl"
            />
          </button>
          <div
            className={`${color} my-auto border-b-2 border-solid border-x-gray-500 pb-3`}
          >
            <div className="text-3xl flex flex-row font-bold">
              <p>{isEditMode ? "Edit Bill" : "New Bill"}</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 mx-2">
            <p className="flex flex-row mt-2 mb-6 justify-center text-indigo-600 text-3xl font-bold">
              <div className="">2023</div>年<div className=" ml-2"> 09</div>月
              <div className="ml-2"> 1</div>日
              <div className="ml-6"> 01:03(金)</div>
            </p>
            <div className="flex flex-row">
              <div className="flex flex-col px-2 w-3/6 ">
                <h1 className="text-lg text-center text-stone-800 mb-1 font-bold">
                  Tag Bill
                </h1>

                <input
                  id="theme-name"
                  type="text"
                  maxLength={20}
                  value={nameTag}
                  placeholder="Insert name"
                  onChange={(e) => {
                    setNameTag(e.target.value);
                  }}
                  className={`text-black font-bold border-black border-solid border-2 p-4 text-xl rounded-md`}
                />
              </div>
              <div className="flex flex-col px-2 w-3/6 ">
                <h1 className="text-lg text-center text-stone-800 mb-1 font-bold">
                  Bill
                </h1>
                <input
                  id="theme-name"
                  type="number"
                  value={billValue}
                  onChange={(e) => {
                    setBillValue(parseInt(e.target.value));
                  }}
                  className={`text-black font-bold border-black border-solid border-2 p-4 text-xl rounded-md`}
                />
              </div>
            </div>

            <div
              className={`flex ${
                isEditMode ? "justify-between" : "justify-end"
              }  mx-2 mt-8 mb-2`}
            >
              {isEditMode && (
                <button className="text-left bg-red-500 border-2 border-solid border-black h-16 w-auto p-4 text-white font-bold rounded-md">
                  Delete theme
                </button>
              )}

              <button
                onClick={() => setBillStore(false)}
                className="text-left bg-indigo-500 border-2 border-solid border-black h-16 w-auto py-4 px-8 text-white font-bold rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
