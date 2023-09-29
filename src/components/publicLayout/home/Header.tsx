export default function Header() {
  return (
    <div className="h-14 bg-white p-2 flex justify-between w-full">
      <div></div>
      <div className="flex">
        <h1 className="text-lg my-auto mr-4">
          Wellcome <span className="font-bold">Victor</span>
        </h1>
        <div className="rounded-full text-slate-500 border-2 border-black rounded-full w-10 h-10 flex">
          <p className="m-auto">V</p>
        </div>
      </div>
    </div>
  );
}
