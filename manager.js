const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./htmlRenderer");
const script = require("./script");
const employee = require("./employee");
var validator = require('validator');

function managerPrompt() {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the employees name?"
      },
      {
          type: "input",
          name: "id",
          message: "What is their ID number?"
      },
      {
          type: "input",
          name: "email",
          message: "Please enter their email:"
      },
      {
            type: "input",
            name: "officeNumber",
            message: "What is their office number?"
      }
    ])
    .then(answers => {
        console.info("Answer:", answers.name, answers.id, answers.email, answers.officeNumber);
    });
  
  };

  class Manager extends employee.Employee {
    constructor(id, officeNumber) {
        this.role = "manager";
        this.id = id;
        this.officeNumber = officeNumber
    }
}

module.exports = managerPrompt;