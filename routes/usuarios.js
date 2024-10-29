const { Router } = require("express");
const { usuariosGet, usuariosPost } = require("../controllers/usuarios");

const router = Router();
router.get("/", usuariosGet);
router.post("/registro", usuariosPost);

module.exports = router;
