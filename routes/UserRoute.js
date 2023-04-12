const router = require("express").Router();

const {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
