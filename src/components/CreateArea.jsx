import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submit(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {clicked ? (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
          onClick={handleClick}
        />
        <Zoom in={clicked}>
          <Fab onClick={submit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

