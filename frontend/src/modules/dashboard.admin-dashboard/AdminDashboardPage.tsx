import useProductList from "../../common/hooks/useProductList"
import { infostats } from "./__data__/infoStats"
import { salesStats } from "./__data__/salesStats"
import ExpiredProductsComponent from "./components/ExpiredProductsComponent"
import InfoStatComponent from "./components/InfoStatComponent"
import ProductListComponent from "./components/ProductListComponent"
import PurchaseAndSalesComponent from "./components/PurchaseAndSalesComponent"
import SaleStatComponent from "./components/SaleStatComponent"
import useProductTable from "./hooks/useProductTable"

const AdminDashboardPage = () => {
  const { isLoading, productList, expiredProductList } = useProductList();
  const { columns, expiredColumns  } = useProductTable();
  return (
    <div className="mt-1 md:mx-3 grid gap-6">
        <div className="grid sm:grid-cols-4 gap-5">
            {salesStats.map((stat) => (<SaleStatComponent stat={stat}   />))}
        </div>
        <div className="grid sm:grid-cols-4 gap-5">
            {infostats.map((stat) => (<InfoStatComponent stat={stat}   />))}
        </div>
        <div className="grid gap-6 md:flex">
            <PurchaseAndSalesComponent />
            <ProductListComponent isLoading={isLoading} productList={productList ?? []} columns={columns}  />
        </div>
        <ExpiredProductsComponent isLoading={isLoading} productList={expiredProductList ?? []} columns={expiredColumns} />
    </div>
  )
}

export default AdminDashboardPage