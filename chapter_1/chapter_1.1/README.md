# Chapter 1.1 - Node.js Core Modules & Fundamentals

Learn the basics of Node.js including the module system, file operations, streams, and core concepts.

## 📋 Project Description

This module introduces the foundational concepts of Node.js programming, focusing on understanding how Node.js works, how to use its core modules, and how to structure applications using the CommonJS module system.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Module System**: CommonJS
- **Module Type**: CommonJS

## 📁 Project Structure

```
chapter_1.1/
├── files.js               # File system operations
├── modules.js             # Module system and exports
├── people.js              # Data structure example
├── server.js              # Basic server setup
├── streams.js             # Stream operations
├── package.json
├── docs/
│   ├── blog1.txt
│   ├── blog2.txt
│   └── blog4.txt
└── README.md
```

## 🎯 Learning Objectives

- Understand Node.js globals and module system
- Work with the file system (fs) module
- Implement streams for efficient data handling
- Create and consume modules
- Use Node.js built-in utilities

## 📚 Key Concepts

### Module System (CommonJS)
- Creating and exporting modules
- Requiring external modules
- Understanding module.exports and require()

### File Operations (fs module)
- Reading files asynchronously
- Writing files
- Working with file paths
- Directory operations

### Streams
- Understanding readable and writable streams
- Stream pipelines
- Memory-efficient data processing
- Event handling with streams

### Global Objects
- `__dirname`: Current directory path
- `__filename`: Current file path
- `console`: Logging
- `process`: Process information

## 📝 File Descriptions

- **server.js**: Demonstrates basic Node.js setup with global variables
- **modules.js**: Shows how to create and use CommonJS modules
- **files.js**: File system operations and asynchronous I/O
- **streams.js**: Working with readable and writable streams
- **people.js**: Example data structure for learning purposes
- **docs/**: Sample files for file operation demonstrations

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running Examples

Execute individual files to see examples:

```bash
node server.js
node modules.js
node files.js
node streams.js
```

## 🔧 Features

- File reading and writing operations
- Stream-based data processing
- Module creation and management
- Global variable access
- Asynchronous operations with callbacks

## 📄 License

ISC

## 👤 Author

Add your name/information here

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📖 Next Steps

After mastering these fundamentals, move on to:
- Chapter 1.2: HTTP server and Express.js basics
- Chapter 2: Express API development
