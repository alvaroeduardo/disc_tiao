import { api } from "./api"; 

export async function getAlbums(){
    try {
        const request = await api.get('/album');

        return request.data;
    } catch (error) {
        return null;
    }
}

export async function insertAlbum(data: any) {
    try {
        const request = await api.post('/album', data);

        return request;
    } catch (error) {
        return null;
    }
}

export async function insertFaixa(data: any) {
    try {
        const request = await api.post('/track', data);

        return request;
    } catch (error) {
        return null;
    }
}

export async function getAlbumData(params: any) {
    try {
        const request = await api.get('/album?keyword='+params);

        return request.data;
    } catch (error) {
        return null;
    }
}

export async function deleteAlbum(params: any){
    try {
        const request = await api.delete(`/album/${params}`);

        return request;
    } catch (error) {
        return null;
    }
}

export async function deleteTrack(params: any) {
    try {
        const request = await api.delete(`/track/${params}`);

        return request;
    } catch (error) {
        return null;
    }
}