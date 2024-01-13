const convertToCPF = (cpf: number) => {
    // Convert to CPF format
    let cpfString = cpf.toString();
    cpfString = cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpfString;
};

export { 
    convertToCPF
}