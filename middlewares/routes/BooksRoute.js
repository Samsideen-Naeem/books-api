const { Router } =require("express")
const { getBooks } = requires("../controllers/booksControllers")

const route = Router()

router.route("/books").get(getBooks);

module.exports=router


