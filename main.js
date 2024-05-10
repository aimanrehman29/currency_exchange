#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278.25,
    EURO: 0.93,
    GBP: 0.80,
    INR: 83.45
};
let answer_req = await inquirer.prompt([{
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EURO", "PKR", "GBP", "INR"]
    },
    {
        name: "to",
        message: "Enter To currency",
        type: "list",
        choices: ["USD", "EURO", "PKR", "GBP", "INR"]
    },
    {
        name: "amount",
        message: "Enter your amount ",
        type: "number"
    }
]);
let fromAmount = currency[answer_req.from];
let toAmount = currency[answer_req.to];
let amount = answer_req.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
