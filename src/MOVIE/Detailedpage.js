import React, {Fragment,useState,useEffect}from 'react'
import styled from "styled-components"
import {useParams} from "react-router-dom"
import movieData from "./Movie.json"

const Detailedpage = () => {
    const {id}=useParams()
    console.log("This is id" ,id);

    const [film,setfilm] = useState([])

    const getData=()=>{
        const res = movieData[id-1];
        console.log(res);
        setfilm(res);

    };
    useEffect(()=>{
        getData();
    },[]);
    console.log(film)
    return (
        <Fragment>

        <Background src={film && film.backgroundImg}/>
        <Title src={film && film.titleImg}/>
        <ButtonHolder>
            <PlayButton>
                <img src="/images/play-icon-black.png"/>
                <span>Play</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png"/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton1>
                <span>+</span>
                </AddButton1>
            <AddButton2 src="/images/group-icon.png" ></AddButton2>
        </ButtonHolder>
        <Description>{film && film.title}</Description>
        <Detail>{film && film.description}
</Detail>
        </Fragment>
  
    );
};

export default Detailedpage


const Detail=styled.div`
position:absolute;
top:0;
margin-top:450px;
left:50px;
max-width:900px;
text-transform:uppercase;
font-weight:bold;
letter-spacing:1.0px;
font-size:13px;

`;

const Description =styled.div`
position:absolute;
top:0;
margin-top:400px;
text-transform:uppercase;
font-weight:bold;
letter-spacing:1.0px;
opacity:0.7;
left:50px;
`;

const ButtonHolder =styled.div`
display:flex;
position:absolute;
top:0;
margin-top:300px;
left:50px;

`;

const PlayButton=styled.div`
font-size:30px;
display:flex;
width:140px;
height:50px;
align-items:center;
justify-content:center;
border-radius:6px;
background-color:white;
color:black;
transform:scale(1);
transition:all 350ms;
margin:10px;


span{
margin-left:10px;
}

&:hover{
    cursor:pointer;
    background-color:rgba(249,249,249,0.8);
    transform:scale(1.02)
}
`;

const TrailerButton = styled.div`
font-size:30px;
display:flex;
width:140px;
height:50px;
align-items:center;
justify-content:center;
border-radius:6px;
background-color:rgba(249,249,249,0.4);
color:white;
transform:scale(1);
transition:all 350ms;
margin:10px;
border:2px solid white;


span{
    margin-left:10px;
    }
    
    &:hover{
        cursor:pointer;
        background-color:white;
        transform:scale(1.02)
    }

`;

const AddButton1 = styled.div`
width:50px;
height:50px;
border-radius:25px;
border: 2px solid white;
display:flex;
align-items:center;
margin-left:30px;
background-color: rgba(0,0,0,0.6);
justify-content:center;
cursor:pointer;


span{
    width:50px;
    height:50px;
    font-size:50px; 
    padding-bottom:30px;
    padding-left:8px;
    mergin-top:0;
}
`;

const AddButton2 = styled.img`
width:50px;
height:50px;
border-radius:25px;
border: 2px solid white;
display:flex;
align-items:center;
margin-left:20px;
background-color: rgba(0,0,0,0.6);
justify-content:center;
`;

const Background = styled.img`
width:99.9vw;
heigth:99.7vh;
obect-fit:cover;

opacity:0.;
position:relative;
`;

const Title = styled.img`
width:300px;
height:250px;
object-fit:contain;
position:absolute;
top:0;
left:50px
`