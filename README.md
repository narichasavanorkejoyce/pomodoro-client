# Pomodoro Time

This time management app uses the [pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) to help people get stuff done.

![Pomodoro](http://i.imgur.com/ndAsCdF.png)

## Links
- [Pomodoro Deployed Site](https://narichasavanorkejoyce.github.io/pomodoro-client/)
- [API Repository](https://github.com/narichasavanorkejoyce/pomodoro-api)
- [Client Repository](https://github.com/narichasavanorkejoyce/pomodoro-client)
- [API](https://pomodoro-lyfe.herokuapp.com/)

## User Stories
- As a user, I want auth functionality (sign up, sign in, change password, sign out).
- As a user, I want to interact with a simple, minimalist web application.
- As a user, I want to create a session.
- As a user, I want to record how many pomodoros I complete in a session.
- As a user, I want to see a history of my sessions.
- As a user, I want to be able to delete a session.
- As a user, I want to sort my session by updated time.
- As a user, I want front-end validation.
- As a user, I want to store my data in a Postgres database.
- As a user, I want my data to be protected. Only an owner should be able to CRUD on a session.
- As a user, I want my actions to have back-end validation.
- STRETCH: As a user, I want to use a built-in timer and measure the length of a pomodoro (25 mins).
- STRETCH: As a user, I want to start, stop, and reset my timer.

## Wireframes

[Login/Home Page](http://i.imgur.com/ATp61OA.jpg)

[Modals](http://i.imgur.com/Ow7Tbjt.jpg)

## Development Process
The Pomodoro technique is a timeboxing method I've used for several years. The methodology calls for working in 25 minute intervals separated by 5 minute breaks. I was excited to build an app that would help me keep track of how many "pomodoros" I could do in one session of work.

During this project, I focused on reviewing many of the HTML/CSS and Javascript concepts we learned in class. I divided my HTML code into components and placed them in separate Handlebars templates. I practiced using Promises, especially during Ajax calls. I learned how to use the setInterval/clearInterval functions, and built a timer with start/stop/reset functionality. When the timer ends, it plays a sound to alert the user. I used a 3rd party API called Unsplash Source to randomly change the background image. Overall, I think the app has a clean and minimalistic feel.

## Challenges
I spent the most time debugging the timer. Learning about the setInterval/clearInterval functions was definitely a challenge, but I enjoyed implementing this feature.

## Tech & Dependencies

Install dependencies with `npm install` and `bundle install`.
- [JS Template](https://github.com/ga-wdi-boston/browser-template)
- Languages & Tools
  - HTML/CSS
  - Javascript
  - jQuery
  - Handlebars
  - Ruby on Rails
  - Bootstrap
  - Material Design Lite
  - [Moment.js](https://momentjs.com/)
  - [Unsplash Source](https://source.unsplash.com/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
