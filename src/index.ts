import dotenv from "dotenv";

import app from "./app";
import { sequelizeConnection } from "./db/database";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelizeConnection.authenticate();
        await sequelizeConnection.sync({ force: true });

        console.log("MySQL Database instance connected successfully");
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (error) {
        console.log("Something went wrong. Please, check the error", error);
    }
};

startServer();
