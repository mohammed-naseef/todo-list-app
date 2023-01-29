import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Listfeed, Editor } from "./components/index";

const App = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const [list, setList] = useState({
    title: "",
    description: "",
    time: "",
    date: "",
  });

  const [lists, setLists] = useState(() => {
    var retrieveItem = JSON.parse(localStorage.getItem("posts"));
    if (retrieveItem) return retrieveItem;
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(lists));
    // localStorage.clear();
  }, [lists]);

  return (
    <div className="main-body">
      <Header setIsEditMode={setIsEditMode} setIsEditorOpen={setIsEditorOpen} />
      <Listfeed
        setIsEditMode={setIsEditMode}
        setIndex={setIndex}
        setList={setList}
        setIsEditorOpen={setIsEditorOpen}
        setRemainLists={setLists}
        lists={lists}
      />
      <Editor
        edState={isEditorOpen ? "flex" : "none"}
        isEditMode={isEditMode}
        index={index}
        list={list}
        setList={setList}
        setIsEditorOpen={setIsEditorOpen}
        lists={lists}
        setLists={setLists}
      />
    </div>
  );
};

export default App;
