// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
    return inquirer.prompt([
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
        name: 'credits',
        message: 'Porject collaborators',
        },
        {
        type: 'input',
        name: 'license',
        message: 'Include the license.',
        },
    ]);
    };


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
