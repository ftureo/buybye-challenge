import { Router } from "express";
import {
    signUp,
    signIn,
    signOut,
    confirmEmail,
    getUsers,
    deleteUsers
} from "../controllers/authentication.controller";

const authRouter: Router = Router();

authRouter.get("/get-users", getUsers)
authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/signout", signOut);
authRouter.post("/confirm-email", confirmEmail);
authRouter.delete("/delete-users", deleteUsers);

export { authRouter };
