import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';
import { readParse, createId } from '../utils/ultils';

@Injectable()
export class SongsService {
    private songs = join(__dirname, '../../data/songs.json')

getAll() {
    try {
        return readParse();
    } catch (error) {
        throw new Error('Cannot get data')
    }
}

async create(song: any) {
try {
    const newSong = { id: createId(), ...song }
    const data = readParse()
    data.push(newSong);
    fs.writeFileSync(this.songs, JSON.stringify(data, null, 2));
    return newSong
} catch (error) {
    throw new Error(error)
}
}

deleteSongById(id: string) {
try {
    const data = readParse();
    const songFound = data.findIndex((song: { id: number }) => song.id === Number(id))
    if (songFound >= 0) {
    data.splice(songFound, 1)
    fs.writeFileSync(this.songs, JSON.stringify(data, null, 2));
    return { success: true, message: `Song with id ${id}, was deleted` };
    } else {
    return { success: false, message: `Song with id ${id}, was not deleted` };
    }
} catch (error) {
    throw new Error(error)
}
}

updateSongById(id: number, body: any) : {data?: any, success: boolean, message: string } {
try {
    const data = readParse();
    const index = data.findIndex((song: { id: number }) => song.id === Number(id))
    if (index >= 0) {
    const editedSong = { ...data[index], ...body, id }
    data[index] = editedSong
    fs.writeFileSync(this.songs, JSON.stringify(data, null, 2));
    return { success: true, message: `Song with id ${id}, was edited`, data: editedSong };
    } return { success: false, message: `Song with id ${id}, was not found` };;
} catch (error) {
    throw new Error('Updated failed')
}
}

getById(id: number): { data?: any, success: boolean, message: string } {
    try {
    const data = readParse();
    const index = data.findIndex((song: { id: number }) => song.id === id)
    if (index >= 0) {
// retornamos la cancion si la encuentra en : data[index]
    return { success: true, message: 'song found', data: data[index] }
    } else return { success: false, message: 'song not found' }
} catch (error) {
    throw new Error('Error getting song');
}
}

}