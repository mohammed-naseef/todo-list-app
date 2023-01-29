import React from "react";
import "./Header.css";

const Header = ({ setIsEditMode, setIsEditorOpen }) => {
  const openEditor = () => {
    setIsEditorOpen(true);
    setIsEditMode(false);
  };

  return (
    <>
      <header className="header">
        <h1>TODO</h1>
        <h1>Lists that you posted appear here..</h1>
        <button className="create-button" onClick={openEditor}>
          New list +
        </button>
      </header>
    </>
  );
};

export default Header;
