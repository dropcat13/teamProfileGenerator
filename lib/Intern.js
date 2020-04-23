const Employee = require("./Employee");

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

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern"
    };
}

module.exports = Intern;
