// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util")
const inquirer = require("inquirer");
// Link back to the page where the README is developed
var generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
function promptUser () {
    return inquirer.prompt([
        {
            type:"input",
            name: "projectTitle",
            meassage: "what is the project title",
        },
        {
            type:"input",
            name:"description",
            message: "write a brief description of your project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project going to be used for: ",
        }, 
        {
            type: "list",
            name: 'license',
            message: "choose the apporpriate license for this project",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "open",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "who are the contributors of this project",
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?",
        },
        {
            type: "input",
            name: "questions", 
            message: "What do I do if I have an issue?",
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please entere your email: "
        }
    ]);
}
// TODO: Create a function to write README file
function init () {
    try {
        const answers = await promptUser();
        const generateMarkdown = generateMarkdown(answers);
        await ('./utils/generateMarkdown.js', generateMarkdown);
        console.log('Succesfully wrote to ReadME.md');
    }
    catch(err) {
        console.log(err);
    }
}

init();