# Todo App - Full Stack Application

A full-stack todo application built with Node.js (Express) backend, SQLite database, and JWT authentication.

## 📋 Project Description

This is a complete todo management application featuring user authentication, secure task management, and a responsive user interface. Users can create accounts, log in securely with JWT tokens, and manage their todos with a clean and intuitive interface.

## 🛠️ Tech Stack

- **Backend**: Express.js 5.2.1
- **Database**: SQLite (Native Node.js support)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: Bcrypt
- **Runtime**: Node.js (with experimental modules support)
- **Frontend**: HTML, CSS

## 📦 Dependencies

```json
{
	"express": "^5.2.1",
	"jsonwebtoken": "^9.0.3",
	"bcrypt": "^6.0.0"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (latest version with experimental SQLite support)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd chapter_3
```

3. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3001
JWT_SECRET=your_secret_key_here
```

### Running the Application

**Development mode** (with auto-reload):

```bash
npm run dev
```

The server will start on `http://localhost:3001` by default.

## 📁 Project Structure

```
chapter_3/
├── public/
│   ├── index.html       # Main frontend page
│   ├── style.css        # Main stylesheet
│   └── fanta.css        # Additional styles
├── src/
│   ├── db.js            # Database configuration
│   ├── server.js        # Main server file
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT authentication middleware
│   └── routes/
│       ├── authRouts.js         # Authentication routes (login, register)
│       └── todoRouts.js         # Todo CRUD operations
├── package.json
└── README.md
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication:

- **Registration**: Create a new user account
- **Login**: Authenticate and receive a JWT token
- **Protected Routes**: Access protected endpoints with valid JWT tokens
- **Password Security**: Passwords are hashed using bcrypt

## 📝 API Features

### Authentication Routes

- Register new user
- User login
- Token-based access control

### Todo Routes

- Create new todos
- Read/Retrieve todos
- Update existing todos
- Delete todos

## 🧪 Testing

Test API endpoints using the `todo-app.rest` file or any REST client like:

- Postman
- REST Client Extension (VSCode)
- Thunder Client

## 📄 License

ISC

## 👤 Author

Add your name/information here

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 Notes

- The application uses experimental Node.js features for SQLite and TypeScript support
- Ensure your Node.js version supports experimental modules
- The server runs with automatic file watching in development mode for better development experience
