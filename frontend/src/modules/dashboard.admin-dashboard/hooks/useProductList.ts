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

const useProductList = () => {
    const [productList, setProductList] = useState<TypeProductListResponse[]>()
    const {data, isLoading, isSuccess} = useQuery<TypeBaseResponse<TypeProductListResponse[]>>({queryKey: ['all-products'], queryFn: fetchAllProducts})

    useEffect(() => {
        if (isSuccess && data.result) {
            setProductList(transformProductList(data.result.response.slice(0, 5)))
        }
    }, [data, isSuccess ])

    return {
        productList,
        isLoading
    }
}

export default useProductList