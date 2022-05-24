import React from "react";
import { Link } from "react-router-dom";

let getDate = (note) => {
  return new Date(note.updated).toLocaleDateString();
};
let title = (note) => {
  const title = note.body.split("\n")[0];
  if (title.length > 20) {
    return title.slice(0, 20) + "  ...";
  } else {
    return title;
  }
};
const ListItem = (props) => {
  return (
    <Link to={`/notes/${props.note.id}`}>
      <div className="notes-list-item">
        <h3>{title(props.note)}</h3>
        <p>
          <span>{getDate(props.note)}</span>
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
