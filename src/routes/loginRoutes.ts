import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
                <label>Password</label>
                <input name="password" type="password" />
            <div>
            <input type="submit" />
            </div>
        </form>
    `);
});

export { router };