const { where } = require("sequelize");
const expenseModel = require("../models/exprenseModel");

exports.getExpenses = async (req, res, next) => {
  try {
    let data = await expenseModel.findAll();

    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.getSingleExpense = async (req, res, next) => {
  let id = req.params.id;
  try {
    let data = await expenseModel.findAll({
      where: {
        _id: id,
      },
    });
    res.status(200).json(data);
  } catch (err) {}
};

exports.postExpenses = async (req, res, next) => {
  try {
    let body = req.body;
    let data = await expenseModel.create(body);
    res.status(201).json(data._id);
  } catch (err) {
    console.log(err);
  }
};

exports.updateExpense = async (req, res, next) => {
  try {
    let body = req.body;
    let id = req.params.id;
    let data = await expenseModel.update(
      { ...body },
      {
        where: {
          _id: id,
        },
      }
    );

    res.status(201).json({ Update: "Done" });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteExpense = async (req, res, next) => {
  try {
    let id = req.params.id;

    let data = await expenseModel.destroy({ where: { _id: id } });

    res.status(200).json({});
  } catch (err) {
    console.log(err);
  }
};
