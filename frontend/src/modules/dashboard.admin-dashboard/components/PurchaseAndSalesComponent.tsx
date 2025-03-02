import PurchaseAndSalesChartComponent from "./PurchaseSalesChartComponent";

const PurchaseAndSalesComponent = () => {
  return (
    <div className="bg-navy-200 border-2 border-navy-300 rounded-lg md:w-[70%]">
      <div className="border-b-2 border-navy-300 flex text-ash-300 justify-between p-4">
        <h3 className="text-lg font-bold">Purchase & Sales</h3>
        <select name="year" id="year" className="border-2 border-navy-300 px-2 rounded-lg">
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div className="">
        <div className="w-full">
          <PurchaseAndSalesChartComponent />
        </div>
      </div>
    </div>
  );
};

export default PurchaseAndSalesComponent;
