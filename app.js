const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");
// const axios = require("axios");
const render = require("./lib/htmlRenderer");
const path = require("path");
// const jest = require ("jest");
// var validator = require('validator');
// const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const idArray = [];

const getQuestions = (teamMember) => [
    {
        type: "input",
        name: "name",
        message: `What is your ${teamMember}'s name?`  
    },
    {
        type: "input",
        name: "id",
        message: `What is your ${teamMember}'s ID number?`
    },
    {
        type: "input",
        name: "email",
        message: `What is your ${teamMember}'s email?`
    }
];

const teamMenu = () => {
    const createManager = async () => {
        const response = await inquirer.prompt ([
            ...getQuestions("manager"),
            {
                type: "input",
                name: "officeNumber",
                message: "What is your manager's office number?"
            }
        ]);

        const { name, id, email, officeNumber } = response;
        const manager = new Manager(name, id, email, officeNumber);

        teamMembers.push(manager);
        idArray.push(id);

        createTeam();
    };

    const addEngineer = async () => {
        const response = await inquirer.prompt([
        ...getQuestions("engineer"),
        {
           type: "input",
           name: "github",
           message: "What is their github username?"
        }
        ]);
        const {name, id, email, github } = response;
        const engineer = new Engineer(name, id, email, github);
    
        teamMembers.push(engineer);
        idArray.push(id);
    
        createTeam();
    };

    const addIntern = async () => {
        const response = await inquirer.prompt([
            ...getQuestions("intern"),
            {
                tyoe: 'input',
                name: 'school',
                message: "What school do they go to?"
    
            }
        ]);
        const { name, id, email, school } = response;
        const intern = new Intern(name, id, email, school);
        
        teamMembers.push(intern);
        idArray.push(id);
    
        createTeam();
    };

    const createTeam = async () => {    
        const response = await inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                "Engineer",
                "Intern",
                "I don't need to add anyone"
                ]
            }
        ]);

        switch(response.memberChoice) {
            case "Engineer":
            addEngineer ();
            break;
        
            case "Intern":
            addIntern();
            break;
        
            // case "Manager":
            // createManager ();
            // break;
        
            default:
            fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
            break;
        }
    };
    createManager();
};
teamMenu();