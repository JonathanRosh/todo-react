# React Todo App with MongoDB Backend

A full-stack Todo application built with React, TypeScript, Express, and MongoDB. Features persistent storage, real-time updates, and a clean, modern UI.

## Features

- ✅ Add new tasks
- ✅ Delete tasks
- ✅ Toggle task completion
- ✅ Persistent storage with MongoDB
- ✅ Real-time updates
- ✅ Type-safe with TypeScript
- ✅ Responsive design

## Tech Stack

### Frontend

- React
- TypeScript
- CSS Modules

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript

## Project Structure

```
react-todo/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── types/         # TypeScript interfaces
│   │   └── App.tsx        # Main component
│   └── package.json
│
└── server/                 # Express backend
    ├── src/
    │   ├── models/        # MongoDB models
    │   ├── routes/        # API routes
    │   └── index.ts       # Server entry
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd react-todo
```

2. Install dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables

- Create `.env` file in the server directory:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
```

### Running the Application

1. Start the backend server

```bash
cd server
npm run dev
```

2. Start the frontend development server

```bash
cd client
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `DELETE /api/tasks/:id` - Delete a task
- `PATCH /api/tasks/:id` - Toggle task completion

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License.
