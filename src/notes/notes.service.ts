import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from './note.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteByID(id: string): Note {
    const found = this.notes.find(note => note.id === id);
    if (!found) {
      throw new NotFoundException(`Note with ID "${id}" not found :(`);
    }

    return found;
  }

  createNote(content: string): Note {
    const note: Note = {
      id: uuid(),
      content,
    };
    this.notes.push(note);
    return note;
  }

  deleteNote(id: string): void {
    const found = this.getNoteByID(id);
    this.notes = this.notes.filter(note => note.id !== found.id);
  }

  updateNote(id: string, content: string): Note {
    const note = this.getNoteByID(id);
    note.content = content;
    return note;
  }
}
