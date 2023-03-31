# Shared Lunch App

## Description

This full-stack app uses Node.js and Express.js to create a RESTful API, Handlebars.js as the templating engine, and MySQL and Sequelize ORM for the database. This app provides a solution for global food resource waste by allowing food banks and restaurants to easily communicate their needs and food surplus in order to schedule donations.

## Acceptance Criteria

GIVEN a CMS-style blog site

WHEN I visit the site for the first time

THEN I am presented with the homepage, which includes existing blog posts as well as navigation links in the nav bar 

WHEN I click on the homepage option

THEN I am taken to the homepage

WHEN I am not logged into the site

THEN I have the option to view all blog posts

WHEN I click on dashboard or log in

THEN I am prompted to either sign up or sign in

WHEN I choose to sign up

THEN I am prompted to create a username and password

WHEN I click on the sign-up button

THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in

THEN I am prompted to enter my username and password

WHEN I am signed in to the site

THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation

THEN I am taken to the homepage and presented with existing blog posts that include the the company name, donation description and contact information 

WHEN I click on the dashboard option in the navigation

THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post

THEN I am prompted to enter both a company name, donation information and contact information

WHEN I click on the button to create a new blog post

THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on the logout option in the navigation

THEN I am signed out of the site

## Usage

On the Shared Lunch website, users are welcomed with a fun, yet clean looking homepage. Without signing up, a user can get on the app and view all blog postings from organizations with leftover/extra food available to other organizations such as, food banks, homeless shelters, charities, etc. On each blog post the user will be able to see who is providing the food, a contact number and what and how much food is provided. An organization can sign up using their organization name, choosing a user name, and a password. The organization will then be logged in where they can use the dashboard to view all of their own posts and add new blog posts for food availabilities. The user can feel safe and secure knowing that this website is using security measures like authentication, authorization, and hashed passwords when a user signs up, logs in and while using the website.


 ## Future Development
 
 There are several potential future developments that could be implemented in our application to enhance its functionality and user experience. Three possibilities that we would like to consider are as follows:

Profile picture: One feature that we could introduce is the ability for users to add a profile picture to their account. This would allow users to personalize their experience within the application and make it easier for them to identify their account when using the platform.

Forgot password option: Another important feature that we could implement is a "forgot password" option. This would provide users with a simple and secure way to reset their password if they forget it. We would ensure that the process is user-friendly and includes appropriate security measures to protect users' data.

Maps: Finally, we could consider integrating maps into the application. This would enable users to see the closest locations to their current position and help them to navigate to those locations more easily. We would use reliable mapping software and ensure that the feature is user-friendly and accessible to all users.

By implementing these and other potential developments, we can improve the functionality and user experience of our application and continue to provide our users with a valuable tool for their needs.


## Visuals

### Homepage (with example seeds):

![Screenshot 2023-03-30 190829](https://user-images.githubusercontent.com/116929120/228991302-84c956e8-7c88-4ccc-8a22-9243df592bda.png)


### Login / Signup toggle:
![Login](https://user-images.githubusercontent.com/116929120/228991733-990aeeba-8779-4eaf-a220-652221d70774.png)
![SignUp](https://user-images.githubusercontent.com/116929120/228991764-22a197bc-ec8f-4ebf-94a3-2cf3635852da.png)

### Dashboard:
![Dashboard](https://user-images.githubusercontent.com/116929120/228991815-d198bd48-0708-4058-8ea8-c795002ca73e.png)


### Adding a blog:
![Screenshot 2023-03-30 191614](https://user-images.githubusercontent.com/116929120/228992069-6a671294-06ff-4b56-8e7c-e13a3c8d0a42.png)


## Licensing

N/A - this was a group project for Vanderbilt Full-Stack Coding Bootcamp

## Heroku deployed URL
https://shared-lunch.herokuapp.com/

