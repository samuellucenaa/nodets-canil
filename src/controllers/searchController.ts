import type { Request, Response } from "express";
import { pet } from "../models/pet.ts";

export const search = (req: Request, res: Response)=>{
    let query: string = (req.query.name as string) || '' 

    let lista = pet.getFromName(query)
    
        res.render('pages/page', {
            menu: '',
            lista
        })
}