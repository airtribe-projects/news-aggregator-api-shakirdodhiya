# News API

A User authentication Rest API build using **Node.js**, **Express**, **bcrypt**, **jwt** and **axios**

## Setup Instructions

### 1. Clone Repository

### 2. Go to directory and Install dependencies
cd news-aggregator-api-shakirdodhiya
npm install

### 3. Start server

node app.js

This command will start server on http://localhost:3000

## Features

- Store user data in db
- Generate jwt token at the time of login
- Verify token for other requests

## API Endpoints

### 1. Sign Up

Path : /users/signup
Method : POST
Description : This API creates an user

### 2. Login

Path : /users/login
Method : POST
Description : This API authenticates the user and returns token

### 3. Get Preferences

Path : /users/preferences
Method : GET
Description : This API returns user preferences, authenticated via a token

### 4. Update Preferences

Path : /users/preferences
Method : PUT
Description : This API updates user preferences, authenticated via a token

### 5. Get News

Path : /news
Method : GET
Description : This API returns news based on user preferences, authenticated via a token

## How to test

Open postman and enter "http://localhost:3000" with respective methods and paths

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20126600&assignment_repo_type=AssignmentRepo)
