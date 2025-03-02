import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { TypeSaleStatComponentProps } from "../types";

export const salesStats: TypeSaleStatComponentProps[] = [
  {
    icon: <FaCartArrowDown size={20} />,
    iconClass: 'purchases-due',
    title: "$307144",
    description: "Total Purchases Due",
  },
  {
    icon: <FaRegMoneyBillAlt size={20} />,
    iconClass: 'sales-due',
    title: "$4385",
    description: "Total Sales Due",
  },
  {
    icon: <FaSortAmountUpAlt size={20} />,
    iconClass: 'sales-total',
    title: "$385656.5",
    description: "Total Sales Amount",
  },
  {
    icon: <FaSortAmountDownAlt size={20} />,
    iconClass: 'expense-total',
    title: "$40000",
    description: "Total Expense Amount",
  },
];
