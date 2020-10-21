import { Injectable } from '@nestjs/common';
import { Note } from './note.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteByID(id: string): Note {
    return this.notes.find(note => note.id === id);
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
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
