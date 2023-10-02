import { themeStore } from "../../../hooks/editThemeStore";

interface IProps {
  name: string;
  bill: number;
  color: string;
  bgColor: string;
}

export default function Billtag({ name, bill, color, bgColor }: IProps) {
  const { setThemeName, setBill, setEditThemePopup, setColor, setBgColor } =
    themeStore();

  const openThemePopup = () => {
    setThemeName(name);
    setBill(bill);
    setEditThemePopup(true);
    setColor(color);
    setBgColor(bgColor);
  };

  return (
    <div
      onClick={openThemePopup}
      className={`${bgColor} flex justify-between p-4 rounded-md cursor-pointer`}
    >
      <div className="text-white font-bold text-4xl">{name}</div>
      <div className="text-white font-bold text-4xl">¥{bill}</div>
    </div>
  );
}
