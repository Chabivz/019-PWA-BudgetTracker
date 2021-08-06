# NoSQL Budget Tracker

[![Badge](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
[![Badge](https://img.shields.io/badge/GitHub-chabivz-blueviolet?style=flat-square&logo=appveyor)](https://github.com/chrisabiva)

Hi Fitness enthusiast. This is a web app where you can track your workout exercies by cardio and resistance using MongoDB and Express
## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#License)

## About the Project
- The motivation for this project is to track our workout exercises. Where it is Resistance or Cardio
- When I want to add a new resistance workout it should input the `Exercise name, Weight (lbs), Sets, Reps and Duration (minutes)` of my workout. 
- When I want to add a new cardio workout it should input the `Exercise Name, Distance (miles), and Duration (minutes)`
- When I clicked the Dashboard in the Navigation bar it will display my workout dashboard chart.

- Built with the following packages: 
  - [CSS](https://www.w3schools.com/css/)
  - [express](https://www.npmjs.com/package/express)
  - [HTML](https://www.w3schools.com/html/)
  - [Javascript](https://www.npmjs.com/package/CSS)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [mongoose](https://www.npmjs.com/package/mongoose)

## Installation

- Open [Fitness Tracker](https://github.com/Chabivz/014-TechBlog)
- Clone the repository
- install all the packages by `npm i` or `npm i express mongoose path `
- On a separate terminal run `mongo` or `mongod` server.
- Seed by going typing `node seeds/seed.js ` in the terminal.
- Start the server by typing `node server.js` or `nodemon`

## Usage
- Visit the deployed Heroku app [Fitness Tracker](https://limitless-citadel-24664.herokuapp.com/)
- In The Fitness Tracker Home Page. Add a `New Workout`.
- Enter `Exercise name, Weight (lbs), Sets, Reps and Duration` for `Resistance Workout`
- Enter `Exercise Name, Distance (miles), and Duration (minutes)` for `Cardio Workout`
- When I go back to the `Fitness Tracker` I will see my last workout and Add more workout if I click `Continue Workout`
- When I click `Continue Workout` it will display the 
  - Total Workout Duration
  - Exercise Performed 
  - Total Distance Covered
  - Total Weight Lifted
  - Total Sets Performed
  - Total Reps Performed


|Demo|
|---|
|![Online Demo](./public/images/fitnesstracker.gif)|
|Homepage|
|![Homepage](./public/images/1.png)|
|Adding Resistance Exercise|
|![Add Resistance](./public/images/4.png)|
|Adding Cardio Exercise|
|![Add Cardio](./public/images/6.png)|
|Displaying Workout Chart|
|![Chart](./public/images/5.png)|

## Question

- [Email](mailto:chrisabiva@hotmail.com)
- [Github](https://github.com/Chabivz)
## License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.