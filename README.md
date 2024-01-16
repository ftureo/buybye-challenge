# BuyBye Challenge

🇪🇸 Versión en Español

## Visión general

Este proyecto forma parte de una evaluación técnica de habilidades en el desarrollo con un stack asociado a JavaScript. Las tecnologías requeridas para esta ocasión incluyen:

1. **JavaScript:** Lenguaje de programación.
2. **TypeScript:** Superset de JavaScript para definición de tipos.
3. **MySQL:** Base de datos relacional para la persistencia de información.
4. **Sequelize:** Mapeo objeto-relacional (ORM) para manipular la base de datos mediante JavaScript.
5. **Json Web Token (JWT):** Para la creación y validación de tokens de usuario.

## Inicio rápido

Para ejecutar este proyecto, necesitas tener instalado lo siguiente:

1. [Node.js v16.x.x o superior](https://nodejs.org/en/download/) (se recomienda la versión LTS).
2. [MySQL v8.0.x](https://dev.mysql.com/downloads/workbench/) (incluye MySQL Workbench).
3. Un editor de código de tu elección (por ejemplo, Visual Studio Code aka VSCode).

Además, para el hosting de imágenes, necesitarás una cuenta de Cloudinary para obtener las credenciales.

## Instalaciones necesarias

### Instalación de Node

-   Sigue las instrucciones del asistente, presionando "Siguiente" en cada pantalla.
    -   Directorio de instalación: Por defecto, es en el disco (C:) de Windows y su equivalente /root/ para Linux. Asegúrate de tener suficiente espacio para la instalación.
    -   Agregar Node al PATH (Win OS): Importante para ejecutar procesos de Node.

![Instalación de Node](https://i.stack.imgur.com/SsGIl.png)

### Instalación de MySQL

-   Utiliza el asistente para instalar MySQL y MySQL Workbench eficientemente.
    -   Verifica las versiones a instalar. El asistente puede instalar la versión 8 (v8 en adelante) de MySQL y todas las versiones anteriores. Asegúrate de instalar la v8.0.x con el último parche disponible.
    -   Toma nota del usuario y contraseña. Al instalar MySQL, se solicitará una contraseña para el usuario "root" (usuario principal con privilegios máximos). Es importante no perder esta contraseña.

## Instrucciones de uso

### Base de datos

-   Después de instalar MySQL y MySQL Workbench, inicia sesión con el usuario y contraseña configurados.
-   Crea una base de datos con el nombre que desees. Este nombre debe coincidir con el valor que configures en el archivo `.env`.

### Descarga y configuración del proyecto

-   Abre una consola CMD o equivalente en el directorio deseado y ejecuta el comando `git clone` para tener una copia local del proyecto:
    ```bash
    git clone https://github.com/ftureo/buybye-challenge.git
    ```
-   En la misma consola, ejecuta `cd buybye-challenge` para acceder a la carpeta que contiene el proyecto, recientemente creada.
-   Para instalar las dependencias necesarias y especificadas en el archivo `package.json`, ejecuta el comando `npm install` o su equivalente `npm i`.

### Archivo `.env`

-   Este archivo no se encuentra en la copia creada recientemente porque está entre las excepciones a subir a Github, especificado en el archivo `.gitignore`. Este archivo contiene información sensible respecto a Variables de Entorno. Estas variables se configuran de acuerdo con la información del usuario, conexiones a APIs externas mediante credenciales u otros. Para este proyecto, es necesario crear un archivo `.env` en la raíz del proyecto y debe contener las siguientes claves:
    ```dotenv
    PORT=4000
    DATABASE_NAME=/* Nombre de su base de datos */
    DATABASE_USER=/* Nombre de usuario de MySQL*/
    DATABASE_PASSWORD=/* Su contraseña de MySQL*/
    CLOUDINARY_CLOUD_NAME=/* Su nombre de cuenta cloud en Cloudinary */
    CLOUDINARY_API_KEY=/* API KEY provista por Cloudinary */
    CLOUDINARY_API_SECRET=/* API SECRET provisto por Cloudinary */
    ACCESS_TOKEN_SECRET= /* Palabra que toma JWT como referencia para generar la tokenización */
    ```

## Ejecución del Proyecto

Con las instalaciones necesarias realizadas y con el archivo `.env` configurado, abrir dos consolas y ejecutar un comando de los que se detalla a continuación en cada una:
-   Ejecutar el comando `npm run ts` para ejecutar la transpilación de TypeScript a JavaScript.
-   Ejecutar el comando `npm run dev` para ejecutar el proyecto en modo desarrollo.

¡Disfruta! ✨

## Mejoras a Aplicar

Al desarrollar este proyecto, se siguieron las instrucciones enviadas por correo electrónico. Esto permite ver la posibilidad, a medida que se fueron desarrollando las features, de poder encontrar puntos de mejora a aplicar a la brevedad. Los puntos a priorizar se detallan a continuación:

-   **Métodos útiles para los inicios de sesión:** hay varios métodos que es bueno considerar para ciertos casos de uso. En este caso, se deja un comentario para el método `forgotPassword()` útil para cuando el usuario gusta de recuperar su contraseña por olvido o por medida de seguridad.
-   **Creación dinámica de base de datos:** Siempre es útil tener en consideración la creación programática de recursos. Si bien para este desafío la creación de base de dato se realiza por medio de MySQL Workbench, considero que sería esencial realizar un _approach_ que permita crear la base de datos si es que no existe en la conexión ejecutada. Resumiendo, aquí habría que ejecutar un client en particular de MySQL, crear una pool, vincularla a Sequelize y ejecutar los sync() necesarios para garantizar el funcionamiento.
-   **Despliegue:** Si bien este punto no fue requerido, considero hacer un despliegue dinámico utilizando CI/CD en Vercel, AWS o un servicio equivalente para poder tener tanto una base de datos como un entorno de produccion que permita la persistencia de este login en la nube, permitiéndome trabajar en Dev mode para las mejoras sin que se pierda la vigencia y disponibilización del proyecto.
-   **Error handling:** Aquí se consideraron los casos esenciales y sus correspondientes lanzamientos de errores. Sin embargo, es de mi agrado poder crear una estrategia que permita extraer los mensajes customizados, status y constantes útiles para el manejo de errores a un layer externo que pueda ser reutilizado por otros controladores. Además esto mejora aún más la propuesta de _Clean Code_
-   **Estrategia de Refresh Token:** Considerando la vigencia de los tokens solicitada por el desafío, considero que sería oportuno poder crear una estrategia que permita refrescar la tokenización aunque esto también puede ser considerado o no según necesidad de negocio.

_Si llegaste hasta esta parte de la documentación, muchas gracias por leer. Toda mejora o sugerencia, siéntete libre de dejar una PR o un comentario en el código para resolverlo más adelante_ :smile:

---

🇺🇸 Versión en inglés

# Overview

This project is part of a technical skills assessment in development using a JavaScript-associated stack. The required technologies for this occasion include:

1. **JavaScript:** Programming language.
2. **TypeScript:** JavaScript superset for type definitions.
3. **MySQL:** Relational database for information persistence.
4. **Sequelize:** Object-Relational Mapping (ORM) to manipulate the database using JavaScript.
5. **Json Web Token (JWT):** For creating and validating user tokens.

## Quick Start

To run this project, you need to have the following installed:

1. [Node.js v16.x.x or higher](https://nodejs.org/en/download/) (LTS version is recommended).
2. [MySQL v8.0.x](https://dev.mysql.com/downloads/workbench/) (includes MySQL Workbench).
3. A code editor of your choice (e.g., Visual Studio Code aka VSCode).

Additionally, for image hosting, you'll need a Cloudinary account to obtain credentials.

## Required Installations

### Node Installation

Follow the wizard's instructions, pressing "Next" on each screen.
-   Installation directory: By default, it is on the C: drive for Windows and its equivalent /root/ for Linux. Ensure sufficient space for installation.
-   Add Node to PATH (Win OS): Important for running Node processes.

![Node Installation](https://i.stack.imgur.com/SsGIl.png)

### MySQL Installation

Use the wizard to efficiently install MySQL and MySQL Workbench.
-   Check the versions to install. The wizard can install version 8 (v8 onwards) of MySQL and all previous versions. Make sure to install v8.0.x with the latest available patch.
-   Note the username and password. When installing MySQL, a password will be requested for the "root" user (main user with maximum privileges). It's important not to lose this password.

## Usage Instructions

### Database

-   After installing MySQL and MySQL Workbench, log in with the configured username and password.
-   Create a database with the desired name. This name must match the value configured in the `.env` file.

## Project Download and Configuration

1. Open a CMD console or equivalent in the desired directory and run the following command to have a local copy of the project:

    ```bash
    git clone https://github.com/ftureo/buybye-challenge.git
    ```

2. In the same console, run the following command to navigate to the recently created project folder:

    ```bash
    cd buybye-challenge
    ```

3. To install the necessary dependencies specified in the `package.json` file, run the following command:

    ```bash
    npm install
    ```

### `.env` File

This file is not in the recently created copy because it is among the exceptions not to upload to Github, specified in the `.gitignore`. This file contains sensitive information regarding Environment Variables. These variables are configured according to user information, connections to external APIs using credentials, or other sensitive data. For this project, it is necessary to create a `.env` file in the root of the project, and it must contain the following keys:

````dotenv
    PORT=4000
    DATABASE_NAME=/* Your database name */
    DATABASE_USER=/* MySQL username */
    DATABASE_PASSWORD=/* Your MySQL password */
    CLOUDINARY_CLOUD_NAME=/* Your Cloudinary account name */
    CLOUDINARY_API_KEY=/* API KEY provided by Cloudinary */
    CLOUDINARY_API_SECRET=/* API SECRET provided by Cloudinary */
    ACCESS_TOKEN_SECRET= /* Word used by JWT as a reference for tokenization */
````

## Project Execution

With the necessary installations done and the `.env` file configured, open two consoles and run one of the following commands in each:

-   Run the `npm run ts` command to transpile TypeScript to JavaScript.
-   Run the `npm run dev` command to run the project in development mode.

Enjoy! ✨

## Improvements to Apply

While developing this project, the instructions sent via email were followed. This allows for the possibility, as features were developed, to identify areas for improvement to be applied promptly. The prioritized points to consider are as follows:

-   **Useful methods for login:** There are several methods that are good to consider for certain use cases. In this case, a comment is left for the `forgotPassword()` method, useful for when the user wants to recover their password due to forgetfulness or for security reasons.
-   **Dynamic database creation:** It is always useful to consider programmatic creation of resources. While for this challenge the database creation is done through MySQL Workbench, I consider it essential to implement an approach that allows creating the database if it does not exist in the executed connection. In summary, here it would be necessary to run a specific MySQL client, create a pool, link it to Sequelize, and execute the necessary sync() to ensure functionality.
-   **Deployment:** While this point was not required, I consider making a dynamic deployment using CI/CD on Vercel, AWS, or an equivalent service to have both a database and a production environment that allows the persistence of this login in the cloud. This would allow me to work in Dev mode for improvements without losing the validity and availability of the project.
-   **Error handling:** Essential cases and their corresponding error throws were considered. However, I would like to create a strategy that allows extracting customized messages, statuses, and useful constants for error handling to an external layer that can be reused by other controllers. Additionally, this further enhances the proposal of Clean Code.
-   **Refresh Token Strategy:** Considering the token validity requested by the challenge, it would be opportune to create a strategy that allows refreshing tokenization. This can be considered or not depending on business needs.

If you've reached this part of the documentation, thank you very much for reading. Any improvement or suggestion, feel free to leave a PR or a comment in the code to address it later 😄

---

🇧🇷 Versão portuguesa

# Visão Geral

Este projeto faz parte de uma avaliação técnica de habilidades em desenvolvimento usando um conjunto de tecnologias associadas ao JavaScript. As tecnologias necessárias para esta ocasião incluem:

1. **JavaScript:** Linguagem de programação.
2. **TypeScript:** Superset do JavaScript para definição de tipos.
3. **MySQL:** Banco de dados relacional para persistência de informações.
4. **Sequelize:** Mapeamento Objeto-Relacional (ORM) para manipular o banco de dados usando JavaScript.
5. **Json Web Token (JWT):** Para criar e validar tokens de usuário.

## Início Rápido

Para executar este projeto, você precisa ter o seguinte instalado:

1. [Node.js v16.x.x ou superior](https://nodejs.org/en/download/) (versão LTS recomendada).
2. [MySQL v8.0.x](https://dev.mysql.com/downloads/workbench/) (inclui o MySQL Workbench).
3. Um editor de código de sua escolha (por exemplo, Visual Studio Code, também conhecido como VSCode).

Além disso, para hospedagem de imagens, você precisará de uma conta no Cloudinary para obter credenciais.

## Instalações Necessárias

### Instalação do Node

Siga as instruções do assistente, pressionando "Next" em cada tela. 
- Diretório de instalação: Por padrão, é no disco (C:) para o Windows e seu equivalente /root/ para o Linux. Certifique-se de ter espaço suficiente para a instalação.
- Adicione o Node ao PATH (Win OS): Importante para executar processos do Node.

![Instalação do Node](https://i.stack.imgur.com/SsGIl.png)

### Instalação do MySQL

Use o assistente para instalar o MySQL e o MySQL Workbench de forma eficiente.

-   Verifique as versões a serem instaladas. O assistente pode instalar a versão 8 (v8 em diante) do MySQL e todas as versões anteriores. Certifique-se de instalar v8.0.x com o último patch disponível.
-   Anote o nome de usuário e a senha. Ao instalar o MySQL, será solicitada uma senha para o usuário "root" (usuário principal com privilégios máximos). É importante não perder essa senha.

## Instruções de Uso

### Banco de Dados

-   Após instalar o MySQL e o MySQL Workbench, faça login com o nome de usuário e senha configurados.
-   Crie um banco de dados com o nome desejado. Este nome deve coincidir com o valor configurado no arquivo `.env`.

### Download e Configuração do Projeto

1.  Abra um console CMD ou equivalente no diretório desejado e execute o comando `git clone` para obter uma cópia local do projeto:

    ```bash
    git clone https://github.com/ftureo/buybye-challenge.git
    ```

2.  No mesmo console, execute o seguinte comando para navegar até a pasta do projeto recém-criada:

    ```bash
    cd buybye-challenge
    ```

3.  Para instalar as dependências necessárias especificadas no arquivo `package.json`, execute o seguinte comando:

    ```bash
    npm install
    ```

### Arquivo `.env`

Este arquivo não está na cópia recentemente criada porque está entre as exceções que não devem ser enviadas ao Github, conforme especificado no arquivo `.gitignore`. Este arquivo contém informações sensíveis relacionadas a Variáveis de Ambiente. Essas variáveis são configuradas de acordo com as informações do usuário, conexões a APIs externas usando credenciais ou outros dados sensíveis. Para este projeto, é necessário criar um arquivo `.env` na raiz do projeto e ele deve conter as seguintes chaves:

```dotenv
PORT=4000
DATABASE_NAME=/* Nome do seu banco de dados */
DATABASE_USER=/* Nome de usuário do MySQL */
DATABASE_PASSWORD=/* Sua senha do MySQL */
CLOUDINARY_CLOUD_NAME=/* Nome da sua conta no Cloudinary */
CLOUDINARY_API_KEY=/* Chave de API fornecida pelo Cloudinary */
CLOUDINARY_API_SECRET=/* Segredo da API fornecido pelo Cloudinary */
ACCESS_TOKEN_SECRET= /* Palavra usada pelo JWT como referência para tokenização */
```

## Execução do Projeto

Com as instalações necessárias concluídas e o arquivo `.env` configurado, abra dois consoles e execute um dos seguintes comandos em cada um:

-   Execute o comando `npm run ts` para transpilar TypeScript para JavaScript.
-   Execute o comando `npm run dev` para executar o projeto no modo de desenvolvimento.

Aproveite! ✨

## Melhorias a Serem Aplicadas

Ao desenvolver este projeto, foram seguidas as instruções enviadas por e-mail. Isso permite a possibilidade, à medida que as funcionalidades foram desenvolvidas, de identificar áreas para melhorias a serem aplicadas prontamente. Os pontos priorizados a serem considerados são os seguintes:

-   **Métodos úteis para o login:** Existem vários métodos úteis para certos casos de uso. Neste caso, um comentário é deixado para o método `forgotPassword()`, útil quando o usuário deseja recuperar sua senha devido a esquecimento ou por razões de segurança.
-   **Criação dinâmica de banco de dados:** É sempre útil considerar a criação programática de recursos. Embora, para este desafio, a criação do banco de dados seja feita por meio do MySQL Workbench, considero essencial implementar uma abordagem que permita criar o banco de dados se ele não existir na conexão executada. Em resumo, seria necessário executar um cliente específico do MySQL, criar um pool, vinculá-lo ao Sequelize e executar o sync() necessário para garantir a funcionalidade.
-   **Implantação:** Embora este ponto não tenha sido exigido, considero interessante fazer uma implantação dinâmica usando CI/CD na Vercel, AWS ou um serviço equivalente para ter tanto um banco de dados quanto um ambiente de produção que permita a persistência deste login na nuvem. Isso me permitiria trabalhar no modo de desenvolvimento para melhorias sem perder a validade e disponibilidade do projeto.
-   **Tratamento de erros:** Foram considerados casos essenciais e seus respectivos lançamentos de erros. No entanto, gostaria de criar uma estratégia que permitisse extrair mensagens personalizadas, status e constantes úteis para o tratamento de erros para uma camada externa que pudesse ser reutilizada por outros controladores. Além disso, isso aprimora ainda mais a proposta de Clean Code.
-   **Estratégia de Refresh Token:** Considerando a validade do token solicitada pelo desafio, seria oportuno criar uma estratégia que permitisse a atualização da tokenização. Isso pode ser considerado ou não, dependendo das necessidades do negócio.

Se você chegou a esta parte da documentação, muito obrigado por ler. Qualquer melhoria ou sugestão, sinta-se à vontade para deixar um PR ou um comentário no código para resolver posteriormente 😄
