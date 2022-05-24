import React from "react";
// import notes from "../assets/data";
import { useEffect } from "react";
import ListItem from "../component/ListItem";
import Addbutton from "../component/Addbutton.jsx";

const NotesList = () => {
  let [notes, setNotes] = React.useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("api/notes/");
    let data = await response.json();
    setNotes(data);
  };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9776; Notes</h2>
        <p  className="notes">Total Notes: {notes.length}</p>
      </div>
      <div className="notesList">
        {notes.map((note) => {
          return (
            <>
              <ListItem note={note}></ListItem>
            </>
          );
        })}
      </div>
      <Addbutton />
    </div>
  );
};

export default NotesList;
