> [!WARNING]
> I implemented this for an interview once ages ago, but now it's unmaintained.

# todo-backend-express-knex

This is an implementation of [Todo-Backend](http://todobackend.com/) using Node and Express for the server, Knex for database migrations and query building, and some ES6+ features such as async/await. By default, this project configures Knex to save to PostgreSQL.

A [production instance](https://todo-backend-express-knex.herokuapp.com/) is running on Heroku.

Bonus features include a simple frontend boostrapped with create-react-app and the todo-backend specification tests transcribed for Jest--a quick full-stack starter pack.

## Installation

1. Clone this repository.

    `git clone git@github.com:tonycheang/todo-backend-express-knex.git`

2. Install dependencies.

    `yarn install`

3. Create a postgres database for the project.

    ```Bash
    % psql postgres -U your_username_here
    postgres=> CREATE DATABASE name_of_db;
    postgres=> GRANT ALL PRIVILEGES ON DATABASE name_of_db TO your_username_here;
    postgres=> \q
    ```

    > You could change the default database, but Knex's .returning() method will only work for PostgreSQL, MSSQL, and Oracle databases. Modifications will be needed for other databases to meet the todo-backend spec.

4. Add Postgres credentials into server/.env to allow Knex to connect to the database.
5. Install Knex globally.

    `npm install knex -g`

6. Set up the database using Knex migrations.

    `cd server && knex migrate:latest`

7. Start the server on [http://localhost:5000](http://localhost:5000).

    `yarn server`

8. Test it against the spec at [Todo-Backend Specs](http://todobackend.com/specs/index.html?http://localhost:5000/)

## Bonus Features

- Run tests locally using either.

    `yarn test`

    `yarn test:watch`

    >The second command requires watchman  
    >`brew install watchman`

- Install create-react-app frontend starting at root directory:

    `cd client && yarn install`

- Run backend and frontend simultaneously from root directory.

    `yarn dev`

    > Note: The proxied connection will only work locally.
    > You'll need the server to serve the frontend build if
    > you want to host the entire project somewhere.

- Create todo app structure
 We will need users, tasks, categories, subtasks, comments and tags

 Create table for users
    id
    username
    email
    password
    created_at
    - options to remove or delete a user
    active: Boolean
    status: ENUMS ("active","inactive", "deleted")
 Create table for tasks
    id
    title
    order
    completed
    created_at
    updated_at
    user_id
 Create table for categories
    id
    name
    user_id
 Create table for subtasks
    id
    task_id
    title
    completed
 Create table for comments
    id
    task_id
    comment
    created_at
 Create table for tags 
    id
    task_id
    tag