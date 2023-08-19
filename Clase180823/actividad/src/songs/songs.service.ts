import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';
import { readParse, createId } from '../utils/ultils';

@Injectable()
export class SongsService {
    private songs = join(__dirname, '../../data/songs.json')

    getAll() {
        return this.songs
    }

    async create(song: any) {
        //1 implementar logica para id -> en utils
        //2 parsear el json para iterarlo -> en utils
        //3 agregar el song
        //4 guardarlo
        try {
            const id = createId()
            const data = readParse()
            //3 agregar el song
            const newSong = { id: id, ...song }
            data.push(newSong);
            //4 guardarlo
            fs.writeFileSync(this.songs, JSON.stringify(data, null, 2));
        } catch (error) {
            throw new Error(error)
        }
    }

    // por parametro tomamos lo que llega
    deleteSongById(id: string) {
        try {
            // traer los datos
            const data = readParse();
            // buscar ubicacion del dato a borrar usando el findeIndex()
            // dentro de song hay una propiedad id que es de tipo number
            // el id de song tiene que ser identico al que llega por parametro
            // si concide guardalo en songFound
            const songFound = data.findIndex((song: { id: number }) => song.id === Number(id))
            // verificar si encontro el song
            if (songFound >= 0) {
                //splice (starter, deleteCount) = borrar el registro
                data.splice(songFound, 1)
                //guardar el array de songs en el archivo json
                fs.writeFileSync(this.songs, JSON.stringify(data, null, 2));
                return true;
            } return false;
        } catch (error) {
            throw new Error(error)
        }
    }

    updateSongById(id: number, body: any) {
       try {
        const data = readParse();
        const index = data.findIndex((song: { id: number }) => song.id === Number(id))
        if (index >= 0) {
            //guardar en una costante el nuevo objeto
            //se pasa la data original que este en el indice que coincide con el id
            // la data nueva y el id    
            const editedSong = { ...data[index], ...body, id }
            data[index] = editedSong
            return true;
        } return false;
    } catch (error) {
        throw new Error(error)
    }
    }
}