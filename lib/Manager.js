const Employee = require("./Employee");

// function managerPrompt() {
//     return inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "What is the employees name?"
//       },
//       {
//           type: "input",
//           name: "id",
//           message: "What is their ID number?"
//       },
//       {
//           type: "input",
//           name: "email",
//           message: "Please enter their email:"
//       },
//       {
//             type: "input",
//             name: "officeNumber",
//             message: "What is their office number?"
//       }
//     ])
//     .then(answers => {
//         console.info("Answer:", answers.name, answers.id, answers.email, answers.officeNumber);
//     });
  
//   };

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;