import type { Request, Response } from "express"
import Credits from "../models/Credits"

export class CreditControler{
    static getAll = async (req: Request, res: Response) => {
       try {
         
        const credits = await Credits.findAll({
            order:[
                ['createdAt', 'DESC']
            ]
        })
        res.json(credits)
       } catch (error) {
        res.status(500).json({error: 'Hubo un error'})
       }
    }
    static create = async (req: Request, res: Response) => {
        try {
            const credit = await Credits.create(req.body)
            await credit.save()
            res.status(201).json('La informacion del credito ha sido ingresada correctamente')
        } catch (error) {
            // console.log(error)
            res.status(500).json({error: 'Hubo un error'})
        }
    }
    static getById = async (req: Request, res: Response) => {
        res.json(req.credit)
}}