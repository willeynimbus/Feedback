# Feedback App

This project is a simple feedback application built with React and TypeScript. It allows users to submit feedback and view a list of all feedback entries. The application uses a Node.js backend with Express to handle feedback entries, and it communicates with the backend using Axios. Web Workers are used to fetch data asynchronously to keep the main UI thread responsive.

## Project Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/willeynimbus/Feedback.git
   cd feedback-app
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   # Install dependencies for the backend
   cd feedback-backend
   npm install

   # Install dependencies for the frontend
   cd ../feedback-app
   npm install
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd feedback-backend
   npm start
   ```

   The backend server will run at `http://localhost:3000`.

2. Start the frontend React application:

   ```bash
   cd ../feedback-app
   npm start
   ```

   The React application will run at `http://localhost:3000`.

### Approach

#### Backend

The backend server is built using Node.js and Express with TypeScript. It provides two main endpoints:

- **GET /api/feedback**: Retrieve all feedback entries.
- **POST /api/feedback**: Submit new feedback. The request body should contain `{ name: string, feedback: string }`.

In-memory storage is used to keep the feedback entries, which makes it easy to store and retrieve feedback during development.

#### Frontend

The frontend is built with React and TypeScript. It has two main components:

- **FeedbackForm**: A form to submit new feedback.
- **FeedbackList**: A list to display all feedback entries.

Axios is used for HTTP requests to communicate with the backend. Web Workers are utilized to fetch data from the backend asynchronously, ensuring the main UI thread remains responsive.

#### Web Worker

The Web Worker is implemented to handle data fetching in a separate thread. This prevents the main UI thread from being blocked, improving the responsiveness of the application. The worker sends a request to the backend, receives the response, and posts the data back to the main thread.

### Additional Notes

- **Backend Server**: The backend server is built using Express and TypeScript. It exposes endpoints to retrieve all feedback entries and submit new feedback.
- **Frontend Application**: The frontend application is built using React and TypeScript. It uses Axios to communicate with the backend and Web Workers to fetch data asynchronously.
- **Web Worker**: The Web Worker is used to fetch feedback data from the backend in a separate thread, keeping the main UI thread responsive.

### Endpoints

- **GET /api/feedback**: Retrieve all feedback entries.
- **POST /api/feedback**: Submit new feedback. The request body should contain `{ name: string, feedback: string }`.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### Screenshots

- ![alt text](<Screenshot 2024-06-12 182827.png>)
- ![alt text](<Screenshot 2024-06-12 182835.png>)
