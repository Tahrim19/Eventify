// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { getAllEvents, createEvent, updateEvent, deleteEvent,UserData, getUsers } = require('./eventController');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get('/api/events', getAllEvents);
// app.post('/api/events', createEvent);
// app.put('/api/events/:id', updateEvent);
// app.delete('/api/events/:id', deleteEvent);
// app.post('/api/users' , UserData);
// app.get('/api/users', getUsers);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




/////




// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { getAllEvents, createEvent, updateEvent, deleteEvent, UserData, getUsers } = require('./eventController');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Health check route
// app.get('/health', (req, res) => {
//   res.send('Server is up and running!');
// });

// // Routes
// app.get('/api/events', getAllEvents);
// app.post('/api/events', createEvent);
// app.put('/api/events/:id', updateEvent);
// app.delete('/api/events/:id', deleteEvent);
// app.post('/api/users', UserData);
// app.get('/api/users', getUsers);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




const express = require("express");
const cors = require("cors");
const { getAllEvents, createEvent, updateEvent, deleteEvent, UserData, getUsers } = require('./eventController');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

app.get('/api/events', getAllEvents);
app.post('/api/events', createEvent);
app.put('/api/events/:id', updateEvent);
app.delete('/api/events/:id', deleteEvent);
app.post('/api/users', UserData);
app.get('/api/users', getUsers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
