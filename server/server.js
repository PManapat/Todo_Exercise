const app = require('./server-config.js');
const routes = require('./server-routes.js');
const userRoutes = require('./routes/userRoutes.js')
const taskRoutes = require('./routes/taskRotues.js')

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  if (req.url === '/favicon.ico') {
    res.status(204).end(); // Send "No Content" response
    return;
  }
  next();
});



app.use("/users", userRoutes); // User routes
app.use("/tasks", taskRoutes); // Task routes

// TODO routes
app.get('/', routes.getAllTodos);
app.get('/:id', routes.getTodo);

app.post('/', routes.postTodo);
app.patch('/:id', routes.patchTodo);

app.delete('/', routes.deleteAllTodos);
app.delete('/:id', routes.deleteTodo);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;