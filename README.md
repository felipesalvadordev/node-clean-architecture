# node-clean-architecture

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

A RESTful API built with **Node.js** and **Hapi.js** following **Clean Architecture** and **Domain-Driven Design (DDD)** principles.

## Overview

This project demonstrates how to structure a Node.js API using clean architecture patterns, ensuring scalability, testability, and maintainability.

## Tech Stack

- **Framework:** [Hapi.js](https://hapi.dev/)
- **ORM:** Sequelize
- **Authentication:** JWT (jsonwebtoken)
- **Testing:** Jest
- **Documentation:** Swagger (hapi-swagger)
- **Development:** Nodemon

## Prerequisites

- Node.js >= 12
- npm >= 6.12

## Installation

```bash
npm install
```

## Getting Started

### Development

```bash
npm run dev
```

Starts the server with hot-reload using Nodemon.

### Production

```bash
npm start
```

### Testing

```bash
npm test
```

Run tests with Jest.

### Test Coverage

```bash
npm run coverage
```

## Project Structure

The project follows Clean Architecture principles with clear separation of concerns:

- **Entities** - Business logic and rules
- **Use Cases** - Application business rules
- **Interface Adapters** - Controllers and presenters
- **Frameworks** - Database, web frameworks, external libraries

## Reference

This project is based on the architecture pattern from:
https://github.com/jbuget/nodejs-clean-architecture-app

## License

ISC
