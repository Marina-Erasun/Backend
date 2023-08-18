import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { SongsService } from './songs/songs.service';

@Controller('songs')
export class SongsController {
  constructor (private songsService: SongsService) {}
 
  @Get()
    getAll(@Res() res: Response ){
     const songs = this.songsService.getAll()
     res.sendFile(songs)
    }

    @Post()
    create(@Body() song: any){
      this.songsService.create(song)
      return {message: 'Data saved', song: song}
    }

}
