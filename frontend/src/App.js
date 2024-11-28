import React, { useState, useEffect } from "react";
import axios from "./AxiosInstance";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newCategory, setNewCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const [viewArchived, setViewArchived] = useState(false);

  useEffect(() => {
    fetchNotes();
    fetchCategories();
  }, []);

  const fetchNotes = async () => {
    if (selectedCategory === "All") {
      const response = await axios.get("/notes");
      setNotes(response.data);
    } else {
      const response = await axios.get("/notes", {
        params: {
          category: selectedCategory,
        },
      });
      setNotes(response.data);
    }
  };

  const fetchCategories = async () => {
    const response = await axios.get("/categories");
    setCategories(response.data);
  };

  useEffect(() => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [selectedCategory]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  const handleSaveNote = async (noteData) => {
    if (editingNote) {
      await axios.put(`/notes/${editingNote.id}`, noteData);
    } else {
      await axios.post("/notes", noteData);
    }
    setEditingNote(null);
    fetchNotes();
  };

  const handleDeleteNote = async (id) => {
    await axios.delete(`/notes/${id}`);
    fetchNotes();
  };

  const handleToggleArchive = async (id) => {
    await axios.patch(`/notes/${id}/archive`);
    fetchNotes();
  };

  const handleAddCategory = async () => {
    if (newCategory.trim()) {
      await axios.post("/categories", { name: newCategory });
      setNewCategory("");
      fetchCategories();
    }
  };

  const handleToggleForms = () => {
    setShowForms(!showForms);
  };

  const filteredNotes = notes.filter((note) => {
    if (selectedCategory === "All") {
      return viewArchived ? note.archived : !note.archived;
    }
    return (
      note.category === selectedCategory &&
      (viewArchived ? note.archived : !note.archived)
    );
  });

  return (
    <div className="container mt-4">
      <h1>Notes App</h1>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex ">
          <nav className="mb-4">
            <button
              className={`btn ${
                !viewArchived ? "btn-dark" : "btn-outline-dark"
              } me-2`}
              onClick={() => setViewArchived(false)}
            >
              Active
            </button>
            <button
              className={`btn ${
                viewArchived ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setViewArchived(true)}
            >
              Archived
            </button>

            <select
              className="form-select w-auto mt-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">Select category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </nav>
        </div>
        <button className="btn btn-primary add-note" onClick={handleToggleForms}>
          Add +
        </button>
      </div>

      {showForms && (
        <div className="mb-4">
          <NoteForm
            onSaveNote={handleSaveNote}
            editingNote={editingNote}
            categories={categories}
          />
          <div className="mt-3 my-form pt-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Add New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button
              className="btn btn-secondary w-100"
              onClick={handleAddCategory}
            >
              Add Category
            </button>
          </div>
        </div>
      )}

      <NoteList
        notes={filteredNotes}
        onEditNote={(note) => setEditingNote(note)}
        onDeleteNote={handleDeleteNote}
        onToggleArchive={handleToggleArchive}
        archived={viewArchived}
        handleToggleForms={handleToggleForms}
      />
    </div>
  );
}

export default App;
