# TECH used in my Spotify Clone Personal Project build

What's in this build
1) User authentication
2) Spotify API
3) Pull data from Spotify to show playlists
3) Responsive Design
4) Material UI
5) Host on Firebase
5) React Context API (Like REDUX)
6) Modern Tech
7) React Hooks Functional (Hooks, State)
8) Entire React Tech Stack

## Available Scripts

In the project directory, you can run:

1) npm install
2) npm start

# My personal notes in developing this Spotify clone project:

npx create-react-app filename


BEM - It's a way of naming the classes in react

/* remove the default underline link when i add the link to it */
text-decoration: none;

Data Layer - We have app (Login component and player component - sidebar, Header)

Whenever we see use reducer, use context, they are all react hooks

Revisit reducer.js

/* use up 80% of the space available  */
    flex: 0.8;

/* 0, 0, 0 is just the black and the black is saying go
from transparent on the of the color all the way to opaque black   */
background: linear-gradient(transparent, rgba(0, 0, 0 , 1));

transition: 200ms color ease-in;

/* This is basically saying hide the scroll bar but keep the functionality  */
body::-webkit-scrollbar{
  display: none;
}

/* whenever i hover over the icon, i am giving a 200 millisec delay with that transform */
transition: transform 0.2s ease-in-out;
    
/* scale it to 1.2 and it is important because it's material UI so it's overwriting  */
/* scale it to 120% */
transform: scale(1.2) !important;

// As the screen grows, i am gonna space the functionality evenly
justify-content: space-between; 


/* If the screen gets bigger, it will fit the page nicely,
   If it gets smaller, it wouldn't look as ugly as before  */
flex: 0.5;

/* This will push the text to the bottom */
align-items: flex-end;

/* Fix the overflow at the bottom of page */
overflow-y: overlay;

/* Keeps the functionality and get rid of the scrollbar */
.body::-webkit-scrollbar {
    display: none;
}