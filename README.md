<h1 style="align: center;">Task Manager API</h1>

## Introduction

_This is a backend application built with Node.js, Express, Mongoose, and MongoDB, designed to perform basic CRUD (Create, Read, Update, Delete) operations. The application allows users to create new tasks, delete a task, update a task, and fetch data from the database._

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

1. Clone the repository to your local machine by executing the following command :

```
git clone https://github.com/namanks2201/taskManager-backend.git
```

2. Run the following command to navigate to the project root directory :

```
cd taskManager-backend
```

3. Install the project dependencies by running the following command in your terminal:

```
npm install
```

4. Log on to [MongoDB](https://www.mongodb.com/) to create your database and get the link to connect to you database.
5. Create a `.env` file in the root directory of the project and set the following environment variables:

```
DB_URL=<ENTER_YOUR_URL_HERE>
```

6. Start the application by running the following command in your terminal:

```
npm start
```

## API Endpoints

---

_To fetch all tasks from the database._

```
GET : /api/v1/tasks
```

---

_To fetch an individual task from the database._

```
GET: api/v1/tasks/:id
```

---

_To create a new task._

```
POST : /api/v1/tasks
```

---

_To update a task._

```
PATCH :/api/v1/tasks/:id
```

---

_To remove a task from the database._

```
DELETE  /api/v1/tasks/:id
```

<br/>
<h1 style="align: center;"><i>Thank You...:)</i></h1>
