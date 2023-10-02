import SideBar from "../components/publicLayout/home/SideBar";
import Header from "../components/publicLayout/home/Header";
import AllBills from "../components/publicLayout/home/AllBills";
import ThemeBillPopup from "../components/publicLayout/home/ThemeBillPopup";
import { themeStore } from "../hooks/editThemeStore";
import NewThemePopup from "../components/publicLayout/home/NewThemePopup";

export default function Home() {
  const { editThemePopup } = themeStore();

  return (
    <div className="flex w-screen h-screen bg-zinc-800">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="relative flex flex-col bg-gray-300 h-screen p-2">
          <div className="flex w-full justify-end text-black m-auto font-bold h-14 mb-2">
            <div className="my-auto px-4 flex ">
              <span className="text-indigo-600 text-3xl flex flex-row">
                <div className="text-4xl">2023</div>年
                <div className="text-4xl ml-2"> 9</div>月
              </span>
              <span className="ml-4 text-3xl">¥528605</span>
            </div>
          </div>
          <AllBills />
        </div>
      </div>
      <NewThemePopup />
      {editThemePopup && <ThemeBillPopup />}
    </div>
  );
}
