import type { Request, Response, NextFunction } from 'express'
import { body, param } from 'express-validator'
import { validationResult } from 'express-validator'
import Credits from '../models/Credits'

declare global {
    namespace Express {
        interface Request {
            credit: Credits
        }
    }
}

export const validateCreditID = async (req: Request, res: Response, next: NextFunction) => {
    await param('id').isInt().withMessage('ID no valido')
    .custom(value => value > 0).withMessage('ID no valido')
    .run(req)
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
         res.status(400).json({ errors: errors.array() })
         return
    }
    next()
}

export const validateCreditExist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const credit = await Credits.findByPk(id)

       if(!credit){
           const error = new Error('No existe el presupuesto')
           res.status(404).json({error: error.message})
           return 
       }
       req.credit = credit
       next()
      } catch (error) {
       res.status(500).json({error: 'Hubo un error'})
      }
       
    next()
}

export const validateCreditInput = async (req: Request, res: Response, next: NextFunction) => {
    await body('name')
            .notEmpty().withMessage("El Nombre es requerido").run(req)
    await body('lastname')
            .notEmpty().withMessage("El Apellido es requerido").run(req)
    await body('email')
            .notEmpty().withMessage("El Correo es requerido").run(req)
    await body('phone')
            .notEmpty().withMessage("El Telefono es requerido")
            .isInt().withMessage("Debe de ser un numero valido").run(req)
    await body('id_type')
            .notEmpty().withMessage("El Tipo de Documento es requerido")
            .isInt().withMessage("Debe de ser un numero valido").run(req)
    await body('id_number')
            .notEmpty().withMessage("El Numero de Documento es requerido")
            .isInt().withMessage("Debe de ser un numero valido").run(req)
    await body('state')
            .notEmpty().withMessage("El Departamento es requerido")
            .isInt().withMessage("Debe de ser un numero valido").run(req)
    await body('city')
            .notEmpty().withMessage("El Municipio es requerido")
            .isInt().withMessage("Debe de ser un numero valido").run(req)
    await body('address')
            .notEmpty().withMessage("La Direccion es requerida").run(req)
    await body('salary')
            .notEmpty().withMessage("El Salario es requerido")
            .isInt().withMessage("Debe de ser un numero valido").run(req)
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return 
    }
    next()
}