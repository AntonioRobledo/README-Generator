// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
        message: 'If necessary, list others who have contributed: '
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
        choices:['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your first and last name: '
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
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter the current year in YYYY format: '
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then((data) => {
                let licenseInfo = data.license;
                let licenseBadge = licenseInfo;

 // Create a function to generate which license is chosen
 const apacheLicense = 
  
 `Apache License 2.0 

  Copyright (c) ${data.year} ${data.username}
  
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

  You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software

  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

  See the License for the specific language governing permissions and limitations under the License`

const mitLicense = 

`MIT License 

Copyright (c) ${data.year} ${data.username}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal

in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER

LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

SOFTWARE.`

const gnuLicense = 

`GNU General Public License v3.0 

Copyright (c) ${data.year} ${data.username}

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by

the Free Software Foundation, either version 3 of the License, or (at your option) any later version.


This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of

MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.


You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  
    switch (licenseInfo, licenseBadge) {
      case 'Apache License 2.0': {
        licenseInfo = apacheLicense;
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      }
      case 'GNU General Public License v3.0': {
        licenseInfo = gnuLicense;
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      }
      case 'MIT License': {
        licenseInfo = mitLicense;
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      }
      default: '';
    }
  
  // TODO: Create a function to generate markdown for README
  const generateMarkdown =
 `
    
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installations](#installation)
  
  - [Usage](#usage)
  
  - [Contributors](#credits)
  
  - [License](#license)
  
  ## Installation
  
  Here is a guide to the installation process: 
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Credits
  
  List any contributors here:
  ${data.contributions}
  
  ## License 
  
  ${licenseInfo}
 
  
  ## Badges 
  ${licenseBadge}
  
  ## How to Contribute
  
  ${data.contributions}
  
  ## Tests
  
  Here's a list of tests and how to run them: 
  
  ${data.tests}
  
  `;
  

  writeToFile(generateMarkdown);
})

// TODO: Create a function to generate the README file
function writeToFile(sample) {
      const readMe = sample;
      fs.writeFile('README.md', readMe, (err) => 
    err ? console.log(err) : console.log('You have successfully created your README.md')) 
    }
}

// Function call to initialize app
init();