# Chapter 2 - Express API Development

Build RESTful APIs with Express.js, handle different HTTP methods, and learn API best practices.

## 📋 Project Description

This project demonstrates Express.js API development with CRUD operations. Learn how to create endpoints, handle JSON data, manage HTTP methods (GET, POST, DELETE), and build scalable API structures.

## 🛠️ Tech Stack

- **Framework**: Express.js 5.2.1
- **Runtime**: Node.js
- **Module System**: CommonJS
- **Development**: Nodemon 3.1.11
- **Data Format**: JSON

## 📦 Dependencies

```json
{
  "express": "^5.2.1"
}
```

### Dev Dependencies

```json
{
  "nodemon": "^3.1.11"
}
```

## 📁 Project Structure

```
chapter_2/
├── server.js              # Main Express server
├── package.json
├── test.rest              # API test file
└── README.md
```

## 🎯 Learning Objectives

- Create RESTful API endpoints
- Handle multiple HTTP methods (GET, POST, DELETE)
- Manage in-memory data structures
- Implement middleware for request handling
- Test API endpoints
- Understand request/response cycle
- Work with JSON data

## 📚 Key Concepts

### HTTP Methods
- **GET**: Retrieve data from server
- **POST**: Create new data on server
- **DELETE**: Remove data from server

### RESTful API Principles
- Resource-based URLs
- Stateless communication
- Client-server architecture
- JSON as data format

### Middleware
- `express.json()`: Parse incoming JSON requests
- Automatic content-type handling
- Request processing pipeline

### Express Routing
- Endpoint definition
- Path parameters
- Query strings
- Response methods (send, sendStatus, json)

## 📝 API Endpoints

### Home Page
```
GET /
Response: HTML page with welcome message and current data
```

### Dashboard
```
GET /dashboard
Response: Dashboard HTML page
```

### Get All Data
```
GET /api/data
Response: JSON array of data
```

### Add New Data
```
POST /api/data
Body: { "name": "value" }
Response: 201 Created status
```

### Delete Data
```
DELETE /api/data
Response: 203 Non-Authoritative Information status
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

The server will start on `http://localhost:3000` by default.

### Testing the API

Use the `test.rest` file with REST Client extension or any API testing tool:
- Postman
- Thunder Client
- REST Client (VSCode extension)
- cURL

## 🔧 Features

- RESTful API structure
- Multiple HTTP method support
- JSON data handling
- In-memory data storage
- Middleware integration
- Automatic server restart on code changes
- HTML and API endpoints combined

## 📄 Data Structure

The application maintains a simple array of names:
```javascript
let data = ['Jone'];
```

Operations:
- View all: GET /api/data
- Add new: POST /api/data with JSON body { "name": "NewName" }
- Remove last: DELETE /api/data

## 📋 Test File (test.rest)

The `test.rest` file contains predefined API requests for testing with REST Client extensions.

## 📄 License

ISC

## 👤 Author

Add your name/information here

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📖 Next Steps

After completing this chapter:
- Chapter 3: Full-stack application with authentication, database, and todo management
- Advanced: Database integration, user authentication, deployment strategies
