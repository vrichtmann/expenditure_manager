import { MdClose } from "react-icons/md";
import BillReceipt from "./BillReceipt";
import { themeStore } from "./../../../hooks/editThemeStore";
import { newBillStore } from "../../../hooks/newBillStore";
import { FaPlus } from "react-icons/fa";

export default function ThemeBillPopup() {
  const { setEditThemePopup, themeName, color, bgColor } = themeStore();
  const { setBillStore, setIsEditMode } = newBillStore();

  const closePopup = () => {
    setEditThemePopup(false);
  };

  return (
    <div>
      <div className="absolute top-0 left-0 w-screen h-screen  bg-black opacity-60" />
      <div className="absolute top-0 left-0 ">
        <div className="relative flex w-screen h-screen">
          <div className="relative bg-white w-4/6 h-auto m-auto rounded-lg p-4 shadow-md">
            <button
              className="absolute top-4 right-4 text-black"
              onClick={closePopup}
            >
              <MdClose className="text-3xl" />
            </button>
            <div className="text-indigo-600 my-auto border-b-2 border-solid border-x-gray-500 pb-2 ">
              <div className="text-3xl flex flex-row font-bold">
                <div className="text-4xl">2023</div>年
                <div className="text-4xl ml-2"> 9</div>月
              </div>
            </div>
            <div
              className={`relative ${color} text-center text-5xl font-bold mt-4 `}
            >
              {themeName}
              <button
                onClick={() => {
                  setBillStore(true);
                  setIsEditMode(false);
                }}
                className="absolute right-4 text-black text-right text-xl rounded-full bg-slate-200 p-3 border-2 border-solid border-black"
              >
                <FaPlus />
              </button>
            </div>

            <div className="w-full border-2 border-black border-solid mt-4 p-4 space-y-2 overflow-y-scroll overflow-hidden h-96 min-h-full">
              <BillReceipt
                name="7 Eleven"
                bill={2760}
                color={color}
                bgColor={bgColor}
              />
              <BillReceipt
                name="Saizeria"
                bill={200}
                color={color}
                bgColor={bgColor}
              />
              <BillReceipt
                name="CocoIti"
                bill={300}
                color={color}
                bgColor={bgColor}
              />
              <BillReceipt
                name="AburaSoba"
                bill={300}
                color={color}
                bgColor={bgColor}
              />
              <BillReceipt
                name="UdonYa"
                bill={6700}
                color={color}
                bgColor={bgColor}
              />
              <BillReceipt
                name="MonkeyKare"
                bill={1000}
                color={color}
                bgColor={bgColor}
              />
              <BillReceipt
                name="Yamatyan"
                bill={3000}
                color={color}
                bgColor={bgColor}
              />
              <BillReceipt
                name="Maid Cafe"
                bill={2300}
                color={color}
                bgColor={bgColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
