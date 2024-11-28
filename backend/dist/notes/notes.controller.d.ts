import { NotesService } from './notes.service';
import { Note } from './note.model';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    getAllNotes(category: string): Promise<Note[]>;
    getArchivedNotes(): Promise<Note[]>;
    createNote(noteData: Partial<Note>): Promise<Note>;
    updateNote(id: string, updateData: Partial<Note>): Promise<Note>;
    deleteNote(id: string): Promise<{
        message: string;
    }>;
    toggleArchive(id: string): Promise<Note>;
    getCategories(): Promise<string[]>;
    getNotesByCategory(category: string): Promise<Note[]>;
    createCategory(category: string): Promise<string>;
}
