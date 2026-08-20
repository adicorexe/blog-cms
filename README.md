# Blog CMS

A full-stack content management system built with React, Node.js, Express and MongoDB. The application provides authenticated blog management, a rich-text editor and a drag-and-drop page builder.

## Features

- User registration and JWT login
- Password hashing with bcrypt
- Protected create, edit and delete routes
- Public published-post listing and detail pages
- Draft and published post states
- React Context authentication state
- Quill rich-text editor
- React-DnD page builder with heading, text, image, quote and divider blocks
- Responsive dashboard, editor and public pages
- Centralized API error handling
- MongoDB validation with Mongoose

## Stack

- Frontend: React.js, React Router, React-DnD, React Quill
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JSON Web Tokens and bcrypt
- API testing: Postman-compatible REST endpoints

## Project structure

```text
blog-cms/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── services/
│       └── styles/
└── server/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

## Setup

### 1. Requirements

Install Node.js 18+ and MongoDB. MongoDB can run locally or through a hosted MongoDB deployment.

### 2. Backend

```bash
cd server
npm install
```

Copy `.env.example` to `.env` and set your MongoDB connection string and JWT secret.

```bash
npm run dev
```

The API runs on `http://localhost:5000` by default.

### 3. Frontend

Open another terminal:

```bash
cd client
npm install
npm start
```

The React application opens on `http://localhost:3000`.

If the API uses a different address, copy `client/.env.example` to `client/.env` and update `REACT_APP_API_URL`.

## API routes

| Method | Route | Access |
|---|---|---|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |
| GET | `/api/posts` | Public |
| GET | `/api/posts/:id` | Public for published posts |
| GET | `/api/posts/mine` | Authenticated |
| POST | `/api/posts` | Authenticated |
| PUT | `/api/posts/:id` | Author only |
| DELETE | `/api/posts/:id` | Author only |
| GET | `/api/health` | Public |

## Screenshots

Add project screenshots to the `screenshots/` folder and link them here before publishing the repository.

## Live demo

Add the deployed application URL here after deployment.

## Notes

Do not commit `.env` files, database credentials, JWT secrets or `node_modules`.
