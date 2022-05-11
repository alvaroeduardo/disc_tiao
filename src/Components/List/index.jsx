import React, { useState, useEffect } from 'react';

import { Container, TitleAlbum, Thead, Table } from './styles';
import { getAlbums } from '../../Services/utils';

function List() {
    const [data, setData] = useState(['']);

    const albums = getAlbums();

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

    console.log(response)

  return (
        <Container>
            {
                response.map((d)=>{
                    const tracksResponse = d.tracks;

                    return (
                        <>
                            <TitleAlbum>Album: {d.name}, {d.year}</TitleAlbum>
                            <Table>
                                <Thead>
                                    <tr>
                                        <th>Nº</th>
                                        <th>Faixa</th>
                                        <th>Duração</th>
                                    </tr>
                                </Thead>
                                <tbody>
                                {
                                    tracksResponse.map((e)=>{
                                        return (
                                            <>
                                                <tr>
                                                    <td>{e.number}</td>
                                                    <td>{e.title}</td>
                                                    <td>{e.duration}</td>
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

export default List;