import React from 'react';

const NoteList = ({ notes, onEditNote, onDeleteNote, onToggleArchive, archived, handleToggleForms }) => {
  const handleToggleFormsEdit = (note) => {
    handleToggleForms();
    onEditNote(note);
  };

  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="text-center">No {archived ? 'archived' : 'active'} notes found.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.content}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-sm btn-primary" onClick={() => handleToggleFormsEdit(note)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => onDeleteNote(note.id)}>
                Delete
              </button>
              <button className="btn btn-sm btn-warning" onClick={() => onToggleArchive(note.id)}>
                {archived ? 'Unarchive' : 'Archive'}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
