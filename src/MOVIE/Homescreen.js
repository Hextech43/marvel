import React from 'react'
import styled from "styled-components"
import Bodyview from './Bodyview'
import Bodyfile from './Bodyfile'
import HeaderComp  from './HeaderComp'

const Homescreen = () => {
    return (
       <Container>
          <HeaderComp/>
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
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;


}

`

