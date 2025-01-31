import { Router } from "express";
import { body, param } from "express-validator";
import { CreditControler } from "../controllers/CreditController";
import {  validateCreditExist, validateCreditID, validateCreditInput } from "../middleware/validation";
const router = Router();

router.get('/', CreditControler.getAll);

router.post('/', 
   validateCreditInput,
    CreditControler.create
);
router.get('/:id', 
    validateCreditID,
    validateCreditExist,
    CreditControler.getById
);

export default router