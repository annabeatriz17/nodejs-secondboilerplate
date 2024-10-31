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

export default usuariosRoutes;
