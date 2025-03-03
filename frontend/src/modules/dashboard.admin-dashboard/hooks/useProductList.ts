import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import fetchAllProducts from '../services/fetchAllProducts'
import { TypeBaseResponse } from '../../../common/types'
import { TypeProductListResponse } from '../types'

const transformProductList = (data: TypeProductListResponse[]) => {
    return data.map((datum) => {
        return {
            ...datum,
            productDetails: {name: datum.name, imageUrl: datum.imageUrls[0]}
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
    const {data, isLoading, isSuccess} = useQuery<TypeBaseResponse<TypeProductListResponse[]>>({queryKey: ['all-products'], queryFn: fetchAllProducts})

    useEffect(() => {
        if (isSuccess && data.result) {
            const transformedProductList = transformProductList(data.result.response.slice(0, 5));
            setProductList(transformedProductList);
            setExpiredProductList(filterExpiredProducts(transformedProductList));
        }
    }, [data, isSuccess ])

    return {
        productList,
        expiredProductList,
        isLoading
    }
}

export default useProductList