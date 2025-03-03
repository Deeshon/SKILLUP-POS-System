import { FaAngleUp } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const SalesStatComponent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex items-center justify-between md:px-4 border-2 bg-navy-200 border-navy-300 rounded-lg p-2 py-4">
        <div>
          <h1 className="text-darkYellow">Weekly Earnings</h1>
          <h2 className="text-ash-100 text-2xl font-bold">$95000.45</h2>
          <div>
            <FaAngleUp className="text-green-500" />
            <p className="text-ash-100">
              <span className="text-green-500">15%</span> increase compared to
              last week.
            </p>
          </div>
        </div>
        <div className="size-32 bg-[url('/money-up.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-darkYellow px-2 pl-6 pb-4 pt-2 rounded-lg">
          <div className="flex items-end justify-end">
            <IoMdRefresh size={20} className="text-white" />
          </div>
          <div className="text-white">
            <div className="size-18 bg-[url('/money-up-3.png')] bg-cover bg-center bg-no-repeat"></div>
            <h1 className="text-2xl font-bold">10000</h1>
            <h2>No of Total Sales</h2>
          </div>
        </div>
        <div className="bg-navy-50 px-2 pl-6 pb-4 pt-2 rounded-lg">
          <div className="flex items-end justify-end">
            <IoMdRefresh size={20} className="text-white" />
          </div>
          <div className="text-white">
            <div className="size-18 bg-[url('/money-up-4.png')] bg-cover bg-center bg-no-repeat"></div>
            <h1 className="text-2xl font-bold">800</h1>
            <h2>No of Total Purchases</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesStatComponent;
