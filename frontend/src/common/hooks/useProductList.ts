import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { TypeBaseResponse, TypeProductListResponse } from '../types'
import fetchAllProducts from '../services/fetchAllProducts'

const transformProductList = (data: TypeProductListResponse[]) => {
    return data.map((datum) => {
        return {
            ...datum,
            productDetails: {name: datum.name, imageUrl: datum.imageUrls[0]}
        }
    })
}

const transformBestSellerList = (data: TypeProductListResponse[]) => {
    return data.map((datum) => {
        return {
            ...datum,
            productDetails: {name: datum.name, imageUrl: datum.imageUrls[0]},
            sales: datum.quantity as unknown as number * 14,
            paymentMethod: "Paypal",
            paymentRef: "#41238490",
            status: "Success",
            amount: "$" + (datum.quantity)
        }
    })
}

const filterExpiredProducts = (data: TypeProductListResponse[]) => {
    const currentDate = new Date();
    return data.filter((datum) => new Date(datum.expiryDate) < currentDate);
}

const useProductList = () => {
    const [productList, setProductList] = useState<TypeProductListResponse[]>()
    const [expiredProductList, setExpiredProductList] = useState<TypeProductListResponse[]>()
    const [bestSellerList, setBestSellerList] = useState<TypeProductListResponse[]>()
    const {data, isLoading, isSuccess} = useQuery<TypeBaseResponse<TypeProductListResponse[]>>({queryKey: ['all-products'], queryFn: fetchAllProducts})

    useEffect(() => {
        if (isSuccess && data.result) {
            const transformedProductList = transformProductList(data.result.response.slice(0, 5));
            setProductList(transformedProductList);
            setExpiredProductList(filterExpiredProducts(transformedProductList));
            setBestSellerList(transformBestSellerList(data.result.response.slice(0, 5)));
        }
    }, [data, isSuccess ])

    return {
        productList,
        expiredProductList,
        bestSellerList,
        isLoading
    }
}

export default useProductList