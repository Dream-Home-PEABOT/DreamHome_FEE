## Contributors
  - [Blake Donnelly](https://github.com/BlakeDonn)
  - [Orlando MMurcio](https://github.com/BlakeDonn)
  - [Tim Keresey](https://github.com/BlakeDonn)

## Overview

`Dream Home` Is an educational / planning application meant to help new home buyers ease into the process of budgeting for their dream home.

`Dream Home` is a capstone project built by 3 frontend and 3 backend students in mod 4 at the Turing School of Software and Design, it is meant to be be a showcase of the students expertise in agile collaborative development in a completely unguided application.

#### Technologies used:

  * Typescript
  * React
  * React Hooks
  * React Router
  * CSS
  * TravisCI
  * Heroku
  * Git
  * GitHub

## Challenges

  * Implementing typescript and react hooks as brand new technologies to the FE team
  * Implementing context as a means to pseudo-global state
  * Avoiding memory leaks through the proper usage of hooks
  * Mocking out API data while the backend was in development
  * Utilizing animations for better flow

## Wins

  * Creating a fully-functional application that meets MVP
  * Integrating CI and deployment to seamlessly update the application
  * Utilize agile workflow to maximize productivity
  * Continuous communication between FE / BE through standups and code review

## Future Goals

  * Add logged-in functionality to the application
  * Allow for a more personalized experience through the storing of user data
  * Adds more education "gameification"
  * Flesh out interactivity in the report

## In Action

<div align ="center">
  <h3>Home</h3>
    <p align="center">
      <img  src="https://media1.giphy.com/media/YxFgsAeJqyGycOE0cB/giphy.gif" alt="" height=100% width=80%/>
    </p>
</div>

- When a user navigates to the "Dream Home" webpage, they are presented with an inviting animation and simplistic design
- When the user is ready, they may click on the menu icon, which will present a dropdown menu
- Currently the `Home` and `Journey` links on this dropdown are functional, with plans for Login functionality soon
- If the user has filled out our questionnaire, they will also have a `Report` link which directs them to their report 
- Clicking `Journey` will launch the user experience

---

<div align ="center">
  <h3>Journey / Survey</h3>
</div>

- After the user clicks the `Journey` link, they will be brought to an introduction page
- Upon clicking the `Statrt` button they will be brough to the survey page with some more information

---

<div align ="center">
  <h3>Questionnaire</h3>
    <p align="center">
      <img src="https://media1.giphy.com/media/7TGVPEEoTnzUh6tx3b/giphy.gif" height=auto width=75%/>
    </p>
</div>

- Once a user has decided to begin the survey they will be presented with a set of questions
- These questions will be the foundation for our backend calculations
- The user will be presented with a tip and educational blurb to help understand why this info is needed
- If the question is required, the user will be presented with an error
- If at any time the user wants to change an answer, they may go `back` and see what they previously answered

---

<div align ="center">
  <h3>Report</h3>
    <p align="center">
      <img src="https://media3.giphy.com/media/rcVbuCrOUPQRjqo4Kx/giphy.gif" height=auto width=75%/>
    </p>
</div>


- Once the user has completed the questionnaire they will be taken to the generate report page
- When they are ready to generate their Dream Home report, they will click the `generate report` button
- The user will be presented with a loading animation, and finally their generated Dream Home report
- The user may interact the downpayment year to see how long it will take to save for their dream home


### Set up

* On the top right corner of this page, click the **Fork** button.
- Clone the repository to your computer `git clone <URL>`
  - When you run git clone - git clone [remote-address] [what you want to name the repo]
  replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
- `cd` into the repository with the following command `cd <repo-name>`
- Run `npm install`
- Run `npm start`
- Open browser to LocalHost:3000

### Contribute

- Create a new branch with `git checkout -b <new branch name>`
- Open your text editor and add or remove functionalities to the site.
- `git add` and `git commit -m "<your commit meessage>"` to save the changes to your local repository
- `git push` your changes
- Create a new pull request!

### Project Managers
- [Robbie](https://github.com/robbiejaeger)
- [Kathleen Scriver](https://github.com/KathleenScriver)


