import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import notes from "../assets/data";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
const NotePage = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(useParams());
  // let note = notes.find((note) => note.id === Number(id));
  let [note, setNote] = React.useState([]); // error cause having null value in useState

  useEffect(() => {
    getNotes();
  }, []);
  let getNotes = async () => {
    if (id === "new") return;
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    // sending data so we use method as PUT request
    // sending json data in headers
    // body is the data we are sending
    await fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
  };

  let createNote = async () => {
    await fetch(`/api/notes/create/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
  };

  let deleteN = () => {
    deleteNote();
    navigate("/");
  };
  let submit = () => {
    if (id === "new") {
      createNote();
      navigate("/");
    } else {
      updateNote();
      navigate("/");
    }
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={submit} />
        </h3>
        {id !== "new" ? (
          <button onClick={deleteN}>Delete</button>
        ) : (
          <button onClick={submit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          // spread operator is ...
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
      {/* <h1>This is single note page</h1>
      <p>{note.body}</p> */}
    </div>
  );
};

export default NotePage;
