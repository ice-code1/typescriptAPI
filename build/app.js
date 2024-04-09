"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const hotel_route_1 = __importDefault(require("./routes/hotel.route"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
require('dotenv').config();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api/users', user_route_1.default);
app.use('/api/hotel', hotel_route_1.default);
app.use('/api/v3', index_route_1.default);
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log(" successfully connected to Database");
})
    .catch(() => {
    console.log('there was an issue trying to connect to database');
});
const port = process.env.PORT || 3838;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
