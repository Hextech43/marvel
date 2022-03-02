import React from 'react'
import styled from "styled-components"

const Bodyfile = () => {
    return (
       <MainContainer>
           <Description>
        RECOMMENDED JUST FOR YOU
           </Description>
           <Container>
        <Wrapper>
    <img src="/images/44.jpg"/>
        </Wrapper>
        <Wrapper>
    <img src="/images/44.jpg"/>
        </Wrapper>
        <Wrapper>
    <img src="/images/44.jpg"/>
        </Wrapper>
        <Wrapper>
    <img src="/images/44.jpg"/>
        </Wrapper>
           </Container>
       </MainContainer>
    )
}

export default Bodyfile

const MainContainer=styled.div`
margin:20px;
`;

const Description=styled.div`
margin-left:20px;
margin-top:40px;
margin-bottom:40px;
font-size:20px;
font-weight:bold;
`;

const Container=styled.div`
display:grid;
grid-template-columns:repeat(4, minmax(0,1fr));
grid-gap:10px;
`;
const Wrapper=styled.div`
border:3px solid rgba(249,249,249,0.5);
border-radius:7px;
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
box-shadow:rgb(0 0 0/69% ) 0px 26px 30px -10px;
position:relative;

img{

        width:100%;
        height:100%;
        object-fit:cover;
        z-index:-1;
        border-radius:7px;
      
      
}
&:hover{
    cursor:pointer;
    transform: scale(1.06);
    transition: all 350ms;
    box-shadow:rgb(0 0 0/69%)  0 15px 35px -10px;
    border-color:white;s
`;
