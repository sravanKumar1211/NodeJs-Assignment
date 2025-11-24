# NodeJs-Assignment
G.Sravan Kumar
GitHub: ('https://github.com/sravanKumar1211/NodeJs-Assignment')



---

## 📌 User Management REST API (Node.js + Express)

This project is a simple REST API for managing users using **Node.js** and **Express.js**.
It performs CRUD operations on in-memory user data and uses **middleware** for request logging, validation, and error handling.

---

### 🚀 Features

✔ Fetch all users
✔ Fetch a single user by ID
✔ Add a new user
✔ Update existing user details
✔ Delete a user by ID
✔ Middleware logging (method, url, status code)
✔ Input validation for POST and PUT requests
✔ Global error handling
✔ Uses in-memory users array (no database)

---

### 📡 API Endpoints

| Method     | Endpoint     | Description             | Status Codes  |
| ---------- | ------------ | ----------------------- | ------------- |
| **GET**    | `/users`     | Fetch all users         | 200, 404      |
| **GET**    | `/users/:id` | Fetch a user by ID      | 200, 404      |
| **POST**   | `/user`      | Add a new user          | 201, 400      |
| **PUT**    | `/user/:id`  | Update an existing user | 200, 400, 404 |
| **DELETE** | `/user/:id`  | Remove a user by ID     | 200, 404      |

---

### 🧱 Sample User Object

```json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

---

### 🏗️ Middleware Used

#### 🔹 **Logging Middleware**

Logs the request method, URL, and status code for every request.

#### 🔹 **Validation Middleware**

Ensures all required fields are passed during POST and PUT requests:

* Required for POST: `id`, `firstName`, `lastName`, `hobby`
* Required for PUT: `firstName`, `lastName`, `hobby`

#### 🔹 **Error Handling Middleware**

Handles unexpected errors and prevents server crashes by returning proper error messages.

---

### 🔧 How to Run the Project

#### 1️⃣ Install dependencies

```bash
npm install
```

#### 2️⃣ Start the server

```bash
npm start
```

#### 3️⃣ Test using ThunderClient/Postman on `http://localhost:3000`

---

### 🧪 API Testing (Screenshots to be Attached)

You should attach screenshots of testing:

* GET all users
* GET user by ID
* POST new user
* PUT update user
* DELETE user

Screenshots must show:
⚡ Request URL
⚡ Request body (for POST & PUT)
⚡ Response body + Status code

---

### 📌 Notes

* Data is stored only in memory. Restarting the server resets data.
* This project is for learning purposes (assignment use).

---

### 👨‍💻 Author

**Name:** Sravan Kumar
📎 GitHub: ('https://github.com/sravanKumar1211/NodeJs-Assignment')

---


