"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateRequest(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        next();
    };
}
exports.default = validateRequest;
