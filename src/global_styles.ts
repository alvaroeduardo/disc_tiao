import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
`;

export const Title = styled.h1`
    width: 20rem;
    height: auto;
    padding: 1rem;
    background-color: #f5f6fa;
    color: #2f3640;
    font-size: 2rem;
    text-align: center;
    align-items: center;
    position: absolute;
    top: 13rem;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    font-weight: bold;
    color: white;
    background-color: #4cd137;
    border: .2rem solid #44bd32;
    border-radius: 1rem;
    transition: .1s;
    &:hover{
        transition: .1s;
        background-color: #44bd32
    };
    cursor: pointer;
    outline: none;
    width: 100%;
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    width: 100%;
    height: auto;
    padding: .5rem;
    outline: none;
    margin-bottom: 1rem
`;

export const ImgLogo = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer
`;