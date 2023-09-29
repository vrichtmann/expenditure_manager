import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { SiGraphql } from "react-icons/si";

export default function SideBar() {
  return (
    <div className="w-28 h-scree">
      <div className="flex flex-col text-center justify-center gap-4">
        <div className="flex border-b-2 border-y-gray-600">
          <AiOutlineMenu className="text-3xl text-white m-auto mt-3 mb-3" />
        </div>

        <div className="flex flex-col text-white border-b-2 border-y-gray-600">
          <AiFillHome className="text-xl m-auto" />
          <p className="mb-3">Home</p>
        </div>
        <div className="text-sm text-white border-b-2 border-y-gray-600">
          <BsCalendar3 className="text-xl m-auto" />
          <p className="mb-3">Calendar</p>
        </div>
        <div className="text-sm text-white border-b-2 border-y-gray-600">
          <SiGraphql className="text-xl m-auto" />
          <p className="mb-3">Graph</p>
        </div>
      </div>
    </div>
  );
}
