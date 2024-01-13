import express, { Application } from "express";
import { authRouter } from "./routes/authentication.routes";
import fileUpload from "express-fileupload";

const app: Application = express();

app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./tmp",
    })
);

app.use("/api/auth", authRouter);

export default app;
