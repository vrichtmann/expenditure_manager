import Billtag from "./BillTag";
import { FaPlus } from "react-icons/fa";
import { NewTagStore } from "../../../hooks/newTagStore";

export default function AllBills() {
  const { setEditNewStore } = NewTagStore();

  return (
    <div className="flex h-full w-full">
      <div className="relative h-full w-full bg-white rounded-sm ">
        <div className="relative flex flex-col p-4 h-full">
          <h1 className="font-bold text-center text-4xl mt-2">Bills</h1>
          <button
            onClick={() => {
              setEditNewStore(true);
            }}
            className="absolute right-4 top-4 text-right text-xl rounded-full bg-slate-200 p-3 border-2 border-solid border-black"
          >
            <FaPlus />
          </button>
          <div className="relative w-full h-full border-2 border-black mt-4 ">
            <div className="p-4 space-y-6 overflow-y-scroll overflow-hidden h-24 min-h-full">
              <Billtag
                name="Food"
                bill={2760}
                bgColor="bg-red-500"
                color="text-red-500"
              />
              <Billtag
                name="Eletricity"
                bill={200}
                bgColor="bg-cyan-500"
                color="text-cyan-500"
              />
              <Billtag
                name="Car"
                bill={2000}
                bgColor="bg-amber-500"
                color="text-amber-500"
              />
              <Billtag
                name="Izakaya"
                bill={300}
                bgColor="bg-purple-600"
                color="text-purple-600"
              />
              <Billtag
                name="Rent"
                bill={6700}
                bgColor="bg-green-500"
                color="text-green-500"
              />
              <Billtag
                name="Trip"
                bill={10000}
                bgColor="bg-orange-500"
                color="text-orange-500"
              />
              <Billtag
                name="Karaoke"
                bill={3000}
                bgColor="bg-indigo-700"
                color="text-indigo-700"
              />
              <Billtag
                name="Hospital"
                bill={2300}
                bgColor="bg-fuchsia-500"
                color="text-fuchsia-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
