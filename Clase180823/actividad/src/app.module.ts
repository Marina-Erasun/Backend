import { Module } from '@nestjs/common';
import { SongsController } from './app.controller';
import { SongsService } from './songs/songs.service';


@Module({
  imports: [],
  controllers: [SongsController],
  providers: [SongsService],
})
export class AppModule {}
