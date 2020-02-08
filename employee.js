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
        message: "What is their name?"
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
  ])
  .then(answers => {
      console.info("Answer:", answers.name, answers.id, answers.email);
  });

};

class Employee {
    constructor(name, id, email) {
        this.role = "employee";
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

function getName() {
    
}
function getId() {
    
}
function getEmail() {

}
function getRole() {

}

module.exports = render;