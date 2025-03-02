import { TypeSaleStatComponentProps } from "../types";

const SaleStatComponent = ({ stat }: { stat: TypeSaleStatComponentProps }) => {
  return (
    <div className="text-ash-300 flex items-center justify-around h-24 rounded-lg bg-navy-200 border-navy-300 border-2 px-4">
      <div className=" flex items-center justify-center">
        <div
          className={` ${stat.iconClass} size-14 md:size-12  flex items-center justify-center rounded-full`}
        >
          {stat.icon}
        </div>
      </div>

      <div className="w-4/6">
        <div className="font-bold text-lg">{stat.title}</div>
        <div className="text-sm">{stat.description}</div>
      </div>
    </div>
  );
};

export default SaleStatComponent;
