interface IProps {
  name: string;
  bill: number;
  color: string;
}

export default function Billtag({ name, bill, color }: IProps) {
  return (
    <div className={`${color} flex justify-between p-4 rounded-md`}>
      <div className="text-white font-bold text-4xl">{name}</div>
      <div className="text-white font-bold text-4xl">¥{bill}</div>
    </div>
  );
}
