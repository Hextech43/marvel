import React from 'react'
import styled from "styled-components"
import Bodyview from "./Bodyview"
import Bodyfile from './Bodyfile'

const Homescreen = () => {
    return (
      <Container>
         <Bodyview/>
         <Bodyfile/>
      </Container>
    )
}

export default Homescreen

const Container=styled.main`

height:100vh;
width:100vw;
position:relative;



&:before{
    content:"";
    background:url("/images/home-background.png")
    center center / cover fixed no-repeat;
    top:0;
    left:0;
    bottom:0;
    right:0;
    position:fixed;
    z-index:-1;

}
`;