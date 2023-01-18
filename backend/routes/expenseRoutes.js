const path=require('path');
const express = require("express");
const expenseController = require("../controllers/expenseController");
const router = express.Router();

/*router.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','index.html'));
})*/

router.get("/", expenseController.getExpenses);
router
  .get("/:id", expenseController.getSingleExpense)
  .put("/:id", expenseController.updateExpense);

router.post("/", expenseController.postExpenses);

router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
