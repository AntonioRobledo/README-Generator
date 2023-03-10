// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `[GitHub License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

${data.license}

## Badges 

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