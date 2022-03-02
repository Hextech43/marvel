import React from 'react'
import styled from "styled-components"
import MovieData from "./Movie.json"
import {Link} from "react-router-dom"

const bodyfile = () => {

  console.log(MovieData)
    return (
       <MainContainer>
        <Recommended>Recommended just for you</Recommended>
        <Container>
           {
               MovieData.map((movie)=>(
               <Wrapper key={movie._id}>
                    <Link
                    to={`detail/${movie._id}`}>
                    {/* to={`detail/${movie._id}`}> */}
                  <img src={movie.cardImg}/>
                  </Link>
                </Wrapper>
              
               ))}


        </Container>
       </MainContainer>
    )
}

export default bodyfile



const Links = styled.div``

const MainContainer= styled.div`
margin:20px;
`;
const Container = styled.div`
display:grid;
grid-template-columns:repeat(4, minmax(0,1fr));
grid-gap:10px;
`;
const Recommended =styled.div`
margin-left:20px;
margin-top:40px;
margin-bottom:40px;
font-size:20px;h
font-weight:bold;
`;
const Wrapper = styled.div`
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
    transform:scale(1.06);
    border-color:white;
    box-shadow:rgb(0 0 0/69% ) 0px 26px 30px -10px,
    rgb(0 0 0/73% ) 0px 16px 10px -10px;
`;

