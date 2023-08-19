import * as fs from 'fs';
import { join } from 'path';

 //2 parsear el json para iterarlo
export function readParse(){
    const songs = join (__dirname, '../../data/songs.json')
    const fileContent = fs.readFileSync(songs, 'utf-8');
    return JSON.parse(fileContent);
}

//1 implementar logica para id
export function createId(){
    const songs = readParse();
    const lastId = songs[songs.lenght - 1];
    const id = lastId.id + 1;
    return id;
}