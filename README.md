🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# Badges

[![Maintainability](https://api.codeclimate.com/v1/badges/fc736139272b3e317155/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/pt7-property-manager-be/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/fc736139272b3e317155/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/pt7-property-manager-be/test_coverage)

# API Documentation

#### 1️⃣ Backend delpoyed at Heroku (https://property-manager-be.herokuapp.com/) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework goes here

- We chose Node/Express to make our backend server. This was mainly because of the Lambda Labs standards and familiarity.
- For our database, we used postgresql and knex, for the same reasons.

## 2️⃣ Endpoints

#### User Routes

| Method | Endpoint             | Access Control  | Description                          |
| ------ | -------------------- | --------------- | ------------------------------------ |
| GET    | `/users`             | All users   | Returns logged in user info.    |
| GET    | `/users/:id`         | A user      | Returns user by ID.             |
| GET    | `/users/manager/:id` | A manager   | Returns manager by ID.          |
| PUT    | `/users/:userId`     | A user      | Edit users profile information. |
| DELETE | `/users/:userId`     | A user      | Delete your user profile.       |

#### Properties Routes

| Method | Endpoint          | Access Control | Description                    |
| ------ | ----------------- | -------------- | ----------------------------   |
| GET    | `/properties`     | All users      | Returns all properties.        |
| GET    | `/properties/:id` | All users      | Returns property by ID         |
| GET    | `/manager/:id`    | Manager        | Returns property by manager ID |
| POST   | `/properties`     | Manager        | Creates a property.            |
| PUT    | `/properties/:id` | Manager        | Modify an existing property.   |
| DELETE | `/properties/:id` | Manager        | Delete a property.             |

# Data Model

#### USERS

---

```
{
  "email": "email@email.com",
  "password": "pass",
  "phoneNumber": "3171543251",
  "firstName": "John",
  "lastName": "Doe",
  "role": "Renter",
  "img": "url.here"
}
```

#### 2️⃣ PROPERTIES

---

```
{
  "name": "House Name",
  "img": "url.here",
  "manager_id": 1
},
```

## 2️⃣ Actions

`addUser(user)` -> Creates a new user

`findAllUsers()` -> Returns all users

`findBy(filer)` -> Returns all users by filter (email, name, etc.)

`removeUser(id)` -> Removes a user by id

`findUserByid(id)` -> Gets user by id

`findManagerByid(id)` -> Gets Manager by id

`updateUser(changes, id)` -> Updates user profile
<br>
<br>
<br>
`add(property)` -> Adds property

`find()` -> Gets all properties

`findByid(id)` -> Gets property by id

`update(changes, id)` -> Updates property

`remove(id)` -> Deletes property by id

`findManagersProperties(id)` -> Gets all properties by manager id

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

- DB_ENV - set to "development" until ready for "production"
- JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;\*(-*=+)') for i in range(50)])

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/pt7-property-manager-fe) for details on the fronend of our project.
