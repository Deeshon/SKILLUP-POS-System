/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const useProductTable = () => {
  const columns = [
    {
        title: "#",
        dataIndex: "index",
        key: "index",
        render: (_: any, __: any, index: number) => index + 1, // Show index starting from 1
      },
    {
      title: "Product",
      dataIndex: "productDetails", // This will be used to display both image and name
      key: "productDetails",
      render: (productDetails: { imageUrl: string[]; name: string }) => 
        React.createElement('div', { style: { display: 'flex', alignItems: 'center' } },
          React.createElement('img', {
            src: productDetails.imageUrl,
            alt: 'product',
            style: { width: '50px', height: 'auto', marginRight: '10px' }
          }),
          React.createElement('span', null, productDetails.name)
        ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const expiredColumns = [
    {
      title: "Product",
      dataIndex: "productDetails", // This will be used to display both image and name
      key: "productDetails",
      render: (productDetails: { imageUrl: string[]; name: string }) => 
        React.createElement('div', { style: { display: 'flex', alignItems: 'center' } },
          React.createElement('img', {
            src: productDetails.imageUrl,
            alt: 'product',
            style: { width: '50px', height: 'auto', marginRight: '10px' }
          }),
          React.createElement('span', null, productDetails.name)
        ),
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Manufactured Date",
      dataIndex: "manufacturedDate",
      key: "manufacturedDate",
    },
    {
      title: "Expired Date",
      dataIndex: "expiryDate",
      key: "expiryDate",
    },
  ];

  return {
    columns,
    expiredColumns
  };
};

export default useProductTable;
