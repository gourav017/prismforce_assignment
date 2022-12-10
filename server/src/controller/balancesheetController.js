const express = require("express");
const expenceDataModel = require("../model/expense.model");
const revenueDataModel = require("../model/revenue.model");

const blancesheet = express.Router();

blancesheet.post("/revenue", async (req, res) => {
  let { amount } = req.body;
  const d = new Date();
  let text = d.toISOString();
  let revenuedata = await revenueDataModel.create({ amount,startDate:text });
  res.send({ msg: 'revenue added to revenue-Sheet', revenuedata });
});


blancesheet.post("/expence", async (req, res) => {
  let { amount } = req.body;
  const d = new Date();
  let text = d.toISOString();
  let expencedata = await expenceDataModel.create({ amount,startDate:text });
  res.send({ msg: 'expence added to expence-Sheet', expencedata });
});

blancesheet.get("/revenueData",async(req,res)=>{
  const revenuedata = await revenueDataModel.find();
  res.send(revenuedata) 
  
})

blancesheet.get("/expenseData",async(req,res)=>{
  const expenseData = await expenceDataModel.find();
  res.send(expenseData) 
  
})


module.exports = blancesheet;
