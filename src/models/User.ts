import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../db/database";
import { Photo } from "./Photo";

// Create a model for register user using name, CPF, date of birth, phone number, photo, state, city, active, email and password

const User = sequelizeConnection.define("User", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: [2, 100],
            notEmpty: true,
            notNull: {
                msg: "Name cannot be null.",
            },
        },
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            notNull: {
                msg: "CPF cannot be null or invalidate length.",
            },
        },
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    photo: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Email must be a valid email address.",
            },
        },
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: [8, 100],
            is: {
                args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                msg: "Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character.",
            },
        },
    },
});

User.hasOne(Photo, { foreignKey: "userId" });

export { User };
