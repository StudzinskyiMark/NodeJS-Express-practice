# Node.js Complete Learning Path

A comprehensive learning journey from Node.js fundamentals to building full-stack applications with authentication and databases.

## 📚 Course Overview

This repository contains a complete Node.js curriculum with practical examples and projects. Progress through multiple chapters, each building upon the previous knowledge to create modern backend applications.

### 🎯 Learning Path

**Total Chapters:** 3  
**Estimated Duration:** Progressive learning path  
**Skill Level:** Beginner to Intermediate

## 📖 Chapters Overview

### [Chapter 1: Node.js Fundamentals](./chapter_1/README.md)

Learn the core concepts of Node.js and introduction to Express.js framework.

**What you'll learn:**

- Node.js module system and globals
- File system operations (fs module)
- Working with streams
- Creating HTTP servers
- Express.js basics and routing
- Static file serving
- HTTP methods and status codes

**Sub-chapters:**

- **[Chapter 1.1: Core Modules & Fundamentals](./chapter_1/chapter_1.1/README.md)** - Module system, file operations, streams
- **[Chapter 1.2: HTTP Server & Express Basics](./chapter_1/chapter_1.2/README.md)** - Building servers and routing

**Technology Stack:**

- Node.js (CommonJS)
- Express.js 5.2.1
- Lodash, EJS, Nodemon

**Key Files:**

- `chapter_1.1/`: Basic Node.js concepts
- `chapter_1.2/`: Express server setup

---

### [Chapter 2: Express API Development](./chapter_2/README.md)

Build RESTful APIs with Express.js and handle CRUD operations.

**What you'll learn:**

- RESTful API design principles
- HTTP methods (GET, POST, DELETE)
- JSON data handling
- Express middleware
- API endpoint creation
- In-memory data management
- API testing with REST clients

**Technology Stack:**

- Express.js 5.2.1
- Node.js (CommonJS)
- Nodemon (development)

**Key Features:**

- Multiple HTTP method handling
- JSON request/response processing
- API testing file (test.rest)
- Middleware pipeline
- Resource-based routing

**Key Files:**

- `server.js`: API server implementation
- `test.rest`: API test cases

---

### [Chapter 3: Full-Stack Todo Application](./chapter_3/README.md)

Build a complete full-stack application with user authentication, database, and todo management.

**What you'll learn:**

- JWT (JSON Web Tokens) authentication
- Password hashing with Bcrypt
- SQLite database integration
- User registration and login
- Protected API routes
- Middleware for authentication
- Full CRUD operations
- Frontend integration with backend

**Technology Stack:**

- Node.js (ES Modules)
- Express.js 5.2.1
- SQLite (experimental)
- JWT (jsonwebtoken)
- Bcrypt (password hashing)
- HTML, CSS (Frontend)

**Architecture:**

- Backend: Express.js REST API
- Database: SQLite
- Authentication: JWT tokens
- Security: Password hashing with Bcrypt

**Key Features:**

- User authentication system
- Secure password storage
- Token-based authorization
- Todo CRUD operations
- Middleware-based access control
- Responsive frontend

**Key Files:**

- `src/server.js`: Main server
- `src/db.js`: Database configuration
- `src/middleware/authMiddleware.js`: Authentication middleware
- `src/routes/authRouts.js`: Auth endpoints
- `src/routes/todoRouts.js`: Todo endpoints
- `public/`: Frontend files

---

## 🛠️ Prerequisites

Before starting this course, you should have:

- **Node.js**: Latest LTS version (with experimental modules support for Chapter 3)
- **npm**: Comes with Node.js
- **Code Editor**: VS Code or any preferred editor
- **Basic JavaScript**: Understanding of ES6+ syntax, promises, async/await
- **REST Client**: Postman, Thunder Client, or REST Client extension

## 🚀 Quick Start

### Installation & Setup

1. **Clone or download the repository:**

```bash
git clone <repository-url>
cd NODE.JS
```

2. **Navigate to desired chapter:**

```bash
cd chapter_1\chapter_1.1
# or
cd chapter_1\chapter_1.2
# or
cd chapter_2
# or
cd chapter_3
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the project:**

```bash
npm run dev
# or specific command based on chapter
npm start
```

## 📊 Course Progression

```
Node.js Fundamentals
    ├─ Module System
    ├─ File Operations
    ├─ Streams
    └─ HTTP Basics
            ↓
    Express.js Framework
            ↓
    RESTful API Development
    ├─ HTTP Methods
    ├─ Routing
    ├─ Middleware
    └─ JSON Data
            ↓
    Full-Stack Application
    ├─ Authentication (JWT)
    ├─ Database (SQLite)
    ├─ Authorization
    └─ CRUD Operations
```

## 📝 Technology Stack Summary

| Technology | Version | Purpose          | Usage              |
| ---------- | ------- | ---------------- | ------------------ |
| Node.js    | Latest  | Runtime          | All chapters       |
| Express.js | 5.2.1   | Web framework    | Chapters 1.2, 2, 3 |
| SQLite     | Native  | Database         | Chapter 3          |
| JWT        | 9.0.3   | Authentication   | Chapter 3          |
| Bcrypt     | 6.0.0   | Password hashing | Chapter 3          |
| EJS        | 4.0.1   | Template engine  | Chapter 1.2        |
| Lodash     | 4.17.21 | Utility library  | Chapter 1.2        |
| Nodemon    | 3.1.11  | Development tool | All chapters       |

## 📋 Chapter Dependencies

```
Chapter 1 (Fundamentals)
    └─ No dependencies

Chapter 2 (API Development)
    └─ Requires: Chapter 1 completion

Chapter 3 (Full-Stack)
    └─ Requires: Chapter 1 & 2 completion
```

## 🔗 Quick Navigation

| Chapter              | Folder                     | Description                 | Status |
| -------------------- | -------------------------- | --------------------------- | ------ |
| 1 - Fundamentals     | `./chapter_1/`             | Node.js core concepts       | ✅     |
| 1.1 - Core Modules   | `./chapter_1/chapter_1.1/` | Module system, fs, streams  | ✅     |
| 1.2 - HTTP & Express | `./chapter_1/chapter_1.2/` | HTTP server, Express basics | ✅     |
| 2 - API Development  | `./chapter_2/`             | RESTful API building        | ✅     |
| 3 - Full-Stack App   | `./chapter_3/`             | Todo app with auth & DB     | ✅     |

## 📚 Resources

### Official Documentation

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MDN Web Docs - Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)

### Concepts Covered

- CommonJS vs ES Modules
- Asynchronous JavaScript
- RESTful API principles
- JWT authentication
- Database design
- Middleware patterns
- Error handling

## 🎓 Learning Tips

1. **Start from Chapter 1**: Don't skip fundamentals
2. **Practice**: Try to build projects on your own after each chapter
3. **Test APIs**: Use test files and REST clients to verify endpoints
4. **Experiment**: Modify examples and see how they behave
5. **Review**: Go back to previous chapters if you need clarification

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report issues
- Suggest improvements
- Add more examples
- Improve documentation

## 📄 License

ISC

## 👤 Author

Mark Studzinskyi

## 📞 Support

For questions or issues:

1. Check the README files in individual chapters
2. Review code comments
3. Test with provided test files
4. Refer to official documentation

## 🎉 What's Next?

After completing all chapters:

1. **Build Your Own Project**: Create a full-stack application combining all learned concepts
2. **Advanced Topics**:
   - Database optimization
   - Deployment strategies (Heroku, AWS, Vercel)
   - Docker containerization
   - Testing frameworks (Jest, Mocha)
   - API documentation (Swagger/OpenAPI)
3. **Real-World Practices**:
   - CI/CD pipelines
   - Environment management
   - Security best practices
   - Performance optimization

---

Start with [Chapter 1](./chapter_1/README.md) and progress through each chapter systematically for the best learning experience.