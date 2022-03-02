import React from 'react'
import styled from "styled-components"

const Bodyview = () => {
    return (
       <Container>
           <Wrapper>
            <img src="/images/viewers-disney.png"/>
            <video
            type="video/mp4"
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            src="/videos/disney.mp4"/>

           
           </Wrapper>


           <Wrapper>
            <img src="/images/viewers-marvel.png"/>
            <video
            type="video/mp4"
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            src="/videos/marvel.mp4"/>
           </Wrapper>
           <Wrapper>
            <img src="/images/viewers-national.png"/>
            <video
            type="video/mp4"
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            src="/videos/geographic.mp4"/>
           </Wrapper>

       </Container>
    )
}

export default Bodyview

const Container = styled.div`
display:grid;
grid-template-columns: repeat(3,minmax(0,1fr));
grid-gap:20px;
margin:20px;
`;
const Wrapper =styled.div`
width:100%;
height:100%;
border: 3px solid rgba(249, 249, 249, 0.8);
border-radius:10px;

transform: scale(1);
position:relative;
img{
    object-fit:contain;
    width:100%;
    height:100%;
    opacity:1;

}
video{
position:absolute;
object-fit:contain;
width:100%;
height:100%;
 left:0;
 top:0;
 z-index:-1;
 opacity:0;
}
&:hover{
    cursor:pointer;
    transform: scale(1.06);
    transition: all 350ms;
    box-shadow:rgb(0 0 0/69%)  0 15px 35px -10px;
    border-color:white;

    img{
        opacity:0;
    }
    video{
        opacity:1;
    }
   

}
`;