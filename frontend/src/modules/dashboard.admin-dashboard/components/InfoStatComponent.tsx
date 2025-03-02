import { TypeInfoStatComponentProps } from "../types";

const InfoStatComponent = ({ stat }: { stat: TypeInfoStatComponentProps }) => {
  return (
    <div
      className={`${stat.itemClass} text-white flex items-center justify-around h-24 rounded-lg px-4`}
    >
      <div className="w-4/6">
        <div className="font-semibold text-2xl">{stat.amount}</div>
        <div className="text-sm font-semibold">{stat.title}</div>
      </div>
      <div className=" flex items-center justify-center">{stat.icon}</div>
    </div>
  );
};

export default InfoStatComponent;
