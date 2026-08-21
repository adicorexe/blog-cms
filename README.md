# Blog CMS

A full-stack Content Management System built with **React, Node.js, Express.js, and MongoDB**.

Blog CMS provides a clean platform for creating, managing, editing, and publishing blog content. It includes authenticated user access, a rich-text editor, draft/published post management, and a drag-and-drop page builder.

---

## ✨ Features

- 🔐 User registration and JWT-based authentication
- 🔒 Protected create, edit, and delete operations
- 📝 Rich-text editing with React Quill
- 📄 Create and manage draft and published posts
- 🌐 Public published-post listing and detail pages
- 🧩 Drag-and-drop page builder using React DnD
- 🖼️ Support for heading, text, image, quote, and divider blocks
- 👤 React Context-based authentication state
- 🗄️ MongoDB database integration with Mongoose
- ⚡ Centralized API error handling
- 📱 Responsive dashboard, editor, and public pages
- 🛡️ Password hashing using bcrypt
- 🔌 RESTful API architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- React DnD
- React Quill
- CSS

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Tokens (JWT)
- bcrypt

### Development & Testing
- Git & GitHub
- Vercel
- Postman-compatible REST endpoints

---

## 📂 Project Structure

```text
blog-cms/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── services/
│       └── styles/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .env.example
├── .gitignore
└── README.md
