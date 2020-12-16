const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  inquirer.prompt([
    //email
    { 
      type: '',
      name: '',
      message: '',
    },


  ])
  //email

}
// get the valus from the user
// place the values into a pre-defined template
// write the interpolated template into a file
//promptUser will return a promize
//  third party module, local module, node natiave module?