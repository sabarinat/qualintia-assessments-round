import  { Request, Response } from "express";
import { findPostionDistance } from '../service/spacecraft-direction-service'
export const findDistance = (req: Request, res: Response) => {
    const positionDatas = findPostionDistance(req.body);
    res.json({positionDatas});
}

