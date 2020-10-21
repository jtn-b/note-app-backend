import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.model';
import { CreateNoteDto } from './dto/create-note-dto';
@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}

  @Get()
  getAllNotes(): Note[] {
    return this.noteService.getAllNotes();
  }

  @Get('/:id')
  getNoteByID(@Param('id') id: string): Note {
    return this.noteService.getNoteByID(id);
  }

  @Post()
  createNote(@Body() createNoteDto: CreateNoteDto): Note {
    const { content } = createNoteDto;
    return this.noteService.createNote(content);
  }

  @Delete('/:id')
  deleteNote(@Param('id') id: string): void {
    this.noteService.deleteNote(id);
  }
}
