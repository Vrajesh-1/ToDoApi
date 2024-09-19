# ToDo Task List Application

## Overview

This project is a ToDo Task List Application built with .NET 8 Web API for the backend and a responsive frontend using HTML, CSS, and JavaScript. It features CRUD (Create, Read, Update, Delete) operations to manage tasks, utilizing an in-memory database for simplicity.

## Objectives

- **Backend API**: Develop and implement a RESTful API for ToDo list management using .NET 8, including endpoint testing.
- **Frontend**: Create a responsive user interface to interact with the API and manage ToDo tasks seamlessly.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Frontend Interaction](#frontend-interaction)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Backend**: .NET 8, ASP.NET Core Web API
- **Frontend**: HTML, CSS, JavaScript
- **Database**: In-Memory Database (for testing purposes)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ravichanga101/ToDoAPI-InMemoryDB-Demo.git
   cd ToDoAPI-InMemoryDB-Demo
   ```

2. **Backend Setup**:
   - Navigate to the `Backend` directory.
   - Restore the dependencies:
     ```bash
     dotnet restore
     ```
   - Run the application:
     ```bash
     dotnet run
     ```

3. **Frontend Setup**:
   - Open the `index.html` file in your browser or set up a local server to serve the frontend files.

## Usage

Once the backend is running, you can interact with the ToDo Task List application through the frontend UI or via API requests.

## API Endpoints

| Method | Endpoint          | Description                      |
|--------|-------------------|----------------------------------|
| GET    | `/api/todos`      | Retrieve all ToDo tasks         |
| GET    | `/api/todos/{id}` | Retrieve a specific ToDo task   |
| POST   | `/api/todos`      | Create a new ToDo task          |
| PUT    | `/api/todos/{id}` | Update an existing ToDo task    |
| DELETE | `/api/todos/{id}` | Delete a ToDo task              |

## Testing the API

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Frontend Interaction

The frontend allows users to:
- View all ToDo tasks
- Add new tasks
- Edit existing tasks
- Delete tasks

The frontend communicates with the backend API using JavaScript `fetch` calls to perform the necessary CRUD operations.
