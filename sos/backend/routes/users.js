const express = require("express")
const router = express.Router()

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send({ msg: " getAll" })
})

router.get("/:id", (req, res, next) => {
  res.send({ msg: " getById" })
})

router.post("/", (req, res, next) => {
  res.send({ msg: " Add" })
})

router.post("/:id", (req, res, next) => {
  res.send({ msg: " Modificar " })
})

router.post("/:id", (req, res, next) => {
  res.send({ msg: " delete" })
})

module.exports = router
