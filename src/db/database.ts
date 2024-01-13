import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelizeConnection = new Sequelize(
    process.env.DATABASE_NAME || "",
    process.env.DATABASE_USER || "",
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST || "localhost",
        dialect: "mysql",
    }
);

// NEXT IMPROVE: Create pool connection using mysql2 and check if the database exists and, finally, create the database if it doesn't exist

export { sequelizeConnection };
