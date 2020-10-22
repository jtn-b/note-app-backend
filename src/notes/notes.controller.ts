import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note-dto';
import { Note } from './note.entity';
@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}
  //@Get()
  //getAllNotes(): Note[] {
  //return this.noteService.getAllNotes();
  //}
  @Get('/:id')
  getNoteByID(@Param('id', ParseIntPipe) id: number): Promise<Note> {
    return this.noteService.getNoteByID(id);
  }
  @Post()
  @UsePipes(ValidationPipe)
  createNote(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return this.noteService.createNote(createNoteDto);
  }
  @Delete('/:id')
  deleteNote(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.noteService.deleteNote(id);
  }
}
