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
    message:"What steps are needed to install your project"
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
    message:"WHow do you test this project?"
},
{
    type:"list",
    name:"license",
    message:"What license does your project use?",
    choices:["None", "Apache 2.0", "MIT", "Mozilla"]
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

  const writeAnswersToFile= (userAnswers)=>{
    const initialData = `# ${userAnswers.title} 
    \n## Descrption \n### ${userAnswers.description}
    \n## Installation \n### ${userAnswers.installation}
    \n## Usage \n### ${userAnswers.usage}
    \n## Contributions \n### ${userAnswers.description}
    \n## Tests \n### ${userAnswers.tests}
    \n## ${userAnswers.license}
    \n## Questions \n### ${userAnswers.githubName} \n### Or \n### ${userAnswers.email}`
    fs.writeFile(
        'README.md', 
        initialData, 
    (error)=>error?console.log(error):console.log("success")
    )
  }