import { Module } from '@nestjs/common';
import { SongsController } from './app.controller';
import { SongsService } from './songs/songs.service';
import { TrackController } from './track/track.controller';


@Module({
  imports: [],
  controllers: [SongsController, TrackController],
  providers: [SongsService],
})
export class AppModule {}
