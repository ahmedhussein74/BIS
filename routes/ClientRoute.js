const router = require("express").Router();

const {
  getClients,
  addClient,
  updateClient,
  deleteClient,
} = require("../controllers/ClientController");

router.get("/", getClients);

router.post("/", addClient);

router.put("/:id", updateClient);

router.delete("/:id", deleteClient);

module.exports = router;
