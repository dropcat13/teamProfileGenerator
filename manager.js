const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./generateHTML");
const script = require("./script")
const employee = require("./employee")

function employeePrompt() {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
          type: "input",
          name: "id",
          message: "What is your ID number?"
      },
      {
          type: "input",
          name: "email",
          message: "Please enter your email:"
      },
      {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
      }
    ])
    .then(answers => {
        console.info("Answer:", answers.name, answers.id, answers.email, answers.officeNumber);
    });
  
  };

  class Manager extends Employee {
    constructor(id, officeNumber) {
        this.role = "manager";
        this.id = id;
        this.officeNumber = officeNumber
    }
}