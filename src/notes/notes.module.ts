import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteRepository } from './note.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NoteRepository])],
  providers: [NotesService],
  controllers: [NotesController],
})
export class NotesModule {}
