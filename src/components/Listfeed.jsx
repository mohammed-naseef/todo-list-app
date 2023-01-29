import React from "react";
import "./Listfeed.css";
import List from "./List";

const Listfeed = (props) => {
  const {
    setIsEditMode,
    setIndex,
    setList,
    setIsEditorOpen,
    setRemainLists,
    lists,
  } = props;
  const removeList = (i) => {
    lists.splice(i, 1);
    setRemainLists([...lists]);
  };

  const handleEditList = (i) => {
    setIsEditorOpen(true);
    setIsEditMode(true);
    var selectedList = lists[i];
    var selectedTitle = selectedList.title;
    var selectedDescription = selectedList.description;
    var selectedTime = selectedList.time;
    var selectedDate = selectedList.date;
    setList({
      title: selectedTitle,
      description: selectedDescription,
      time: selectedTime,
      date: selectedDate,
    });
    setIndex(i);
  };

  return (
    <div className="container">
      <ul className="list-container">
        {lists.map((list, i) => {
          return (
            <List
              handleEditList={handleEditList}
              removeList={removeList}
              item={list}
              index={i}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Listfeed;
