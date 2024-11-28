import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './notes/note.model';
import { NotesModule } from './notes/notes.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'database-1.ctmci6uw2i6p.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'ANAYche75*',
      database: 'notes',
      models: [Note],
      autoLoadModels: true,
      synchronize: true,
    }),
    NotesModule,
    CategoriesModule,
    AuthModule,
  ],
})
export class AppModule {}
