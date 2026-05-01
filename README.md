# Mini User API

A simple REST API built with **Node.js + Express** demonstrating routing, middleware, and basic authentication.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm

### Installation

```bash
git clone <your-repo-url>
cd mini-user-api
npm install
npm start
```

Server runs on **http://localhost:3000**

---

## 📁 Project Structure

```
mini-user-api/
├── server.js              # Entry point
├── middleware/
│   └── logger.js          # Request logging middleware
├── routes/
│   ├── users.js           # /users routes
│   └── auth.js            # /login route
├── utils/
│   └── response.js        # Consistent JSON response builder
└── package.json
```

---

## 📡 API Reference

All responses follow this format:
```json
{
  "message": "Operation description",
  "time": "2024-01-01T12:00:00.000Z"
}
```

---

### Root

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check — returns "Server Running" |

---

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get a single user by ID |
| POST | `/users` | Create a new user |
| DELETE | `/users/:id` | Delete a user by ID |

#### POST /users — Request Body
```json
{
  "name": "Sample Name",
  "email": "sample@email.com"
}
```

**Rules:**
- `name` and `email` are required → `400 Bad Request`
- Duplicate email is not allowed → `409 Conflict`
- User not found (DELETE/GET by ID) → `404 Not Found`

---

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/login` | Login with email and password |

#### POST /login — Request Body
```json
{
  "email": "admin@gmail.com",
  "password": "1234"
}
```

**Responses:**
- ✅ Correct credentials → `200 Login Success`
- ❌ Wrong credentials → `401 Invalid Credentials`
- ⚠️ Missing fields → `400 All fields required`

---

## 🧩 Middleware

Every request is logged to the console:
```
Request received at: 2024-01-01T12:00:00.000Z
GET /users
```

---

## 🧪 Testing with Postman

Import the following requests into Postman:

1. `GET http://localhost:3000/` — Server check
2. `POST http://localhost:3000/users` — Add user (JSON body)
3. `GET http://localhost:3000/users` — List all users
4. `GET http://localhost:3000/users/1` — Get user by ID
5. `DELETE http://localhost:3000/users/1` — Delete user
6. `POST http://localhost:3000/login` — Login (JSON body)
