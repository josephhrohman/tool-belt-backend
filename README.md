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

# Frontend Installation
- Fork my github repo
- Git clone the repo into your local machine
- Npm i
- Run npm start

# Backend Installation
- Fork my github repo
- Git clone the repo into your local machine
- Npm i
- Run mongod
- *Second-Window* Run nodemon

# Wire Frames
![Wire Frames](imgs/WireFrames.png)

# ERD
![ERD](imgs/ERD.png)

# User Stories:
**User 1**<br/>
*I am new to crafting.  I want to see a website / community where it isn't assumed I know how to build things or*
*that I have the tools necessary to build things*

**User 2**<br/>
*I am a moderate crafter, I have some tools, but I don't know what tool I should get next.*

**User 3**<br/>
*I've been building, crafting, inventing, all my life and I've learned so many ways to do the same thing with different tools.*
*At this point, I believe I could help other's start building and be successful - every project can be done differently.*

# Unresolved Problems:
- Heroku build is not currently working with CORS
- Local build forces you to restart nodemon once signed in, in order to post to mongoDB
- user_id object not associating to projects / tools

# Future Features:
- **'Next Best Tool'** this will give you a list of the most-used tool you do not currently have.
- **'Alternative Tool'** this will give you a full workup of an alternative tool you can use to accomplish the same 
process (eg: saw vs chisel to cut wood) and it's effectiveness in time, qualtiy, ease of use, etc. 

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
