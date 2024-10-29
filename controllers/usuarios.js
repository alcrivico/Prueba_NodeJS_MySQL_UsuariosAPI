const connection = require("../models/database");

const usuariosGet = (req, res) => {
  const query = "SELECT * FROM usuarios";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const usuariosPost = (req, res) => {
  const { nombre, email, pass } = req.body;
  const query = "INSERT INTO usuarios (nombre, email, pass) VALUES (?, ?, ?)";
  connection.query(query, [nombre, email, pass], (error, results) => {
    if (error) throw error;
    res.status(201).json({
      id: results.insertId,
      nombre,
      email,
      pass,
    });
  });
};

module.exports = { usuariosGet, usuariosPost };
