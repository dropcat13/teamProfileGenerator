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
        tyoe: 'input',
        name: 'school',
        message: "What school do you go to?"

    }
    ])
    .then(answers => {
        console.info("Answer:", answers.name, answers.id, answers.email, answers.school);
    });
  
  };

  class Intern extends Employee{
    constructor(id, school) {
        this.role = "intern";
        this.id = id;
        this.school = school;
    }
}

module.exports = render;