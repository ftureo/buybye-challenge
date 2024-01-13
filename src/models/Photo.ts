import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../db/database";

const Photo = sequelizeConnection.define("Photo", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    urlPhoto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publicUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export { Photo };
