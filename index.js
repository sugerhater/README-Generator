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
    
    // { //Git hub username
    //   type: 'input',
    //   name: '',
    //   message: '',
    // },

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
      message: 'Please type who contribute into this project:',
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
${installation}
##Usage
${usage}
##Contributing

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