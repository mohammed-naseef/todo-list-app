import React from "react";
import "./List.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const List = (props) => {
  const { handleEditList, removeList, item, index } = props;

  return (
    <li className="list" key={index}>
      <div className="title-col">
        <h1 className="title">{item.title}</h1>
      </div>
      <div className="description-col">
        <p className="description">{item.description}</p>
      </div>
      <div className="option-container">
        <div className="date-info">
          <span className="time">{item.time}</span>
          <span className="date">{item.date}</span>
        </div>
        <div className="more-option">
          <div onClick={() => handleEditList(index)} className="option edit">
            <span className="option-icon">{<EditIcon />}</span>
            <span className="option-text">Edit</span>
          </div>
          <div onClick={() => removeList(index)} className="option delete">
            <span className="option-icon">{<DeleteIcon />}</span>
            <span className="option-text">Delete</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default List;
