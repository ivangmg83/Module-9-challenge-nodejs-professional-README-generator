const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
{
    type:"input",
    name:"firstName",
    message:"What's your first name?"
},
{
    type:"input",
    name:"lastName",
    message:"What's your last name?"
},
{
    type:"list",
    name:"favoriteLanguage",
    message:"What's your favorite Language?",
    choices:["HTML", "JS", "PYTHON", "SWIFT"]
}
  ])
  .then((answers) => {
    console.log(answers)
    // Use user feedback for... whatever!!
    writeAnswersToFile(answers);
  })

  const writeAnswersToFile= (userAnswers)=>{
    const initialData = `First name: ${userAnswers.firstName} \nLast name: ${userAnswers.lastName} \nFavorite Language: ${userAnswers.favoriteLanguage}`
    fs.writeFile(
        'userAnswers.md', 
        initialData, 
    (error)=>error?console.log(error):console.log("success")
    )
  }

  console.log('test inputs')

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
