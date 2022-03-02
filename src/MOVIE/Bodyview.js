import React from 'react'
import styled from "styled-components"

const Bodyview = () => {
  return (
   <Container>
     <Wrapper>
       <img src="/images/viewers-disney.png"/>
       <video
       type="video/mp4"
       loop={true}
       autoPlay={true}
       muted
       playsInline={true}
       src="/videos/disney.mp4"
       />
     </Wrapper>
     <Wrapper>
       <img src="/images/viewers-marvel.png"/>
       <video
       type="video/mp4"
       loop={true}
       autoPlay={true}
       muted
       playsInline={true}
       src="/videos/marvel.mp4"
       />
     </Wrapper>
     <Wrapper>
       <img src="/images/viewers-national.png"/>
       <video
       type="video/mp4"
       loop={true}
       autoPlay={true}
       muted
       playsInline={true}
       src="/videos/geographic.mp4"
       />
     </Wrapper>
   </Container>
  )
}

export default Bodyview

const Container =styled.div`
display:grid;
grid-template-columns:repeat(3,minmax(0,1fr));
grid-gap:20px;
margin:20px;

`;
const Wrapper=styled.div`
border:3px solid rgba(249,249,249,0.5);
border-radius:10px;
transition: all 350ms;
box-shadow:rgb(0 0 0/69% ) 0px 26px 30px -10px;
position:relative;
img{
  width:100%;
  height:100%;
  object-fit:cover;
  opacity:1;
}
video{ 
  width:100%;
  height:100%;
  object-fit:cover;
  position:absolute;
  left:0;
  border-radius:10px;
  z-index:-1;
  opacity:0
}
&:hover{
cursor:pointer;
transform:scale(1.06);
border-color:white;
box-shadow:rgb(0 0 0/69% ) 0px 26px 30px -10px,
rgb(0 0 0/73% ) 0px 16px 10px -10px;

img{
  opacity:0;
}

video{
  opacity:1;
}
}
`;