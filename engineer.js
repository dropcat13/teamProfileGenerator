const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./htmlRenderer");
const script = require("./script");
var validator = require('validator');
const employee = require("./employee");

function engineerPrompt() {
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
          name: "github",
          message: "What is their github username?"
      }
    ])
    .then(answers => {
        console.info("Answer:", answers.name, answers.id, answers.email, answers.github);
    });
  
  };

  class Engineer extends employee.Employee {
    constructor(id, github) {
        this.role = "engineer";
        this.id = id;
        this.github = github;
    }
}

module.exports = engineerPrompt;