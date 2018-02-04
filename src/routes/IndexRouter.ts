import {NextFunction, Request, Response, Router} from "express";

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
        res.json({
            sporocilo: "pozdravljen svet!",
        });
    }

}

const indexRoutes = new IndexRouter().router;

export default indexRoutes;
