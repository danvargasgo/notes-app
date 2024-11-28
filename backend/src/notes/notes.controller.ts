import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Patch,
  Query,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.model';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async getAllNotes(@Query('category') category: string): Promise<Note[]> {
    if (category) {
      return this.notesService.findByCategory(category);
    }
    return this.notesService.findAll();
  }

  @Get('archived')
  async getArchivedNotes(): Promise<Note[]> {
    return this.notesService.findArchived();
  }

  @Post()
  async createNote(@Body() noteData: Partial<Note>): Promise<Note> {
    return this.notesService.create(noteData);
  }

  @Put(':id')
  async updateNote(
    @Param('id') id: string,
    @Body() updateData: Partial<Note>,
  ): Promise<Note> {
    return this.notesService.update(+id, updateData);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string): Promise<{ message: string }> {
    await this.notesService.delete(+id);
    return { message: `Note with ID ${id} deleted successfully` };
  }

  @Patch(':id/archive')
  async toggleArchive(@Param('id') id: string): Promise<Note> {
    return this.notesService.toggleArchive(+id);
  }

  @Get('categories')
  async getCategories(): Promise<string[]> {
    return this.notesService.getCategories();
  }

  @Get('category/:category')
  async getNotesByCategory(
    @Param('category') category: string,
  ): Promise<Note[]> {
    return this.notesService.findByCategory(category);
  }

  @Post('category')
  async createCategory(@Body('category') category: string): Promise<string> {
    return this.notesService.createCategory(category);
  }
}
