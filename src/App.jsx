import "./App.css";
import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";

const INITIAL_TAB = Object.keys(Tabs)[0];

export const App = () => {
  const [activeTab, setActiveTab] = useState(INITIAL_TAB);
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div className="app-container">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <h1 className="app-title">📝Mi Lista de tareas</h1>
      {activeTab === Tabs.TODOS && <h2>Pestaña: Todos</h2>}
      {activeTab === Tabs.FAVORITES && <h2>Pestaña: Favoritos</h2>}
      {activeTab === Tabs.NEW_TODO && <TodoForm addTodo={addTodo}/>}
    </div>
  );
};
