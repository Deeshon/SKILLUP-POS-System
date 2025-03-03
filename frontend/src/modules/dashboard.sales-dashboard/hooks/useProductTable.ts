/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const useProductTable = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "productDetails", // This will be used to display both image and name
      key: "productDetails",
      render: (productDetails: { imageUrl: string[]; name: string }) =>
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "center" } },
          React.createElement("img", {
            src: productDetails.imageUrl,
            alt: "product",
            style: { width: "50px", height: "auto", marginRight: "10px" },
          }),
          React.createElement("span", null, productDetails.name)
        ),
    },
    {
      title: "Sales",
      dataIndex: "sales",
      key: "sales",
    },
  ];

  const recentColumns = [
    {
      title: "Product",
      dataIndex: "productDetails", // This will be used to display both image and name
      key: "productDetails",
      render: (productDetails: { imageUrl: string[]; name: string }) =>
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "center" } },
          React.createElement("img", {
            src: productDetails.imageUrl,
            alt: "product",
            style: { width: "50px", height: "auto", marginRight: "10px" },
          }),
          React.createElement("span", null, productDetails.name)
        ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
  ];

  return {
    columns,
    recentColumns,
  };
};

export default useProductTable;
