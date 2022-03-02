// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project?',
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'Examples and instructions for use',
        },
        {
        type: 'input',
        name: 'screenshot',
        message: 'Title of screenshot',
        },
        {
        type: 'input',
        name: 'credits',
        message: 'Project collaborators',
        },
        {
        type: 'input',
        name: 'license',
        message: 'Include the license.',
        default: "MIT",
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md" , generateMarkdown(data));
    })
    .then(() => console.log('wrote README!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
