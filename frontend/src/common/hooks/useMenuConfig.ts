import { useQuery } from "@tanstack/react-query"
import fetchMenuConfig from "../services/fetchMenuConfig"
import { useEffect, useState } from "react"
import { TypeBaseResponse, TypeMenuConfigResponse } from "../types"

const useMenuConfig = () => {

    const [menuConfig, setMenuConfig] = useState<TypeMenuConfigResponse>()
    const {data, isSuccess, isLoading} = useQuery<TypeBaseResponse<TypeMenuConfigResponse>>({queryKey: ['menu-config'],queryFn: fetchMenuConfig})

    useEffect(() => {
        if (isSuccess && data.result) {
            console.log("data.result.response", data.result.response)
            setMenuConfig(data.result.response)
        }
    }, [data, isSuccess])

    return {
        menuConfig,
        isLoading
    }
}

export default useMenuConfig