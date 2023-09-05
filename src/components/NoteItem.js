import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import swal from "sweetalert";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const deletedSuccessfully = () => {
    swal({
      title: "Success!",
      text: "Note deleted successfully",
      icon: "success",
      button: "Ok",
    });
  };
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <a href="/" className="btn btn-primary mx-2">
            Read More
          </a>
          <i
            className="fa-regular fa-trash-can mx-2 border border-success p-2 rounded-circle"
            onClick={() => {
              deleteNote(note._id);
              deletedSuccessfully();
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2  border border-danger p-2 rounded-circle"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
