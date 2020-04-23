const Employee = require("./Employee");

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

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;