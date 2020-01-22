const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

function typeOfUser() {
  return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What role do you have?',
        choices: ['employee', 'engineer', 'intern', 'manager'],
    },
  ]) 
    .then(answers => {
        console.info('Answer:', answers.role);
        
        if (answers.role === 'employee') {
            employeePrompt();
        } else if (answers.role === 'engineer') {
            engineerPrompt();
        } else if (answers.role === 'intern') {
            internPrompt();
        } else if (answers.role === 'manager') {
            managerPrompt();
        } else 
        console.log("Please pick an acceptable role");
    });
};
