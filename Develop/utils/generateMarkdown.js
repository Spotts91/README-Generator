// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">$answers.projectTitle} </h1>
  
  ## Description 
  ${answers.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${answers.installation}
  
  ## Usage 
  ${answers.usage}
  
  ## License 
  This project is licensed under the ${answers.license}
  
  ## Contributing 
  ${answers.contributors}
  
  ## Tests
  ${answers.test}

  ## Questions
  ${answers.questions}<br />
  Find me on GitHub: [${answers.username}](https://github.com${answers.username})<br />
  <br />
  Email me with any questions: ${asnwers.email}<br /><br />
`;
}

module.exports = generateMarkdown;
