# 📖 Cityvent

> This is an app built using React on the frontend, and AWS Lambda on the backend. It displays a list of events, which is fetching the events from Google Calendar API, that can be filtered by city or number of events.

## Objective
Create a serverless, progressive web application (PWA) in React following the test-driven development (TDD) approach, integrating with Google Calendar API to fetch and showcase upcoming events.
<!-- **Link to myFlix App:** https://... -->

## 🛠 Built With
<!-- 
### Tech Stack
MERN
<details>
  <summary>Client</summary>
  <ul>
    <li>MongoDB</li>
    <li>Express</li>
    <li>React</li>
    <li>Node.js</li>
    <li>Parcel (build tool)</li>
    <li>JSX</li>
    <li>Vanilla JS</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</details> -->

<!-- <details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://pokeapi.co/">MongoDB Atlas Database</a></li>
  </ul>
</details>

<details>
  <summary>Libraries</summary>
  <ul>
    <li><a href="https://"></a></li> 
    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
  </ul>
</details> -->

<!-- <details>
  <summary></summary>
  <ul>
    <li><a href="https://"></a></li> 
    <li><a href=""></a></li>
  </ul>
</details> -->

 <!-- Features -->

<details>
  <summary>Client</summary>
  <ul>
    <li>React</li>
    <li>Node.js</li>
    <li>Parcel (build tool)</li>
    <li>JSX</li>
    <li>Vanilla JS</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</details>


### Key Features 
 
- **Filter Events by City**
- **Toggle Event Information**
- **Dictate Event Quantity**
- **Offline Functionality**
- **App Shortcut Addition to Home**
- **Visual Charts of Event Statistics**

<br>



## Features and User Stories
<details>
<summary>FEATURE 1: FILTER EVENTS BY CITY</summary>

As a user, I should be able to filter events by city. So that I can see a list of events taking place in that city.

- **Scenario 1:** User opens the app and has searched a city.

- **Given** the main page with search option has been opened, **when** the user entered a city, **then** they should be shown upcoming events for that city.

- **Scenario 2:** User opens the app and hasn't searched a city.

- **Given** the main page with search option has been opened, **when** the user opens the app, **then** they should be shown a list of all events for all the cities available.

- **Scenario 3:** User can select a city from the suggested list.

- **Given** user was typing "Berlin" in the city textbox _AND_ the list of suggested cities is showing, **when** the user selects a city (e.g., "Berlin, Germany") from the list, **then** their city should be changed to that city (i.e., "Berlin, Germany") _AND_ the user should receive a list of upcoming events in that city.
  </details>
  
  <details>
  
<summary>FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS</summary>
As a user I should be able to show or hide event details, after I have selected a city I wanted to look up the events for.

- **Scenario 1:** An event element is collapsed by default
  - **Given** the user first opens the app **when** the user recieves the full list of events (specific for the city or all events), **then** all events will colapse by default.
- **Scenario 2:** User can expand an event to see its details
  - **Given** the user gets a list of events, **when** a user selects an event's details, **then** the details will show up for that choosen event.
- **Scenario 3:** User can collapse an event to hide its details
  - **Given** the user sees the details of an event, **when** the user presses a button to hide event's details, **then** the details of that even will be hidden.
  </details>
  
  <details>
  <summary>FEATURE 3: SPECIFY NUMBER OF EVENTS</summary>
  
As a user, I should be able to specify the number of displayed events, after I have selected the number of displayed events.

- **Scenario 1:** When user hasn't specified a number, 32 is the default number.
  - **Given** the user hasn't specified or filtered the number of events, **when** the user sees the list of events **then** the default number of displayed events will be 32.
- **Scenario 2:** User can change the number of events they want to see.
  - **Given** the user has events displayed, **when** the user chooses to change the number of events displayed, **then** the number of events displayed will update to the number the user selected.
  </details>

  <details>
  <summary>FEATURE 4: USE THE APP WHEN OFFLINE</summary>
  
As a user, I should be able to get events information when offline, that was fetched while having internet connection.

- **Scenario 1:** Show cached data when there's no internet connection.
  - **Given** the user has no internet connection, **when** the user is accessing the app, **then** cached data, stored inside the app, will be provided to the user.
- **Scenario 2:** Show error when user changes the settings (city, time range).
  - **Given** the user has no internet connection, **when** the user is trying to access new event information (change the city, etc.), **then** the app will show an error.
  </details>

  <details>
  <summary>FEATURE 5: ADD AN APP SHORTCUT TO THE HOME SCREEN</summary>

As a user I should be able to add a shortcut of the app to the home screen, so I can access the app quicker.

- **Scenario 1:** User can install the meet app as a shortcut on their device home screen.
  - **Given** the user wants to install the app, **when** the user selects to install the app as a shortcut, **then** a shortcut is created on users homescreen.
  </details>
  
<details>
  <summary>FEATURE 6: DISPLAY CHARTS VISUALIZING EVENT DETAILS</summary> 

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

- **Scenario 1:** Show a chart with the number of upcoming events in each city.
  - **Given** the user is in the events detail page, **when** the user clicks the button to see a chart of those events in all the cities as a comparison, **then** a chart with the number of upcoming events for every city, will be shown to the user.
  - </details>

**Serverless Functions**

>The Meet App can use serverless functions for event notifications, real-time data processing, user authentication, event recommendations and scalability. By leveraging serverless technology, the app can efficiently handle backend processes, provide personalized experiences, and scale according to user demand.


<!-- ![](./img/....png)
<br>
![](./img/....png) -->

<!-- ### Responsive Layout & Accessibility -->

<!-- The app was tested to suit a wide spectrum of devices and with accessibility in mind.
<!-- <br>
Components incuding the modal and navigation bar are accessible to screen readers.
<br> -->
<!-- For a clean and usable design Bootstrap was implemented to the app. Thanks to this framework the layout of the library is set with optimal responsivity for a pleasant experience regardless of screen size. -->

## Credits

<!-- [Flavicon](https://) was used for logos  -->

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- GETTING STARTED -->

<!-- ## 💻 Getting Started 

- npm init --yes
<br>
- npm install -g parcel
<br>
- npm install -save react react-dom
<br>
- create a 'src' folder in project directory with three files: 'index.jsx', 'index.scss', 'index.html'
<br>
- run command 'parcel src/index.html' in terminal to prompt parcel build process -->

<!-- ## 👥 Author <a name="authors"></a> -->

**Laure Lincker**

- GitHub: [@LoulouLinck](https://github.com/LoulouLinck)

This was a solo project guided by tutors and mentors from <a href="https://careerfoundry.com/en/courses/become-a-web-developer/">CareerFoundry.</a>
 
