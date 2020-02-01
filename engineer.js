const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./generateHTML");
const script = require("./script")

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
          name: "github",
          message: "What is your github username?"
      }
    ])
    .then(answers => {
        console.info("Answer:", answers.name, answers.id, answers.email, answers.github);
    });
  
  };

  class Engineer extends Employee {
    constructor(id, github) {
        this.role = "engineer";
        this.id = id;
        this.github = github;
    }
}