const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./htmlRenderer");
const script = require("./script");
var validator = require('validator');
const employee = require("./employee");

function internPrompt() {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (input) => {
            return input !== '';
        }
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

  class Intern extends employee.Employee{
    constructor(id, school) {
        this.role = "intern";
        this.id = id;
        this.school = school;
    }
}

module.exports = internPrompt;