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

usuariosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const user = userslist.getUserById(id);
  
  if(!user){
    return res.status(404).json({
      message: `Usuário com o id ${id} não encontrado!`,
    });
  }


  return res.status(200).json({
    message: `Usuário com o id ${id} encontrado!`,
    user,
  });
});

usuariosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const user = userslist.updateUser( id, name, email, password);

  if(!user){
    return res.status(404).json({
      message: `Usuário com o id ${id} não encontrado!`,
    });
  }
  
  return res.status(200).json({
    message: `Usuário com o id ${id} atualizado com sucesso!`,
    user,
  });
});

usuariosRoutes.delete("/:id", (req, res) => {
  
});
export default usuariosRoutes;
