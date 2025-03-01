import { Response, Request } from "express";
import { menuConfig } from "../__data__/menuConfig";

export const getMenuSettings = (req: Request, res: Response): any => {
    return res.status(200).json({
        success: true,
        result: {
            response: menuConfig,
            message: 'Menu config retrieved successfully.'
        }
    })
}