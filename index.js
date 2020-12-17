const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => 
  inquirer.prompt([
    // { //
    //   type: '',
    //   name: '',
    //   message: '',
    // },
    { //title
      type: 'input',
      name: 'title',
      message: 'What project title do you want to use?',
    },
    
    { //Description
      type: 'input',
      name: 'description',
      message: 'Please describe what your project does:',
    },

    { // installation instructions
      type: 'input',
      name: 'installation',
      message: 'Please type installation instructions of your README file:',
    },

    { //Usage
      type: 'input',
      name: 'usage',
      message: 'Please type your usage information:',
    },
    
    { //Git hub username
      type: 'input',
      name: 'username',
      message: 'What is your github user name?',
    },
    
    { //
      type: 'input',
      name: 'contributing',
      message: 'Please type who contributes into this project:',
    },
    
    {//email 
      type: 'input',
      name: 'email',
      message: 'Which email address you want to put in the README file?',
    },

    { //license
      type: 'input',
      name: 'license',
      message: 'Which license do you want to use? ISC, MIT, zLib License or you can go to https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository to find the type of license you want.',
    },

  ]);
  //email;

const generateREADME= (answers) =>
`# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
:octocat: [${answers.contributing}](https://github.com/${answers.username})
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Questions
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
✉️Email me with any questions: ${answers.email}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
`;

promptUser()
  .then((answers) => writeFileAsync('./tests/README.md',generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err)=>console.error(err));