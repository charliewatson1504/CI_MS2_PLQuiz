# Premier League Trivia Quiz

**Interactive Frontend Development Milestone Project**

## Project Overview

![Main Mockup](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/mockup/premier-league-mockup.png)

[Link to live site](https://charliewatson1504.github.io/CI_MS2_PLQuiz/)

---

# Table of Contents

- [Premier League Trivia Quiz](#premier-league-trivia-quiz)
	- [Project Overview](#project-overview)
- [Table of Contents](#table-of-contents)
- [UX](#ux)
	- [Project Goals](#project-goals)
	- [User Stories](#user-stories)
		- [First Time Visitor](#first-time-visitor)
		- [Returning Visitor](#returning-visitor)
	- [Site Owner Goals](#site-owner-goals)
	- [User Requirements and Expectations](#user-requirements-and-expectations)
- [Design Choices](#design-choices)
	- [Colors](#colors)
	- [Fonts](#fonts)
	- [Images](#images)
	- [Wireframes](#wireframes)
		- [Homepage](#homepage)
- [Technologies Used](#technologies-used)
	- [Languages](#languages)
	- [Frameworks, libraries and other tools](#frameworks-libraries-and-other-tools)
- [Features](#features)
	- [Feature 1 - Home Page](#feature-1---home-page)
		- [Section 1 - Hero Image](#section-1---hero-image)
		- [Section 2 - Info Cards](#section-2---info-cards)
		- [User Stories covered by this feature](#user-stories-covered-by-this-feature)
	- [Feature 2 - Stats Page](#feature-2---stats-page)
		- [Section 1 - Load Buttons](#section-1---load-buttons)
		- [Section 2 - League Table](#section-2---league-table)
		- [Section 3 - Fixtures](#section-3---fixtures)
		- [User Stories covered by this feature](#user-stories-covered-by-this-feature-1)
	- [Feature 3 - Twitter Page](#feature-3---twitter-page)
		- [Section 1 - Twitter Feed](#section-1---twitter-feed)
		- [User Stories covered by this feature](#user-stories-covered-by-this-feature-2)
	- [Feature 4 - Quiz Page](#feature-4---quiz-page)
		- [Section 1 - Info Card](#section-1---info-card)
		- [Section 2 - Game Page](#section-2---game-page)
		- [Section 3 - Quiz End Page](#section-3---quiz-end-page)
		- [Section 4 - Call to action for feedback](#section-4---call-to-action-for-feedback)
		- [User Stories covered by the feature](#user-stories-covered-by-the-feature)
	- [Feature 5 - Feedback Modal](#feature-5---feedback-modal)
		- [User Stories covered by the feature](#user-stories-covered-by-the-feature-1)
	- [Feature 6 - NavBar](#feature-6---navbar)
		- [User Stories covered by the feature](#user-stories-covered-by-the-feature-2)
	- [Feature 7 - Footer](#feature-7---footer)
		- [User Stories covered by the feature](#user-stories-covered-by-the-feature-3)
- [Validation](#validation)
	- [HTML Validation](#html-validation)
	- [CSS Validation](#css-validation)
	- [JavaScript Validation](#javascript-validation)
	- [Accessibility Validation](#accessibility-validation)
	- [Performance](#performance)

# UX

## Project Goals

The goal for this site is to provide a fun, interactive quiz that can be enjoyed on a break from work of when time is limited. Additional pages to include stats and music playlists of football songs. This site has been built solely for the purpose of the 2nd milestone project and will not be used in any real world application so as not to infringe any trademarked content.

## User Stories

### First Time Visitor

1. As a **First Time Visitor** I want to be able to play an interactive quiz.
2. As a **First Time Visitor** I want feedback on where I am up to through the quiz.
3. As a **First Time Visitor** I want to know what my score is at the end of the quiz.
4. As a **First Time Visitor** I want to know what questions I got wrong and what the correct answer was at the end of the game.
5. As a **First Time Visitor** I want to be able to see stats from the Premier League.
6. As a **First Time Visitor** I want to be able to see what is being said about Premier League on social media.
7. As a **First Time Visitor** I want to know if I have entered incorrect information.

### Returning Visitor

8. As a **Returning Visitor** I want to be able to see updated stats from the Premier League.
9. As a **Returning Visitor** I want to be able to play the quiz again and be asked different questions.

## Site Owner Goals

10. As a **Site Owner** I want to be able to provide an interactive quiz.
11. As a **Site Owner** I want to be able to provide feedback to the user when playing the quiz.
12. As a **Site Owner** I want to be able to confirm the users score at the end of the quiz.
13. As a **Site Owner** I want to be able to validate the data entered by the user.
14. As a **Site Owner** I want to provide information from other sources to the user.
15. As a **Site Owner** I want to be able to get feedback from the user.
16. As a **Site Owner** I want the site to be responsive to whatever device the user is using.

## User Requirements and Expectations

1. The website should include:
   - An interactive quiz that provides feedback to the user as they progress through.
   - A list of football songs provided direct from a spotify API that can be interacted with.
   - A navigation bar that enables easy transition between pages and is responsive to what device it is viewed on.
   - A feedback form that sends an email direct to the site owner with comments from the user about their experience with the site.
   - Data from football databases pulled into the site via an API to give the user the most up to date information.
2. The website should be interactive, provide feedback and confirmation to the user and validate any data entered by the user. It also needs to be aesthetic and intuitive to use.

# Design Choices

With this site I want to primarily create an interactive quiz based on the Premier League. In addition I want to bring in additional information from other sources and websites to provide a more interactive experience for the user. With that in mind the site still needs to look great and be responsive to different media screens. I don't want it to look cluttered so will go with a sleek minimal design that gains inspiration from the Premier League colours and design itself.
## Colors
Color scheme has been kept minimal so that the user is not overwhelmed when playing the game or looking at the information. An accent color of a light blue was used throughout to keep a consistent look and feel as the user navigates through the site.

![Colour Pallette](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/color-pallet.png)
## Fonts
I have used Noto Sans JP for the body text and Roboto for the headers. Both fonts are from google fonts and compliment each other well. I have used sans-serif as a back up font should the browser the user is using cannot load the google fonts.

## Images

Homepage hero Photo by <a href="https://unsplash.com/@viennachanges?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vienna Reyes</a> on <a href="https://unsplash.com/s/photos/football-stadium?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Quiz hero Photo by <a href="https://unsplash.com/@piensaenpixel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emilio Garcia</a> on <a href="https://unsplash.com/s/photos/football?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Quiz card img Photo by <a href="https://unsplash.com/@a56?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ÁLVARO MENDOZA</a> on <a href="https://unsplash.com/s/photos/football-quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
stats card Photo by <a href="https://unsplash.com/@travelnomades?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Travel Nomades</a> on <a href="https://unsplash.com/s/photos/football?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
## Wireframes
The wireframes for the site were created in Adobe XD and are linked below for Desktop, Tablet and Mobile devices.
### Homepage
1. <details><summary>Desktop</summary><img src="#"></details>
2. <details><summary>Tablet</summary><img src="#"></details>
3. <details><summary>Mobile</summary><img src="#"></details>

# Technologies Used
## Languages
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
## Frameworks, libraries and other tools
- [Git](https://git-scm.com/)
Used for version control of the site and push code from VScode to Github
- [Github](https://github.com/)
Used as the remote repository to store the code. Github pages is also where the live site is hosted.
- [Visual Studio Code](https://code.visualstudio.com/)
Used as the IDE for writing the code and file management.
- [Adobe XD](https://www.adobe.com/uk/products/xd.html)
Used to create wireframes for the site.
- [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html)
Used to edit and crop all image sizes on the site as original filesize were too large and affected performance.
- [Google Fonts](https://fonts.google.com/)
Used for Noto Sans JP and Roboto fonts that were used throughout the site.
- [Font Awesome](https://fontawesome.com/)
Used for various icons throughout the site.
- [Bootstrap](https://getbootstrap.com/)
Used for creating a responsive navigation bar used in every header of main site pages. Also used for creating a modal for a feedback form used on each of the main site pages.
- [Am I responsive](http://ami.responsivedesign.is/)
Used to create a mulit-device mock-up that is shown at the top of the README file.
- [Convertio](https://convertio.co/png-webp/)
Used to convert any PNG image to WEBP to improve the sites performance.

# Features
This site has ?? pages with ?? features
## Feature 1 - Home Page
The homepage has 2 main sections to it:

1. Hero image
2. Info cards with call to action buttons to other parts of the site

This page is responsive and shows in a different layout on a mobile device compared to a desktop.
### Section 1 - Hero Image
Image from unsplash and chosen for a great landscape image that gives big impact on first load and immediately establishes what the site is about. There is an introduction heading under the image stating what the site is about.

![Feature 1 Section 1](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-1-sec-1.png)

### Section 2 - Info Cards
The info cards give a brief insight into what can be found within the site. They all provide feedback when hovered over and contain a call to action to a specific part of the site. Allows for easier navigation through the site.

![Feature 1 Section 2](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-1-sec-2.png)

### User Stories covered by this feature
16- As a **Site Owner** I want the site to be responsive to whatever device the user is using.

## Feature 2 - Stats Page
The stats page has 3 main sections to it:

1. The buttons to load the data
2. The retrieved league table data
3. The retrieved fixture data

### Section 1 - Load Buttons
The buttons allow the user to select the information that they would like to look at and all information is loaded asynchronously. As the user clicks on the table button a further 2 options are displayed to give them further control on what they would like to look at. By clicking on the fixtures button hides the additional buttons as they are not relevant to the fixtures data.

After clicking on Table then 2020-2021:
![Feature 2 Section 1 Img 1](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-2-sec-1-img-1.png)

After clicking on Fixtures
![Feature 2 Section 1 Img 2](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-2-sec-1-img-2.png)

### Section 2 - League Table
The league table data is retrieved from an API (see credits for provider details). The user is able to select from 2 different seasons. As the API data is updated so will the league tables so the users will get up to date information each time they visit.

![Feature 2 Section 2](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-2-sec-2.png)

### Section 3 - Fixtures
The fixtures data is retrieved from the same provider as the league table data. Again as these are upcoming fixtures as the season moves on this page will display the next 15 upcoming fixtures.

![Feature 2 Section 3](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-2-sec-3.png)

### User Stories covered by this feature
5- As a **First Time Visitor** I want to be able to see stats from the Premier League.

8- As a **Returning Visitor** I want to be able to see updated stats from the Premier League.

14- As a **Site Owner** I want to provide information from other sources to the user.

## Feature 3 - Twitter Page
The twitter page has 1 main section to it:

1. The embedded twitter feed for the premier league account

### Section 1 - Twitter Feed
The twitter page provides the user with a live feed from the premier league twitter page. The user can interact with the feed and any links clicked will open up in a new tab so to not take them away from the site.

![Feature 3 Section 1](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-3-sec-1.png)

### User Stories covered by this feature
14- As a **Site Owner** I want to provide information from other sources to the user.

## Feature 4 - Quiz Page
The quiz page has 4 main sections to it:

1. An info card with a call to action to play the quiz.
2. Questions page that displays the questions and possible answers.
3. An end page of the quiz that displays the users score and a summary of all questions answer with correct answer to them.
4. A call to action at the end of the quiz to provide feedback from the user.

### Section 1 - Info Card
The info card contains a banner picture with a title and a button to start the quiz. Kept in the same format as other pages to keep consistency to the site.

![Feature 4 Section 1](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-4-sec-1.png)

### Section 2 - Game Page
The game page displays the questions and available answers to the user. Feedback is provided to the user in the form of the answer displaying as either green or red depending on if they got the question right or wrong. There is also a progression bar and a score counter to give further feedback to the user on how they are progressing through the quiz.

![Feature 4 Section 2](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-4-sec-2.png)

### Section 3 - Quiz End Page
The quiz end page displays a summary of the users questions answered with correct answer shown and the score they got. There are buttons below the summary for the user to either play again or go back to the home page.

![Feature 4 Section 3](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-4-sec-3.png)

### Section 4 - Call to action for feedback
On the quiz end page there is a call to action for the user to provide feedback. By clicking this button it will open the feedback modal which is detailed in Feature 5

![Feature 4 Section 4](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-4-sec-4.png)
### User Stories covered by the feature
1- As a **First Time Visitor** I want to be able to play an interactive quiz.

2- As a **First Time Visitor** I want feedback on where I am up to through the quiz.

3- As a **First Time Visitor** I want to know what my score is at the end of the quiz.

4- As a **First Time Visitor** I want to know what questions I got wrong and what the correct answer was at the end of the game.

9- As a **Returning Visitor** I want to be able to play the quiz again and be asked different questions.

10- As a **Site Owner** I want to be able to provide an interactive quiz.

11- As a **Site Owner** I want to be able to provide feedback to the user when playing the quiz.

12- As a **Site Owner** I want to be able to confirm the users score at the end of the quiz.

## Feature 5 - Feedback Modal
The feedback modal allows the user to provide feedback to the site owner on their experience. The form is validated as the user fills it out highlights if it finds an error. Once the user submits the form a loader is shown to provide the user with feedback that it is being worked on and returns a success message when all complete.

![Feature 5](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-5.png)

### User Stories covered by the feature
7- As a **First Time Visitor** I want to know if I have entered incorrect information.

13- As a **Site Owner** I want to be able to validate the data entered by the user.

15- As a **Site Owner** I want to be able to get feedback from the user.

16- As a **Site Owner** I want the site to be responsive to whatever device the user is using.

## Feature 6 - NavBar
The navigation bar allows the user to easily navigate around the site. It is made using the bootstrap component NavBar. It is responsive to the screen it is being viewed on and will collapse when the screen size is more of tablet/mobile size.

![Feature 6 Img 1](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-6-img1.png)
![Feature 6 Img 2](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-6-img2.png)

### User Stories covered by the feature
16- As a **Site Owner** I want the site to be responsive to whatever device the user is using.
## Feature 7 - Footer
The footer of the site contains a disclaimer from the developer and social media links to the various social pages the premier league has. They open up in a new tab as to no take the user away from the site.

![Feature 7](https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/features/feature-7.png)
### User Stories covered by the feature
6- As a **First Time Visitor** I want to be able to see what is being said about Premier League on social media.
# Validation
## HTML Validation
[W3c Markup Validation Service](https://validator.w3.org/) has been used to validate all of the HTML code within the site. All pages have passed with 0 errors and 0 warnings. Click on the below to see each screenshot:
1. <details><summary>Homepage</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/html-validation/html-validation-index.png"></details>
2. <details><summary>Stats</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/html-validation/html-validation-stats.png"></details>
3. <details><summary>Twitter</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/html-validation/html-validation-twitter.png"></details>
4. <details><summary>Quiz</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/html-validation/html-validation-quiz.png"></details>
5. <details><summary>Game</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/html-validation/html-validation-game.png"></details>
6. <details><summary>Quiz-End</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/html-validation/html-validation-quiz-end.png"></details>
7. <details><summary>404</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/html-validation/html-validation-404.png"></details>

## CSS Validation
[W3c CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate the CSS of the site. The stylesheet.css file returned with 0 errors. When running on the whole page it returned with 13 errors all of which can be attributed to Bootstrap v5.0. See below link to screenshot:
1. <details><summary>Whole Page</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/css-validation/whole-site-css-validation.png"></details>

2. <details><summary>CSS Stylesheet</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/css-validation/css-validation.png"></details>

## JavaScript Validation
[JSHint](https://jshint.com/) has been used to validate the JavaScript used in the site to the recognised standards when it comes to JavaScript. All pages have passed with 0 warnings. Click on the below to see each screenshot:
1. <details><summary>feedback_email.js</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/javascript-validation/jshint-feedback-email-js.png"></details>
2. <details><summary>game-end.js</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/javascript-validation/jshint-game-end-js.png"></details>
3. <details><summary>game.js</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/javascript-validation/jshint-game-js.png"></details>
4. <details><summary>stats.js</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/javascript-validation/jshint-stats-js.png"></details>
## Accessibility Validation
[WAVE WebAIM web accessibility evaluation tool](https://wave.webaim.org/) has been used to validate the site to the recognised standards when it comes to accessibility. All pages, apart from the twitter page, have passed with 0 errors. There was 1 contrast error found on the twitter page which I was unable to locate. I believe this to be caused by the media feed and not part of the fundamental site.Click on the below to see each screenshot:
1. <details><summary>Homepage</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/accessibilty/wave-index.png"></details>
2. <details><summary>Stats</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/accessibilty/wave-stats.png"></details>
3. <details><summary>Twitter</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/accessibilty/wave-twitter.png"></details>
4. <details><summary>Quiz</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/accessibilty/wave-quiz.png"></details>
5. <details><summary>Game</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/accessibilty/wave-game.png"></details>
6. <details><summary>Quiz-End</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/accessibilty/wave-quiz-end.png"></details>
7. <details><summary>404</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/accessibilty/wave-404.png"></details>

## Performance
[Google Lighthouse](https://developers.google.com/web/tools/lighthouse) was used to measure each pages performance. Click on the below to see each screenshot: 
1. <details><summary>Homepage</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/performance-validation/lighthouse-index.png"></details>
2. <details><summary>Stats</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/performance-validation/lighthouse-stats.png"></details>
3. <details><summary>Twitter</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/performance-validation/lighthouse-twitter.png"></details>
4. <details><summary>Quiz</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/performance-validation/lighthouse-quiz.png"></details>
5. <details><summary>Game</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/performance-validation/lighthouse-game.png"></details>
6. <details><summary>Quiz-End</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/performance-validation/lighthouse-quiz-end.png"></details>
7. <details><summary>404</summary><img src="https://github.com/charliewatson1504/CI_MS2_PLQuiz/blob/main/docs/validation/performance-validation/lighthouse-404.png"></details>



Credit
Fun trivia https://www.funtrivia.com/en/Sports/FA-Premier-League-1361.html - questions