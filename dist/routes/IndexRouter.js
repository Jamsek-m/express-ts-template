"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const podatki = {
    sporocilo: "pozdravljen svet!",
};
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get("/", this.getAll);
    }
    getAll(req, res, next) {
        res.json(podatki);
    }
}
exports.IndexRouter = IndexRouter;
const indexRoutes = new IndexRouter().router;
exports.default = indexRoutes;
