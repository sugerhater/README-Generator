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
    
    { //Git hub username
      type: 'input',
      name: 'username',
      message: 'What is your github user name?',
    },

    { // installation instructions
      type: 'input',
      name: 'installation',
      message: 'Please type installation instructions of your README file:',
    },
    { //
      type: 'input',
      name: 'usage',
      message: 'type usage',
    },
    { //
      type: 'input',
      name: 'Contributing',
      message: 'Please type who contributes into this project:',
    },
    
    {//email 
      type: 'input',
      name: 'email',
      message: 'Which email address you want to put in the README file?',
    },

    { //title
      type: 'input',
      name: 'title',
      message: 'What project title do you want to use?',
    },

    { //description
      type: 'input',
      name: 'description',
      message: 'Please type the description of your README file',
    },


    { //license
      type: 'list',
      name: 'license',
      message: 'Which license do you want to use?',
      choices: ['ISC','MIT']
    },

  ]);
  //email;

const generateREADME= (answers) =>
`#${answers.title}
${answers.description}
##Installation
${answers.installation}
##Usage
${answers.usage}
##Contributing
${answers.Contributing}
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

##Questions
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
Email me with any questions: ${answers.email}<br /><br />
`;

promptUser()
  .then((answers) => writeFileAsync('./created/README.md',generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err)=>console.error(err));
// get the valus from the user
// place the values into a pre-defined template
// write the interpolated template into a file
//promptUser will return a promize
//  third party module, local module, node natiave module?