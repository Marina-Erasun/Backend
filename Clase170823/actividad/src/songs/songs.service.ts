import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';
import { readParse,createId  } from '../utils/ultils';

@Injectable()
export class SongsService {

    private songs =  join (__dirname, '../../data/songs.json')
   
    getAll(){
        return this.songs
    }
    
    async create(song: any){
    //1 implementar logica para id -> en utils
    //2 parsear el json para iterarlo -> en utils
    //3 agregar el song
    //4 guardarlo
        try{
        const id = createId()
        const data = readParse()
        //3 agregar el song
        const newSong= {id: id, ...song}
        data.push(newSong);
        //4 guardarlo
        fs.writeFileSync(this.songs, JSON.stringify(data, null, 2) );
    } catch (error){
        throw new Error(error)
    }
}
}
