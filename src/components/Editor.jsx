import React from "react";
import "./Editor.css";
import CloseIcon from "@mui/icons-material/Close";

const Editor = (props) => {
  const {
    edState,
    isEditMode,
    index,
    list,
    setList,
    setIsEditorOpen,
    lists,
    setLists,
  } = props;

  const resetValue = () => {
    setList({
      title: "",
      description: "",
      time: "",
      date: "",
    });
    setIsEditorOpen(false);
  };

  const handleAddTitle = (e) => {
    var titleValue = e.target.value;
    if (titleValue.length) {
      setList({ ...list, title: titleValue });
    } else {
      setList({ ...list, title: "" });
    }
  };

  const handleAddDescription = (e) => {
    var descriptionValue = e.target.value;
    if (descriptionValue.length) {
      setList({ ...list, description: descriptionValue });
    } else {
      setList({ ...list, description: "" });
    }
  };

  const handlePostTask = () => {
    var titleCurValue = list.title;
    var descriptionCurValue = list.description;
    if (titleCurValue === "" && descriptionCurValue === "") {
      console.log("both are empty");
    } else {
      var date = new Date();
      var currentTime = date.toLocaleTimeString();
      var currentDate = date.toLocaleDateString();
      setLists([...lists, { ...list, time: currentTime, date: currentDate }]);
      resetValue();
    }
  };

  const handleSaveEdits = () => {
    lists[index] = list;
    setLists([...lists]);
    resetValue();
  };

  return (
    <div className="editor-bg" style={{ display: edState }}>
      <div className="editor">
        <div className="editor-head">
          <h2 className="editor-state">
            {isEditMode ? "Edit List" : "New List"}
          </h2>
          <button onClick={() => resetValue()} className="cancel-button">
            <CloseIcon />
          </button>
        </div>
        <div className="inputs-container">
          <label className="tit-label" htmlFor="title-inp">
            Title:
          </label>
          <textarea
            onChange={handleAddTitle}
            className="title-input"
            id="title-inp"
            placeholder="Title..."
            value={list.title}
          ></textarea>
          <label className="des-label" htmlFor="description-inp">
            Description:
          </label>
          <textarea
            onChange={handleAddDescription}
            className="description-input"
            id="description-inp"
            placeholder="Description..."
            value={list.description}
          ></textarea>
        </div>
        <div className="editor-option-container">
          <div className="editor-tools"></div>
          <div className="button-container">
            <button
              onClick={isEditMode ? handleSaveEdits : handlePostTask}
              className="done-button save"
            >
              {isEditMode ? "SAVE" : "POST"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
