import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";

import { Container, TitleAlbum, Thead, Table, HeaderAlbum } from './styles';
import { getAlbumData } from '../../Services/utils';
import { Link } from "react-router-dom";


function EditList() {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('keyword');
    const [data, setData] = useState([]);
    

    const albums = getAlbumData(id);

    useEffect(
        () => {
            async function getData(){
                try {
                    const dataArray = await albums;

                    setData(dataArray);
                } catch (error) {
                    return error
                }
            }
            
            getData();
        }, []
    );

    const response = data.data;

    console.log(response);

    return (
        <Container>
{
                response?.map((d)=>{
                    const tracksResponse = d.tracks;
                    const link="/album?keyword=" + d.name;

                    return (
                        <>
                            <HeaderAlbum>
                                <TitleAlbum>Álbum: {d.name}, {d.year}</TitleAlbum>
                                {
                                // BOTÃO EXCLUIR ALBUM
                                }

                            </HeaderAlbum>

                            <Table>
                                <Thead>
                                    <tr>
                                        <th>Nº</th>
                                        <th>Faixa</th>
                                        <th>Duração</th>
                                        <th></th>
                                    </tr>
                                </Thead>
                                <tbody>
                                {
                                    tracksResponse?.map((e)=>{
                                        function secMin(secs){
                                            const min = secs / 60;

                                            return min.toString().replace(".", ":");
                                        }

                                        const minutos = secMin(e.duration);

                                        return (
                                            <>
                                                <tr>
                                                    <td>{e.number}</td>
                                                    <td>{e.title}</td>
                                                    <td>{minutos} min</td>
                                                    <td></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        </>
                    )
                })
            }
        </Container>
    );
}

export default EditList;