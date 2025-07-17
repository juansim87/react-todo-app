// import { useState } from "react";
import "./Favorites.css";
import { TodoItem } from "../TodoItem/TodoItem.jsx"

export const Favorites = ({ todos, onToggleTodo, onToggleFavorite, onDeleteTodo }) => {
  const favorites = todos.filter((todo) => todo.favorite);

console.log("Favoritos:", favorites);

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">⭐ Favoritos</h2>
      {!favorites?.length === 0 && (
        <p className="favorites-empty">No hay favoritas que mostrar</p>
      )}
      {favorites.length > 0 && (
        <div className="favorites-list">
          {favorites.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleFavorite={onToggleFavorite}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
