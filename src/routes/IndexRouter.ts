import {NextFunction, Request, Response, Router} from "express";
const podatki = {
    sporocilo: "pozdravljen svet!",
};

export class IndexRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init() {
        this.router.get("/", this.getAll);
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.json(podatki);
    }

}

const indexRoutes = new IndexRouter().router;

export default indexRoutes;
