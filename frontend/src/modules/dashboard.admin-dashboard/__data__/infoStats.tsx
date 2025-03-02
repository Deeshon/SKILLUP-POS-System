import { BsFillPersonCheckFill, BsFillPersonFill } from "react-icons/bs";
import { TypeInfoStatComponentProps } from "../types";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";


export const infostats: TypeInfoStatComponentProps[] = [
    {
        icon: <BsFillPersonFill size={50} />,
        itemClass: 'customer-card',
        title: 'Customers',
        amount: 100
    },
    {
        icon: <BsFillPersonCheckFill  size={50} />,
        itemClass: 'supplier-card',
        title: 'Suppliers',
        amount: 100
    },
    {
        icon: <FaFileInvoiceDollar size={50} />,
        itemClass: 'purchase-card',
        title: 'Purchase Invoice',
        amount: 100
    },
    {
        icon: <IoDocumentTextOutline size={50} />,
        itemClass: 'sales-card',
        title: 'Sales Invoice',
        amount: 100
    }
]