import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: 100%;
    background-color: #f5f6fa;
    padding: 2.5rem 2rem;
    margin-bottom: 1.5rem
`;

export const TitleAlbum = styled.h1`
    color: #273c75;
    font-size: 1.3rem;
    margin-bottom: 1rem;
`;

export const Thead = styled.thead`
    text-align: justify;
`;

export const Table = styled.table`
    width: 100%;
    margin-bottom: 2rem;
`;

export const HeaderAlbum = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: .5rem
`;

export const ButtonContainer = styled.div`
    width: auto;
    height: auto;
    background: none;
`;

export const ButtonS = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-weight: bold;
    color: white;
    background-color: #487eb0;
    border: .2rem solid #40739e;
    border-radius: 1rem;
    transition: .1s;
    &:hover{
        transition: .1s;
        background-color: #40739e
    };
    cursor: pointer;
    outline: none;
    width: 7rem;
    height: 1rem
`;

export const ImageAdd = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 5px;
`;

export const Text = styled.p`
    font-size: 12px
`;
