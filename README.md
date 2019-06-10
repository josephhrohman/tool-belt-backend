# Tool Belt
```
github:
https://github.com/josephhrohman/tool-belt-backend
https://github.com/josephhrohman/tool-belt-frontend

heroku:
https://toolbelt-backend.herokuapp.com/
https://toolbelt-frontend.herokuapp.com/

```

**The What**
<br/>
*Tool Belt is a web-based application that provides a space for builders, crafters, and inventors to share their
wisdom of tricks and solutions they've come across in different projects.*

**The Why**
<br/>
*For the beginner - it can be excessively daunting to start building something or think of a project they want to do 
because they aren't sure they have the tools of skills necessary to complete the project. 
<br/>
For the expert - sometimes you can get comfortable with your skills and tools and not realize that there are better or
more creative ways to do the same things.*

##Technical Stuffs Used
- Html, CSS, JS
- React with Hooks
- Nodejs MongoDb
- Backend Dependencies:
```
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.16.4",
    "express-session": "^1.16.1",
    "helmet": "^3.18.0",
    "mongoose": "^5.5.14",
    "nodemon": "^1.19.1"
```
- Frontend Dependencies:
```
    "axios": "^0.19.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.0",
    "react-scripts": "3.0.1"
```

# Installation Steps:
- Fork my github repo
- git clone the repo into your local machine
- npm i
- *Frontend* : run npm start
- *Backend* : run mongod
- *Backend* : run nodemon

# Tool-Belt-Backend

# API Endpoints

<!-- Users -->
## GET /api/v1/users

INDEX
Returns a list of all users.

## GET /api/v1/users/:id

SHOW
Returns user with the specified ID.

<!-- Projects -->
## GET /api/v1/projects

INDEX
Returns a list of all projects.

## GET /api/v1/projects/:id

SHOW
Returns projects for the specified ID.

## POST /api/v1/projects/

CREATE
Creates a new post, with the logged in user's ID as the author. Cannot be accessed without a valid logged in user.

**Data constraints**
```json
{
    "title": "[title of the project - string]",
    "img_url": "[main img reference for project - string]",
    "description": "[content of the project - string"
}
```

## DELETE /api/v1/projects/:id

DESTROY
Deletes the user with the specified ID. Requires a logged in user, and users cannot delete any posts except their own.

<!-- Tools -->
## GET /api/v1/tools

INDEX
Returns a list of all tools.

## GET /api/v1/tools/:id

SHOW
Returns tools for the specified ID.

## POST /api/v1/tools/

CREATE
Creates a new post, with the logged in user's ID as the author. Cannot be accessed without a valid logged in user.

**Data constraints**
```json
{
    "title": "[title of the tool - string]",
    "img_url": "[main img reference for tool - string]",
    "description": "[content of the tool - string"
}
```

## DELETE /api/v1/tools/:id

DESTROY
Deletes the user with the specified ID. Requires a logged in user, and users cannot delete any posts except their own.

<!-- Auth -->
## POST /api/v1/auth/signup

CREATE
Creates a new user. Users must input all fields, the password and password2 fields must match, and users cannot input an email if it already exists in the database.

**Data constraints**

```json
{
    "name": "[user name - string]",
    "email": "[user email - string]",
    "password": "[user's password - string]",
    "password2": "[user's password, input a second time for verification - string]"
}
```

## POST /api/v1/auth/login

CREATE
Logs a user in, generating a cookie for the user and creating a session for them. Requires a valid email, and corresponding password.

```json
{
    "email": "[user email - string]",
    "password": "[user's password - string]",
}
```

## POST /api/v1/auth/logout

DESTROY
Destroys the user's session, requiring a new login.


# Stretch API Endpoints:

<!-- Users -->
## PUT /api/v1/users/:id

**Data constraints**
```json
{
    "name": "[user name - string]",
    "email": "[user email - string]",
    "password": "[user's password - string]",
    "image_url": "[user img - string]"
}
```

## DELETE /api/v1/users/:id

DESTROY
Deletes the user with the specified ID.

<!-- Projects -->
## PUT /api/v1/projects/:id

Edits the post with the specified ID. Requires a valid logged in user, and users cannot edit any posts except their own.

**Data constraints**
```json
{
    "title": "[title of the post - string]",
    "author": "[ID of the logged in user - string]",
    "content": "[content of the post - string"
}
```
