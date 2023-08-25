import { Controller, Get, Post, Res, Body, Delete, Param, Put, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { SongsService } from './songs/songs.service';

@Controller('songs')
export class SongsController {
  constructor (private songsService: SongsService) {}
 
@Get()
getAll(@Res() res: Response ){
try {
  const serviceResponse = this.songsService.getAll()
  res.status(HttpStatus.OK).send(serviceResponse)
} catch (error) {
  throw new NotFoundException('Data not found')
}
}

@Get(':id')
getById(@Param('id') id :string, @Res() res:Response){
  try {
    const parsedId = parseInt (id, 10);
    const serviceResponse  = this.songsService.getById(parsedId);
    if (serviceResponse.success){
      return res.status(HttpStatus.OK).send(serviceResponse)
    } else {
      return res.status(HttpStatus.NOT_FOUND).send(serviceResponse)
    }
  } catch (error) {
    throw new BadRequestException(`Cannot get song with id ${id}`)
  }
  }

@Post()
async create(@Body() song: any, @Res() res: Response){
try {
  const serviceResponse = this.songsService.create(song)
  return res.status(HttpStatus.CREATED).send({message: 'Song created', data: song, 
  success: true, code:HttpStatus.CREATED})
} catch (error) {
  throw new BadRequestException ('Song creation faied')
}
}

@Delete(':id')
deleteSongsById(@Param('id') id:string, @Res() res: Response){
try {
  const serviceResponse  = this.songsService.deleteSongById(id);
  if (serviceResponse. success){
    return res.status(HttpStatus.OK).send({message: serviceResponse.message})
  } else {
    return res.status(HttpStatus.NOT_FOUND).send({message: serviceResponse.message})
  }
} catch (error) {
  throw new NotFoundException ('Delete failed')
} }

@Put(':id')
updateSongById(@Param('id') id: string, @Body() body: any, @Res() res: Response){
  try {
    const parsedId = parseInt (id, 10);
    const serviceResponse  = this.songsService.updateSongById(parsedId, body );
    if (serviceResponse.success){
      return res.status(HttpStatus.OK).send({...serviceResponse, code: HttpStatus.OK})
    } else {
      return res.status(HttpStatus.NOT_FOUND).send({...serviceResponse, code: HttpStatus.NOT_FOUND})
    }
  } catch (error) {
    throw new BadRequestException ('Update failed')
  }
}
}


