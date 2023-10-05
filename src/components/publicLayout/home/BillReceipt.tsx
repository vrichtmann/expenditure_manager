import { newBillStore } from "../../../hooks/newBillStore";

interface IProps {
  name: string;
  bill: number;
  color: string;
  bgColor: string;
}

export default function BillReceipt({ name, bill, color, bgColor }: IProps) {
  const { setIsEditMode, setBillStore } = newBillStore();
  const EditReceiptPopup = () => {
    setIsEditMode(true);
    setBillStore(true);
  };

  return (
    <div
      onClick={EditReceiptPopup}
      className={`${bgColor} ${color}  flex  p-4 rounded-md cursor-pointer`}
    >
      <div className="text-white font-bold text-4xl mr-3 my-auto">{name}</div>
      <div className="text-black font-bold text-2xl flex-1 my-auto mt-2">
        {`(2023/01/10 15:46)`}
      </div>
      <div className="text-white font-bold text-4xl">¥{bill}</div>
    </div>
  );
}
