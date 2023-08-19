import { Controller, Get, Post, Res, Body, Delete, Param, Put } from '@nestjs/common';
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

@Delete(':id')
//establecemos el parametro para dirigirnos por la ruta
deleteSongsById(@Param('id') id:string){
// respuesta del servicio de borrar y la guardamos en constante
  const deleteSuccess  = this.songsService.deleteSongById(id)
// verificacion de borrado y mensaje de success
   if(deleteSuccess){
    return {
      message: 'Cancion eliminada',
      success: true,
      code: 200
//registro no borrado y error
  }} else{
    return {
      message: 'Error',
      success: false,
      code: 400
  }}
}
@Put(':id')
putSong(@Param('id') id: string, @Body() body: any){

  try {
    const parsedId = parseInt (id, 10);
    const editSuccess  = this.songsService.updateSongById(parsedId, body );
  if(editSuccess){
    return {
      message: 'Cancion editada correctamente',
      success: true,
      code: 200
//registro no borrado y error
  }} else{
    return {
      message: 'Error',
      success: false,
      code: 400
  }}
  } catch (error) {
    throw new Error (error)
  }
}
}


