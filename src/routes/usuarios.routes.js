import { Router } from "express";
import UsersRepositorios from "../models/users/UsersRepositorios.js";

const usuariosRoutes = Router();
const userslist = new UsersRepositorios();


usuariosRoutes.get("/", (req, res) => {
  const usuarios = userslist.getAllUsers();

  return res.status(200).json({
    message:
      usuarios.length == 0
        ? "Não há usuários cadastrados"
        : `Total de usuários: ${usuarios.length}`,
    usuarios,
  });
});

usuariosRoutes.post("/", (req, res) => {
  const { name, email, password } = req.body;

  const user = userslist.addUser(name, email, password);

  return res.status(201).json({
    message: "Usuário cadastrado com sucesso",
    user,
  });
}); 

export default usuariosRoutes;
