# Chapter 1 - Node.js Fundamentals

Introduction to Node.js core concepts and fundamentals, divided into two sub-chapters covering essential modules and features.

## 📋 Overview

Chapter 1 is divided into two learning modules that introduce foundational Node.js concepts:

- **Chapter 1.1**: Core Node.js modules and basic functionality
- **Chapter 1.2**: HTTP server creation and Express.js introduction

## 📁 Project Structure

```
chapter_1/
├── chapter_1.1/
│   ├── files.js           # File operations
│   ├── modules.js         # Module system
│   ├── people.js          # Data structure example
│   ├── server.js          # Basic server
│   ├── streams.js         # Stream operations
│   ├── package.json
│   └── docs/
│       ├── blog1.txt
│       ├── blog2.txt
│       └── blog4.txt
├── chapter_1.2/
│   ├── app.js             # Express application
│   ├── server.js          # HTTP server with routing
│   ├── package.json
│   └── views/
│       ├── 404.html
│       ├── about.html
│       └── index.html
└── README.md
```

## 🎯 Learning Objectives

### Chapter 1.1
- Understand Node.js module system
- Work with file operations (fs module)
- Create streams for data processing
- Handle core Node.js globals (__dirname, __filename)
- Build basic data structures

### Chapter 1.2
- Create HTTP servers with Node.js
- Implement routing with Express.js
- Serve static HTML files
- Handle different HTTP methods
- Manage HTTP status codes and redirects

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Module System**: CommonJS
- **Framework** (1.2): Express.js 5.2.1
- **Utilities**: Lodash, EJS, Nodemon

## 📦 Dependencies

### Chapter 1.1
```json
{
  "name": "chapter_1",
  "type": "commonjs",
  "license": "ISC"
}
```

### Chapter 1.2
```json
{
  "ejs": "^4.0.1",
  "express": "^5.2.1",
  "lodash": "^4.17.21",
  "nodemon": "^3.1.11"
}
```

## 🚀 Getting Started

### Installation

1. Navigate to the chapter directory:
```bash
cd chapter_1\chapter_1.1
# or
cd chapter_1\chapter_1.2
```

2. Install dependencies:
```bash
npm install
```

### Running the Applications

**Chapter 1.2 - Development mode:**
```bash
npm start
```

The server will start on the configured port with auto-reload via Nodemon.

## 📚 Key Concepts Covered

- **Core Modules**: fs, http, path, stream
- **Module Exports and Requires**: CommonJS module system
- **File I/O**: Reading and writing files asynchronously
- **Streams**: Handling large data efficiently
- **HTTP Server**: Creating server instances and handling requests
- **Routing**: Implementing basic URL routing
- **Status Codes**: 200 OK, 404 Not Found, 301 Redirect
- **Express Middleware**: Handling JSON data
- **Static Files**: Serving HTML and other static content

## 🔧 Key Features

### Chapter 1.1
- Basic Node.js operations
- Module creation and usage
- File system operations
- Stream processing
- Global objects exploration

### Chapter 1.2
- HTTP server creation
- Express routing
- Static file serving
- HTML page routing
- Redirect handling

## 📝 File Descriptions

### Chapter 1.1
- **files.js**: Demonstrates file read/write operations
- **modules.js**: Shows module creation and exports
- **people.js**: Example data structure
- **server.js**: Basic server setup
- **streams.js**: Stream handling demonstrations
- **docs/**: Sample documentation files for file operations

### Chapter 1.2
- **server.js**: HTTP server with custom routing
- **app.js**: Express application setup
- **views/**: HTML templates for different routes
  - index.html: Home page
  - about.html: About page
  - 404.html: Error page

## 📄 License

ISC

## 👤 Author

Add your name/information here

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📖 Next Steps

After completing Chapter 1, proceed to:
- Chapter 2: Express fundamentals and API development
- Chapter 3: Full-stack application with authentication and database
