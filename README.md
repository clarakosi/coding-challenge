# Tim's Challenge

## Problem
Tim needs a web application to track his referral links. He also needs to display a different landing page for each link. 

## Solution
I used the Django Rest Framework to build the necessary RESTful APIs for links and to automatically increment the number of page visits when a landing page is loaded. To limit requests to the database I chose to create an update function that automatically incremented the number of visits when called. 

The front-end used React, Redux, and ReactStrap. The home page React component made majority of requests to the server by using Axios. The landing page component used the `url` to get the links `id` and `title`. The `title` was displayed on the page meanwhile the `id` was used to make a `PUT` request to the server to automatically update the number of clicks. Finally, ReactStrap was used to a create simple responsive designs.

## Technical Choices
- I chose to use Axios instead of `fetch` for cleaner syntax and to limit the use of `.json()`.
- The front-end files are purposely structured to show the components, actions, and reducer.
- In an effort to keep the model design simple, I decided to use the link's `id` in the landing page `url` as a way to lookup the link before incrementing the number of clicks.

## Trade-offs
- ReactStrap was used instead of raw CSS 
- Security wasn't implemented for this application. Normally, I would have included a verification system before allowing anyone to create, read, update or delete any of the links.
- Testing wasn't implemented for the React front-end nor the Django back-end
- WebSockets were not implemented. The addition would have given Tim live feedback on the number of times his links were clicked

## Heroku
- Application is live here: https://tims-ref-app.herokuapp.com/


