// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdownFile = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/markdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a name for your project: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a detailed description to help the user understand what your project is about: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps need to be taken in order to install necessities to your project?'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project: '
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'If necessary, describe how others can contribute to your project: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe what tests need to be run and how to run them: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter the license that your project contains: ',
        choices:['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0'],
    },
    {
        type: 'input',
        name: 'GitHub',
        message:'Enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    }
    {
        type: 'input',
        name: 'email',
        message: 'Enter the current year in YYYY format: '
    }
];

// TODO: Create a function to generate the README file
function writeToFile(fileName, data) {
    const readMe = generateMarkdown(data);
    fs.writeFile('fileName', readMe, (err) => 
    err ? console.log(err) : console.log('You have successfully created your README.md.')) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then(data) => {
               let userLicense = data.license;
               let licenseBadge = userLicense;
        }
}

// Function call to initialize app
init();