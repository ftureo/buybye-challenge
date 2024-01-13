interface IRegisterUser {
    id: number;
    name: string;
    cpf: number;
    dateOfBirth: Date;
    phoneNumber: string;
    state: string;
    city: string;
    email: string;
    password: string;
}

interface ILoginUser {
    email: string;
    password: string;
}

interface IConfirmEmail {
    email: string;
    token: string;
}

interface IForgotPassword {
    email: string;
}

export { IRegisterUser, ILoginUser, IConfirmEmail, IForgotPassword };
