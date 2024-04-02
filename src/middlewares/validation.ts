import { Request, Response, NextFunction } from 'express';
import joi, { Schema } from 'joi';

function validateRequest(schema: Schema): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req.body);
        if (error) {
             res.status(400).json({ error: error.details[0].message });
             return
        }
        next();
    };
}

export default validateRequest;

