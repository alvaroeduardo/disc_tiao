import React, { useState, useEffect } from 'react';

import { Container, TitleAlbum, Thead, Table, HeaderAlbum } from './styles';
import { getAlbums } from '../../Services/utils';
import { ImgLogo, Input } from '../../global_styles';

import { Link } from "react-router-dom";

import editLogo from '../../Img/edit.svg';


function List() {
    const [data, setData] = useState([]);
    const [busca, setBusca] = useState('');

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

    const albumFilt = response?.filter((a)=>a.name.toLowerCase().includes(busca))

    console.log(albumFilt)
    
    return (
        <Container>
            <Input 
                type='text' 
                placeholder='Pesquise o Álbum'
                onChange={(ev)=>{setBusca(ev.target.value)}}
                value={busca}
            />
            {
                albumFilt?.map((d)=>{
                    const tracksResponse = d.tracks;
                    const link="/album?keyword=" + d.name;

                    return (
                        <>
                            <HeaderAlbum key={d.id}>
                                <TitleAlbum>Álbum: {d.name}, {d.year}</TitleAlbum>
                                <Link to={link}><ImgLogo src={editLogo} /></Link>

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
                                                <tr key={e.id}>
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

export default List;