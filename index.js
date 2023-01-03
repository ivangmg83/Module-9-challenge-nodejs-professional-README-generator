const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
{
    type:"input",
    name:"title",
    message:"What is the title of your project?"
},
{
    type:"input",
    name:"description",
    message:"Provide a project description"
},
{
    type:"input",
    name:"installation",
    message:"What steps are needed to install your project?"
},
{
    type:"input",
    name:"usage",
    message:"What is the usage for your project?"
},
{
    type:"input",
    name:"contributions",
    message:"What guidelines must other follow in order to contribute?"
},
{
    type:"input",
    name:"tests",
    message:"How do you test this project?"
},
{
    type:"list",
    name:"license",
    message:"What license does your project use?",
    choices:["None", "Apache 2.0", "MIT", "BSD"]
},   
{
    type:"input",
    name:"githubName",
    message:"What is your Github username so others can reach you for questions?"
},
{
    type:"input",
    name:"email",
    message:"What is your email so there is another way to be reached for questions?"
},
  ])
  .then((answers) => {
    console.log(answers)
    writeAnswersToFile(answers);
  })

  function renderLicenseBadge(license){
    let badge = '';
    if(license === 'MIT'){
        badge = '![GitHub license](https://img.shields.io/aur/license/professional-readme-generator)'
    } else if(license === 'Apache 2.0'){
        badge = '![Apache2.0 license](https://img.shields.io/aur/license/Module-9-challenge-nodejs-professional-README-generator)'
    } else if(license === 'BSD'){
        badge = '![BSD license](https://img.shields.io/pypi/l/Module-9-challenge-nodejs-professional-README-generator)'
    } else {
        badge =''
    }
    return badge;
}

function renderLicenseLink(license){
    let licenseLink = '';
    if(license === 'MIT'){
        licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if(license === 'Apache 2.0'){
        licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
    } else if(license === 'BSD'){
        licenseLink = '!https://opensource.org/licenses/BSD-2-Clause'
    } else {
        licenseLink =''
    }
    return licenseLink;
}

  const writeAnswersToFile= (userAnswers)=>{
    const initialData = `# ${userAnswers.title} 
    \n## ${userAnswers.license} ${renderLicenseBadge(userAnswers.license)} \n### ${renderLicenseLink(userAnswers.license)}
    \n## Table of contents: \n### * [License](#license) \n### * [Installation](#instalacion)\n### * [Usage](#usage)\n### * [Contributions](#contributions)\n### * [Tests](#tests)\n### * [Questions](#questions)
    \n## Descrption \n### ${userAnswers.description}
    \n## Installation \n### ${userAnswers.installation}
    \n## Usage \n### ${userAnswers.usage}
    \n## Contributions \n### ${userAnswers.contributions}
    \n## Tests \n### ${userAnswers.tests}
    \n## Questions \n### If you have any questions, you may contact me either \n### GitHub: https://github.com/${userAnswers.githubName} \n### Or \n### Email: ${userAnswers.email}`
    fs.writeFile(
        'README.md', 
        initialData, 
    (error)=>error?console.log(error):console.log("success")
    )
  }