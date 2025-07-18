import "./App.css";
import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";

const INITIAL_TAB = Object.keys(Tabs)[0];

const INITIAL_TODOS = [
  {
    "text": "Pasear al perro",
    "completed": false,
    "favorite": false,
    "id": 1752742413863,
    "done": false
  },
  {
    "text": "Organizar partida de rol",
    "completed": false,
    "favorite": false,
    "id": 1752742454470,
    "done": false
  }
]

export const App = () => {
  const [activeTab, setActiveTab] = useState(INITIAL_TAB);
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="app-container">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <h1 className="app-title">📝Mi Lista de tareas</h1>

      {activeTab === Tabs.TODOS && <TodoList todos={todos}/>}

      {activeTab === Tabs.FAVORITES && <h2>Pestaña: Favoritos</h2>}

      {activeTab === Tabs.NEW_TODO && <TodoForm addTodo={addTodo} />}
    </div>
  );
};
