import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('songs')
export class SongsController {
 

  @Get()
    getSongs(@Res() res: Response ){
      //dirname: donde estoy parada 
      const songs = join (__dirname, '../data/songs.json')
      res.sendFile(songs)
    }

}
