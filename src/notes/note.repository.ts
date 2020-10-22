import { Repository, EntityRepository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note-dto';
@EntityRepository(Note)
export class NoteRepository extends Repository<Note> {
  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const { content } = createNoteDto;
    const note = new Note();
    note.content = content;
    await note.save();
    return note;
  }
}
