const express = require("express")
const userController = require("../controller/user");
const router = express.Router();


router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getSingleUser)
  .post("/", userController.createUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser)

  exports.router = router