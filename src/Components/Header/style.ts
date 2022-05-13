import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1
`;

export const Img = styled.div`
    width: 100%;
    height: 15rem;
    background: url(${props => props.theme}) center no-repeat;
    background-size: cover;
    -webkit-box-shadow: 0px 12px 12px -12px #000000; 
    box-shadow: 0px 12px 12px -12px #000000;
`;