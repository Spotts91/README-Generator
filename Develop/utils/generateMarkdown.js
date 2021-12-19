// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  This project is license under ${data.license}
  
  ## Contributing 
  ${data.contributors}
  
  ## Tests
  ${data.test}
';
}

module.exports = generateMarkdown;
