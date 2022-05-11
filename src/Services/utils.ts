import { api } from "./api"; 

export async function getAlbums(){
    try {
        const request = await api.get('/album');

        return request.data;
    } catch (error) {
        return null;
    }
}