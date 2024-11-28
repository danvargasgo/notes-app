import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSaveNote, editingNote, categories }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setSelectedCategory(editingNote.category || '');
    } else {
      setTitle('');
      setContent('');
      setSelectedCategory('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveNote({ title, content, category: selectedCategory });
    setTitle('');
    setContent('');
    setSelectedCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 my-form">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary add-note">
        {editingNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
