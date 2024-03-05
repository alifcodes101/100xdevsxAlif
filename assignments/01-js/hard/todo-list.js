/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    // Initialize an empty array to store todos
    this.todos = [];
  }

  add(todo) {
    // Add a todo to the list
    this.todos.push(todo);
  }
  
  remove(indexOfTodo) {
    // Remove a todo at the specified index
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }
  
  update(index, updatedTodo) {
    // Update a todo at the specified index
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    // Return all todos
    return this.todos;
  }

  get(indexOfTodo) {
    // Return a todo at the specified index
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
  }

  clear() {
    // Delete all todos
    this.todos = [];
  }
}

module.exports = Todo;
