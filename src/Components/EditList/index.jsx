import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

import { Container, TitleAlbum, Thead, Table, HeaderAlbum } from './styles';
import { Button, Input, ImgLogo } from '../../global_styles';
import { getAlbumData, insertFaixa, deleteAlbum, deleteTrack } from '../../Services/utils';

import rmvImg from '../../Img/remove.svg';
import backImg from '../../Img/back.svg';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 1000
      },
      content: {
        position: 'absolute',
        top: '25%',
        left: '40%',

        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        width: '20rem',
        height: '20rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
};

function EditList() {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('keyword');
    
    const [data, setData] = useState([]);
    const [registerOpen, setRegisterOpen] = useState(false);
    
    const { register, handleSubmit } = useForm();

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

    function handleRegisterModalOpen(){
        setRegisterOpen(true)
    }

    function handleRegisterModalClose(){
        setRegisterOpen(false)
    }
    

    const response = data.data;

    async function onSubmitTrack(data){
        try {
            data.album_id = response[0].id;
            await insertFaixa(data);
            location.reload();
        } catch (error) {
            return error;
        }
    }

    async function deleteA(data){
        try {
            await deleteAlbum(data);
            window.location.href = "http://localhost:3000"
        } catch (error) {
            return error;
        }
    }

    async function deleteT(data){
        try {
            await deleteTrack(data);

            location.reload();
        } catch (error) {
            return error;
        }
    }

    return (
        <Container>
            {
                response?.map((d)=>{
                    const tracksResponse = d.tracks;

                    return (
                        <>
                            <HeaderAlbum>
                                <TitleAlbum>??lbum: {d.name}, {d.year}</TitleAlbum>
                                <ImgLogo onClick={()=>{window.location.href = "http://localhost:3000"} } src={backImg}/>
                            </HeaderAlbum>

                            <Table>
                                <Thead>
                                    <tr>
                                        <th>N??</th>
                                        <th>Faixa</th>
                                        <th>Dura????o</th>
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
                                                    <td><ImgLogo src={rmvImg} onClick={() =>{deleteT(e.id)}}/></td>
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
    
            <Button onClick={()=>{handleRegisterModalOpen()}}>Adicionar nova faixa</Button>
            <Button onClick={()=>{deleteA(response[0].id)}}>Excluir ??lbum</Button>

                <Modal 
                    isOpen={registerOpen} 
                    ariaHideApp={false} 
                    style={customStyles} 
                    onRequestClose={handleRegisterModalClose}
                >
                    <form onSubmit={handleSubmit(onSubmitTrack)}>
                        <Input type="number" placeholder="N??mero da faixa" {...register("number")}/>
                        <Input type="text" placeholder="T??tulo da faixa" {...register("title")}/>
                        <Input type="number" placeholder="Dura????o da faixa em segundos" {...register("duration")}/>

                        <Button type="submit">
                            Enviar
                        </Button>
                    </form>
                </Modal>
        </Container>
    );
}

export default EditList;