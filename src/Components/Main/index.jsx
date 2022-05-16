import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

import List from '../List';

import { Container, ImageAdd } from './styles';
import { Button, Input } from '../../global_styles';
import addIcon from '../../Img/add.svg';
import { insertAlbum, reload } from '../../Services/utils';

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
  
Modal.setAppElement('#root');

function Main() {
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const { register, handleSubmit } = useForm();

    async function onSubmit(data){
        try {
            await insertAlbum(data);
            location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    function isOpen(){
        setIsOpen(true);
    };

    function isClosed(){
        setIsOpen(false);
    }

    return (
        <Container>
            <Button onClick={isOpen}>
                <ImageAdd src={addIcon} />
                Adicionar novo Álbum
            </Button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={isClosed}
                style={customStyles}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Insira o título do Álbum:</p>
                    <Input type="text" placeholder='Insira o nome do Álbum' {...register("name")}/>

                    <p>Insira o ano do Álbum:</p>
                    <Input type="text" placeholder='Insira o ano do Álbum' {...register("year")}/>

                    <Button type="submit">Enviar</Button>
                </form>
            </Modal>

            <List/>
        </Container>
    );
}

export default Main;