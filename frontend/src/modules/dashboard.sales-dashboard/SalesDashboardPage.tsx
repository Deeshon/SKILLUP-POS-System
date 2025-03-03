import { FaHand } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";
import SalesStatComponent from "./components/SalesStatComponent";
import useProductList from "../../common/hooks/useProductList";
import BestSellerComponent from "./components/BestSellerComponent";
import useProductTable from "./hooks/useProductTable";
import RecentTransactionsComponent from "./components/RecentTransactionsComponent";

const SalesDashboardPage = () => {
  const { bestSellerList, isLoading } = useProductList();
  const { columns, recentColumns } = useProductTable();
  return (
    <div className="grid gap-6">
      <div className="bg-navy-500 border-2 border-navy-300 p-3 grid gap-2 rounded-lg shadow-[0_0_60px_rgba(255,255,255,0.3)] sm:grid-cols-10 md:gap-4 sm:items-center">
        <div className="grid gap-2 sm:flex sm:items-center md:col-span-6">
          <div className="flex">
            <FaHand size={30} className="text-darkYellow" />
            <div>
              <h1 className="text-ash-100 text-2xl font-bold ml-3">
                Hi John Doe,
              </h1>
            </div>
          </div>
          <div>
            <p className="text-ash-500 text-sm">
              Here's what's happening with you store today.
            </p>
          </div>
        </div>
        <div className="border-2 border-navy-300 w-6/10 md:w-full text-center py-2 rounded-lg bg-navy-200 md:col-span-3">
          <p className="text-ash-100 text-sm">2/26/2025 - 3/04/2025</p>
        </div>
        <div className="hidden col-span-1 md:grid grid-cols-2">
          <div className="size-8 bg-navy-300 flex items-center justify-center rounded-lg">
            <IoMdRefresh className="text-ash-300" />
          </div>
          <div className="size-8 bg-navy-300 flex items-center justify-center rounded-lg">
            <FaAngleUp className="text-ash-300" />
          </div>
        </div>
      </div>
      <SalesStatComponent />
      <div className="grid gap-6 md:grid-cols-3">
        <BestSellerComponent
          isLoading={isLoading}
          productList={bestSellerList ?? []}
          columns={columns}
        />
        <RecentTransactionsComponent
          isLoading={isLoading}
          productList={bestSellerList ?? []}
          columns={recentColumns}
        />
      </div>
    </div>
  );
};

export default SalesDashboardPage;
