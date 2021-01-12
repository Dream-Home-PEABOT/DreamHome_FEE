## Contributors
  - [Blake Donnelly](https://github.com/BlakeDonn)
  - [Orlando MMurcio](https://github.com/BlakeDonn)
  - [Tim Keresey](https://github.com/BlakeDonn)

## Overview

`Dream Home` Is an educational / planning application meant to help new home buyers ease into the process of budgeting for their dream home.

## Context

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
 <img  src="https://media3.giphy.com/media/2QCSlC1SH0Je4rKPzb/giphy.gif" alt="" height=100% width=80%/>
</p>
</div>

- When a user navigates to the "Dream Home" webpage, they are presented with an inviting animation and simplistic design
- When the user is ready, they may click on the menu icon, which will present a dropdown menu
- Currently the `Home` and `Journey` links on this dropdown are functional, with plans for Login functionality soon
- If the user has filled out our questionnaire, they will also have a `Report` link which directs them to their report 
- Clicking `Journey` will launch the user experience

#### Results Page

- Based on the categories the user selected, a filtering process will begin on component mounting that has a few steps
- The first step is to query the Guild Wars 2 API for `allSkins` and `userSkins` determined by a provided API key (these will each return an array of thousands of IDS)
- The second step is to run an algorithm to cross reference these Ids to find only the ones the user does not need
- The third step is to again query the Guild Wars 2 API, this time in 200 id increments (the API limit), to get objects that have the detailed skins information
- The fourth step is to make each of these objects into a `PreviewSkin` component for the user to interact with (represented as the skins icon)

  <img src="https://i.imgur.com/g8sfvVA.png" height=auto width=75%/>

#### SkinDetails Page

- As User has the option to click on a `PreviewSkin` component to be brought to a screen with more details about that skin
- There is brief information about the skin type and other unique values, a link to the WIKI for more info, and a button to add to the users todo list
- If a user chooses to add the skin to their todo list, it will do so, and persist through route changes.
- If a user chooses to go to the Wiki page they will be redirected as such

  <img src="https://media.giphy.com/media/SMf3EVgF9iWiLQqcoM/giphy.gif" height=auto width=75%/>

#### Todo Page


- The users selected to-do items will exist on this page, which can be found through a button on the `Results` page
- Currently the todo list does not persist refresh, though it does persist through many other route changes


<img src="https://media.giphy.com/media/KOr3BibCgx8rAS3Isu/giphy.gif" height=auto width=75%/>

### Set up

* On the top right corner of this page, click the **Fork** button.
- Clone the repository to your computer `git clone <URL>`
  - When you run git clone - git clone [remote-address] [what you want to name the repo]
  replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
- `cd` into the repository with the following command `cd <repo-name>`
- Run `npm install`
- Set up .env file with API key REACT_APP_API_KEY=your gw2 api key here
- Run `npm start`
- Open browser to LocalHost:3000

### Contribute

- Create a new branch with `git checkout -b <new branch name>`
- Open your text editor and add or remove functionalities to the site.
- `git add` and `git commit -m "<your commit meessage>"` to save the changes to your local repository
- `git push` your changes
- Create a new pull request!

### Project Managers
- [Leta](https://github.com/letakeane)
- [Khalid](https://github.com/khalidwilliams)


