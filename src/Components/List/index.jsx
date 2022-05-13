import React, { useState, useEffect } from 'react';

import { Container, TitleAlbum, Thead, Table, HeaderAlbum, ButtonContainer, ButtonS, Text, ImageAdd } from './styles';
import { getAlbums } from '../../Services/utils';

import addImage from '../../Img/add.svg'


function List() {
    const [data, setData] = useState([]);

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

    return (
        <Container>
            {
                response?.map((d)=>{
                    const tracksResponse = d.tracks;

                    return (
                        <>
                            <HeaderAlbum>
                                <TitleAlbum>Álbum: {d.name}, {d.year}</TitleAlbum>
                                
                                {
                                // BOTÃO EXCLUIR ALBUM
                                }

                                <ButtonContainer>
                                    <ButtonS >
                                        <Text>Inserir nova Faixa</Text>

                                        <ImageAdd src={addImage}/>
                                    </ButtonS>
                                </ButtonContainer>

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
                                                    <td>{/* BOTÃO PARA EXCLUIR FAIXA */}</td>
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