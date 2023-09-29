import SideBar from "../components/publicLayout/home/SideBar";
import Header from "../components/publicLayout/home/Header";
import AllBills from "../components/publicLayout/home/AllBills";

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-zinc-800">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="relative flex flex-col bg-gray-300 h-screen p-2">
          <div className="flex w-full justify-end text-black m-auto font-bold h-14 mb-2">
            <div className="my-auto px-4">
              <span className="text-indigo-600 text-3xl">９月</span>
              <span className="ml-4 text-3xl">¥528605</span>
            </div>
          </div>
          <AllBills />
        </div>
      </div>
    </div>
  );
}
