// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  gnuBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  apacheBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

  switch (renderLicenseBadge) {
    case 'Apache License 2.0': {
      renderLicenseBadge = apacheBadge;
      break;
    }
    case 'GNU General Public License v3.0': {
      renderLicenseBadge = gnuBadge;
      break;
    }
    case 'MIT License': {
      renderLicenseBadge = mitBadge;
      break;
    }
    default: '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const mitLink = `https://choosealicense.com/licenses/mit/`;
  const gnuLink =  `https://www.gnu.org/licenses/`;
  const apacheLink = `http://www.apache.org/licenses/LICENSE-2.0`;

  switch (renderLicenseLink) {
    case 'Apache License 2.0': {
      renderLicenseLink = apacheLink;
      break;
    }
    case 'MIT License': {
      renderLicenseLink = mitLink;
      break;
    }
    case 'GNU General Public License v3.0': {
      renderLicenseLink = gnuLink;
      break;
    }
    default: '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch(renderLicenseSection) {
    case 'Apache License 2.0': {
      renderLicenseSection = apacheLicense;
      break;
    }
    case 'GNU General Public License v3.0': {
      renderLicenseSection = gnuLicense;
      break;
    }
    case 'MIT License': {
      renderLicenseSection = mitLicense;
      break;
    }
    default: '';
  }
}

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

// switch case statement will determine which license the user has selected and print the license info and badge to the README


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
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

${data.installaion}

## Usage 

${data.usage}

## Credits

List any contributors here:

## License 

${renderLicenseSection}
${renderLicenseLink}

## Badges 
${renderLicenseBadge}

## Features 

If your project has a lot of features, list them here: 

## How to Contribute

${data.contributions}

## Tests

Here's a list of tests and how to run them: 

${data.tests}

`;
}

module.exports = generateMarkdown;