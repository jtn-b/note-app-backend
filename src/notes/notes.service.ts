import { Injectable, NotFoundException } from '@nestjs/common';
import { NoteRepository } from './note.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note-dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NoteRepository) private noteRepository: NoteRepository,
  ) {}

  async getNoteByID(id: number): Promise<Note> {
    const found = await this.noteRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Note with ID "${id}" not found :(`);
    }
    return found;
  }

  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    return this.noteRepository.createNote(createNoteDto);
  }

  async deleteNote(id: number): Promise<void> {
    const res = await this.noteRepository.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException(`Note with ID "${id}" not found :(`);
    }
  }

  //updateNote(id: string, content: string): Note {
  //const note = this.getNoteByID(id);
  //note.content = content;
  //return note;
  //}
}
