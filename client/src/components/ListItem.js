import React from "react";
import "./ListItems.css";

const ListItem = ({ title, isDone }) => {
  return (
    <li className={`list-group-item ${isDone ? "bg-success" : "bg-danger"}`}>
      <h3>{title}</h3>
    </li>
  );
};

export default ListItem;
