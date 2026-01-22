# Chapter 1.2 - HTTP Server & Express.js Basics

Build your first web server using Node.js HTTP module and introduce Express.js framework basics.

## 📋 Project Description

This module covers creating HTTP servers from scratch with Node.js and introduces the Express.js framework for simplifying web development. Learn about routing, static file serving, HTTP methods, and status codes.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Template Engine**: EJS 4.0.1
- **Utilities**: Lodash 4.17.21
- **Development**: Nodemon 3.1.11
- **Module System**: CommonJS

## 📦 Dependencies

```json
{
  "ejs": "^4.0.1",
  "express": "^5.2.1",
  "lodash": "^4.17.21",
  "nodemon": "^3.1.11"
}
```

## 📁 Project Structure

```
chapter_1.2/
├── app.js                 # Express application
├── server.js              # HTTP server with routing
├── package.json
├── views/
│   ├── 404.html          # Error page
│   ├── about.html        # About page
│   └── index.html        # Home page
└── README.md
```

## 🎯 Learning Objectives

- Create HTTP servers with Node.js
- Understand Express.js framework basics
- Implement URL routing
- Serve static HTML files
- Handle different HTTP status codes
- Implement redirects
- Understand middleware basics

## 📚 Key Concepts

### HTTP Server
- Creating server instances
- Handling requests and responses
- Setting response headers
- Managing status codes (200, 301, 404)
- File serving

### Express.js
- Application initialization
- Route definitions (GET, POST, etc.)
- Middleware usage
- Static file serving
- Request/response handling

### Routing
- URL path matching
- Switch statements for routing
- Default/404 routes
- Redirects (301 status)

### HTTP Status Codes
- `200 OK`: Successful request
- `301 Moved Permanently`: Redirect
- `404 Not Found`: Resource not found
- `201 Created`: Resource created
- `203 Non-Authoritative Information`

## 📝 File Descriptions

- **server.js**: HTTP server with custom routing using Node.js fs module
- **app.js**: Express.js application setup
- **views/index.html**: Home page template
- **views/about.html**: About page template
- **views/404.html**: Error page template

## 🚀 Getting Started

### Installation

1. Navigate to the directory:
```bash
cd chapter_1.2
```

2. Install dependencies:
```bash
npm install
```

### Running the Server

**Development mode** (with auto-reload):
```bash
npm start
```

The server will start and watch for file changes. Access it at `http://localhost:3000` (or configured port).

## 🔧 Features

- Dynamic HTML file serving based on routes
- Automatic server restart on code changes (Nodemon)
- Multiple page routing
- Error page handling
- URL redirects
- Lodash utility integration
- Static HTML serving

## 🌐 Routes

- `/` - Home page (index.html)
- `/about` - About page (about.html)
- `/about-me` - Redirects to `/about`
- `*` - 404 Not Found page

## 📄 License

ISC

## 👤 Author

Add your name/information here

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📖 Next Steps

After completing this chapter:
- Chapter 2: Express API development with data manipulation
- Chapter 3: Full-stack application with authentication and database
