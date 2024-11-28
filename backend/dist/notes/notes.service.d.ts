import { Note } from './note.model';
export declare class NotesService {
    private noteModel;
    constructor(noteModel: typeof Note);
    findAll(): Promise<Note[]>;
    findByCategory(category: string): Promise<Note[]>;
    findArchived(): Promise<Note[]>;
    create(noteData: Partial<Note>): Promise<Note>;
    update(id: number, updateData: Partial<Note>): Promise<Note>;
    delete(id: number): Promise<void>;
    toggleArchive(id: number): Promise<Note>;
    getCategories(): Promise<string[]>;
    createCategory(category: string): Promise<string>;
}
