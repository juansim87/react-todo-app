import "./App.css";
import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Favorites } from "./components/Favorites/Favorites";
import { storage } from "./helpers/storage";
import { Footer } from "./components/Footer/Footer";

const STORAGE_TODOS_KEY = "todos";

const INITIAL_TODOS = storage.get(STORAGE_TODOS_KEY);

export const App = () => {
  const [activeTab, setActiveTab] = useState(Tabs.TODOS);
  const [todos, setTodos] = useState(INITIAL_TODOS || []);

  const addTodo = (newTodo) => {
    setTodos((prev) => {
      const newTodos = [...prev, newTodo];
      storage.save(STORAGE_TODOS_KEY, newTodos);
      return newTodos;
    });
  };

  const onToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });

    setTodos(updatedTodos);
    storage.save(STORAGE_TODOS_KEY, updatedTodos);
  };

  const onToggleFavorite = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, favorite: !todo.favorite } : todo;
    });

    setTodos(updatedTodos);
    storage.save(STORAGE_TODOS_KEY, updatedTodos);
  };

  const onDeleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
    storage.save(STORAGE_TODOS_KEY, filtered);
  };

  const onResetButton = () => {
    const resetTodos = todos.map((todo) => {
      return { ...todo, completed: false, favorite: false, done: false };
    });
    setTodos(resetTodos);
    storage.save(STORAGE_TODOS_KEY, resetTodos);
  };

  return (
    <div className="app-container">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <h1 className="app-title">📝Mi Lista de tareas</h1>

      {activeTab === Tabs.TODOS && (
        <TodoList
          todos={todos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleFavorite={onToggleFavorite}
        />
      )}

      {activeTab === Tabs.FAVORITES && (
        <Favorites
          todos={todos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleFavorite={onToggleFavorite}
        />
      )}

      {activeTab === Tabs.NEW_TODO && <TodoForm addTodo={addTodo} />}
      <Footer onResetButton={onResetButton} />
    </div>
  );
};
