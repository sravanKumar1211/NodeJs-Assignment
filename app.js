import express from "express"
const app=new express();

const PORT = 3000;

// Rough Json Data
let users = [
  { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
  { id: "2", firstName: "Rohan", lastName: "Sharma", hobby: "Cricket" },
  { id: "3", firstName: "Neha", lastName: "Verma", hobby: "Dancing" },
  { id: "4", firstName: "Arjun", lastName: "Singh", hobby: "Photography" },
  { id: "5", firstName: "Priya", lastName: "Jain", hobby: "Cooking" },
  { id: "6", firstName: "Kabir", lastName: "Rastogi", hobby: "Gaming" },
  { id: "7", firstName: "Shivani", lastName: "Nair", hobby: "Writing" },
  { id: "8", firstName: "Harshit", lastName: "Kapoor", hobby: "Chess" },
  { id: "9", firstName: "Kavya", lastName: "Chopra", hobby: "Reading Novels" },
  { id: "10", firstName: "Manoj", lastName: "Deshmukh", hobby: "Swimming" },
  { id: "11", firstName: "Simran", lastName: "Purohit", hobby: "Traveling" },
  { id: "12", firstName: "Ayush", lastName: "Tiwari", hobby: "Sketching" },
  { id: "13", firstName: "Sneha", lastName: "Rajput", hobby: "Singing" },
  { id: "14", firstName: "Karan", lastName: "Mehta", hobby: "Basketball" },
  { id: "15", firstName: "Tanya", lastName: "Malhotra", hobby: "Yoga" },
  { id: "16", firstName: "Mohit", lastName: "Chauhan", hobby: "Driving" },
  { id: "17", firstName: "Radha", lastName: "Das", hobby: "Painting" },
  { id: "18", firstName: "Virat", lastName: "Chatterjee", hobby: "Football" },
  { id: "19", firstName: "Riya", lastName: "Mishra", hobby: "Drawing" },
  { id: "20", firstName: "Dev", lastName: "Bhargava", hobby: "Coding" },
  { id: "21", firstName: "Pooja", lastName: "Kulkarni", hobby: "Blogging" },
  { id: "22", firstName: "Abhay", lastName: "Saxena", hobby: "Acting" },
  { id: "23", firstName: "Srishti", lastName: "Pandey", hobby: "Gardening" },
  { id: "24", firstName: "Varun", lastName: "Yadav", hobby: "Cycling" },
  { id: "25", firstName: "Manya", lastName: "Bhatt", hobby: "Poetry" }
];


// JSON parser (To parse data from body)
app.use(express.json());

// Logging Middleware (method, URL, status code) 
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      ` ${req.method},${req.originalUrl},  ${res.statusCode}`
    );
  });

  next();
});

// Validation Middleware for POST & PUT 
function validateUser(req, res, next) {
  const { id, firstName, lastName, hobby } = req.body;

  // For POST: id is required from body
  if (req.method === "POST") {
    if (!id || !firstName || !lastName || !hobby) {
      return res.status(400).json({
        message:
          "Invalid input. Fields 'id', 'firstName', 'lastName', and 'hobby' are required.",
      });
    }
  }

  // For PUT: firstName, lastName, hobby should be present
  if (req.method === "PUT") {
    if (!firstName || !lastName || !hobby) {
      return res.status(400).json({
        message:
          "Invalid input. Fields 'firstName', 'lastName', and 'hobby' are required.",
      });
    }
  }

  next();
}

// ROUTES 

// GET /users – Fetch the list of all users.
app.get("/users", (req, res) => {
    if(!users){
         return res.status(404).json({error:"No users available"});
    }
  return res.status(200).json(users);
});

//  GET /users/:id – Fetch details of a specific user by ID.
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(user);
});

//  POST /user – Add a new user.
app.post("/user", validateUser, (req, res) => {
  const { id, firstName, lastName, hobby } = req.body;

  const existingUser = users.find((u) => u.id === id);
  if (existingUser) {
    return res.status(400).json({ message: "User with this ID already exists" });
  }

  const newUser = { id, firstName, lastName, hobby };
  users.push(newUser);

  return res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

//  PUT /user/:id – Update details of an existing user.
app.put("/user/:id", validateUser, (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, hobby } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.hobby = hobby;

  return res.status(200).json({
    message: "User updated successfully",
    user,
  });
});

// DELETE /user/:id – Delete a user by ID.
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  return res.status(200).json({
    message: "User deleted successfully",
  });
});

// Global Error Handling Middleware 
app.use((err, req, res, next) => {
  console.error("[ERROR MIDDLEWARE]", err);
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Start the server 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
