const express = require("express");
const app = express();
const userRoute = require("./src/routes/user.route");

app.use(express.json());

app.use("/user", userRoute);

const port = 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
