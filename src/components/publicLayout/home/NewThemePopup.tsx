import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function NewThemePopup() {
  const [nameTag, setNameTag] = useState<string>("");
  const [colorTag, setColorTag] = useState<string>("#ffffff");
  const [colorText, setColorText] = useState<string>("#000000");

  return (
    <div className="absolute top-0 left-0 w-screen h-screen ">
      <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-60"></div>
      <div className="relative flex w-screen h-screen">
        <div className="relative bg-white w-2/6 h-auto m-auto rounded-lg p-4 shadow-md">
          <button className="absolute top-4 right-4 text-black">
            <MdClose className="text-3xl" />
          </button>
          <div className="text-indigo-600 my-auto border-b-2 border-solid border-x-gray-500 pb-3 ">
            <div className="text-3xl flex flex-row font-bold">
              <p>New theme</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 mx-2">
            <div className="flex flex-col w-6/6 mx-2">
              <h1 className="text-lg text-stone-800 mb-1 font-bold">
                Tag Name
              </h1>
              <input
                id="theme-name"
                type="text"
                value={nameTag}
                onChange={(e) => {
                  setNameTag(e.target.value);
                }}
                className="text-black border-black border-solid border-2 p-4 text-xl rounded-md"
              />
            </div>
            <div className="flex flex-row mt-4">
              <div className="flex flex-col w-3/6 mx-2">
                <h1 className="text-lg text-stone-800 mb-1 font-bold">
                  Tag Color
                </h1>
                <input
                  id="theme-name"
                  type="color"
                  value={colorTag}
                  onChange={(e) => {
                    setColorTag(e.target.value);
                    console.log(e.target.value);
                  }}
                  className="border-black border-solid border-2 w-full h-16 rounded-md p-1"
                />
              </div>
              <div className="flex flex-col w-3/6 mx-2">
                <h1 className="text-lg text-stone-800 mb-1 font-bold">
                  text Color
                </h1>
                <input
                  id="theme-name"
                  type="color"
                  value={colorText}
                  onChange={(e) => {
                    setColorText(e.target.value);
                  }}
                  className=" border-black border-solid border-2 w-full h-16 rounded-md p-1"
                />
              </div>
            </div>

            <div
              className={`flex w-4/5 rounded-md text-white p-2 mt-4 mx-auto h-16 bg-[${colorTag}] text-[${colorText}]`}
            >
              <h1 className=" text-2xl my-auto pl-2">{nameTag}</h1>
            </div>

            <div className="flex justify-between mx-2 mt-14 mb-2">
              <button className="text-left bg-red-500 border-2 border-solid border-black h-16 w-auto p-4 text-white font-bold rounded-md">
                Delete theme
              </button>
              <button className="text-left bg-indigo-500 border-2 border-solid border-black h-16 w-auto py-4 px-8 text-white font-bold rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
