import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from './note.model';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note)
    private noteModel: typeof Note,
  ) {}

  async findAll(): Promise<Note[]> {
    return this.noteModel.findAll();
  }

  async findByCategory(category: string): Promise<Note[]> {
    return this.noteModel.findAll({ where: { category } });
  }

  async findArchived(): Promise<Note[]> {
    return this.noteModel.findAll({ where: { archived: true } });
  }

  async create(noteData: Partial<Note>): Promise<Note> {
    return this.noteModel.create(noteData);
  }

  async update(id: number, updateData: Partial<Note>): Promise<Note> {
    const note = await this.noteModel.findByPk(id);
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    await note.update(updateData);
    return note;
  }

  async delete(id: number): Promise<void> {
    const note = await this.noteModel.findByPk(id);
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    await note.destroy();
  }

  async toggleArchive(id: number): Promise<Note> {
    const note = await this.noteModel.findByPk(id);
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    note.archived = !note.archived;
    await note.save();
    return note;
  }

  async getCategories(): Promise<string[]> {
    const categories = await this.noteModel.findAll({
      attributes: ['category'],
      group: ['category'],
    });
    return categories.map((note) => note.category);
  }

  async createCategory(category: string): Promise<string> {
    const note = await this.noteModel.create({ category });
    return note.category;
  }
}
