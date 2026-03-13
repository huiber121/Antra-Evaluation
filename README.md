# Todo MVC Application

Overview

This project is a Todo List web application built using Vanilla JavaScript, HTML, and CSS following the Model-View-Controller (MVC) architectural pattern.

The application interacts with the DummyJSON Todos API to perform CRUD operations and displays tasks in two separate lists: Pending Tasks and Completed Tasks.

Since the DummyJSON API does not persist changes on the server, the application updates the data locally after receiving successful API responses.

Features
	•	Add a new todo item
	•	Edit an existing todo
	•	Delete a todo
	•	Mark a todo as completed
	•	Move a completed todo back to pending
	•	Two task lists:
	•	Pending Tasks
	•	Completed Tasks
	•	Inline UI updates after API responses
	•	Event Delegation for efficient event handling

⸻

Technologies Used
	•	HTML
	•	CSS
	•	Vanilla JavaScript
	•	MVC Architecture
	•	DummyJSON REST API

⸻

API Endpoints Used

The application uses the following endpoints from the DummyJSON Todos API:

GET all todos

https://dummyjson.com/todos

Add a new todo

https://dummyjson.com/todos/add

Update a todo

https://dummyjson.com/todos/:id

Delete a todo

https://dummyjson.com/todos/:id


Model

Handles:
	•	API requests
	•	Data storage
	•	Updating local state

View

Responsible for:
	•	Rendering todos
	•	Updating the DOM

Controller

Handles:
	•	User interactions
	•	Connecting Model and View

⸻

# How the Application Works
	1.	When the page loads, the application sends a GET request to retrieve todos.
	2.	Todos are separated into Pending and Completed lists based on the completed property.
	3.	Users can:
	•	Add new todos
	•	Edit todo text
	•	Delete todos
	•	Toggle todo completion status
	4.	Each action sends a request to the API and updates the local data model.

⸻

# Event Delegation

The application uses event delegation to handle button actions efficiently.
Instead of attaching listeners to each button individually, events are handled by the list container.

⸻

# How to Run the Project
	1.	Clone the repository
    git clone https://github.com/YOUR_USERNAME/todo-mvc-app.git

    2.  Navigate to the project folder
    cd todo-mvc-app

    3. Open index.html in your browser.

# Notes

DummyJSON is a mock API, meaning it does not persist changes on the server.
The application updates the local data model after receiving successful API responses to simulate real CRUD behavior.

# Author

Created as part of a JavaScript MVC practice project.

