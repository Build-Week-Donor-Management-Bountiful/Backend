# Backend

## Utilizing This Backend

The link you will need = https://donor-backend-mw.herokuapp.com/

For all of your axios requests, this link will be a part of it.

You will need to append the following endpoints to this link to properly utilize the system.

A user that will always be present:

{
    "username": "Mack",
    "password": "pass"
}

You shouldn't need quotes, but that is the shape of the object that will be sent up to the database. 

## Authentication

### Registering a User

Link = https://donor-backend-mw.herokuapp.com/api/auth/register/ 

You will need to send an object that looks like this: 
{
    "username": Your username here,
    "password": Your password here
}

The database will return with the following information inside response.data: 
{
    "message": "User created!",
    "user": {
        "id": id of the user you created, set this to localStorage under the key "id",
        "username": The username of the user you created
    },
    "token": The token generated by registering a user (you will also receive a token by logging in), set this to localStorage under the key "token".
}

### Logging in a User

Link = https://donor-backend-mw.herokuapp.com/api/auth/login/

You will need to send an object that looks like this: 
{
    "username": Your username here,
    "password": Your password here
}

You will receive an object that looks like this:
{
    "message": Welcome (your username)!
    "id": id of the user logged in, set this to localStorage under the key "id"
    "token": set this to localStorage under the key "token"
}

QUESTION: Do I need to log in after registering?
ANSWER: No. With some code and setting the token in localStorage, your user can automatically be authenticated directly after registering. You would only log in if you want to test that user. 

## Reading, Modifying and Removing Users

### Seeing all users

Requirements: The token from localStorage set to the header Authorization

Link: https://donor-backend-mw.herokuapp.com/api/users/

This will return an array of all users. It will look like this:
[
    {
        "id": id of user,
        "username": username of user
    },
    {
        "id": id of user,
        "username": username of user
    }
]

### Seeing information just about the user

Requirements: The token from localStorage set to the header Authorization

Link: https://donor-backend-mw.herokuapp.com/api/users/user

This will return an object of the user that is logged in:
{
    "id":id of user logged in,
    "username":username of user logged in
}

### Another method to see information just about the user

Requirements: The token from localStorage set to the header Authorization

Link: https://donor-backend-mw.herokuapp.com/api/users/:id

ID (in :id) needs to be the id of a user in the database.
example: https://donor-backend-mw.herokuapp.com/api/users/1 (gets the id of the first user in the database)

This will return an object of the user that is logged in:
{
    "id":id of user logged in,
    "username":username of user logged in
}
