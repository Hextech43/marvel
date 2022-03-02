import React,{useState} from 'react'
import styled from "styled-components"
import{CgMenu} from "react-icons/cg";


const HeaderComp = () => {
 const [show, setShow] = useState(false)
const handleShow =()=>{
    setShow(!show)
}
    return(
    <>
            <Container>
                <Logo   src="/images/logo.png"/>
                   
               
                <Wrapper>
                    <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                    </a>

                    <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                    </a>

                    <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                    </a>

                    <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINAL</span>
                    </a>

                    <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                    </a>

                    <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                    </a>
                </Wrapper>

                <UserFace>
                    <img src="/images/girl.jpg" />
                    <span>LogOut</span>
                </UserFace>
                <Menu onClick={handleShow}/>
            </Container>
            {
            show?(
                <>
                <SubMenu onClick={()=>{setShow(!show)}}>
                
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                    </a>

                    <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                    </a>


                    <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                    </a>

                    <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINAL</span>
                    </a>

                    <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                    </a>

                    <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                    </a>
                    <SubUser>
                    <img src="/images/girl.jpg" />
                    <span>LogOut</span>
                    </SubUser>
                </SubMenu>
                </>
               
                ):null
                }
               
            </>
    )
}

export default HeaderComp



const SubUser=styled.div`

display:flex;
height:100px;
justify-content:space-between;
align-items:center;
padding:0px 30px;

img{
    width:50px;
    height:50px;
 
    object-fit:cover;
    border:2px solid white;
}

span{
    font-size:15px;
    font-weight:bold;
}
`


const Menu=styled(CgMenu)`
display:none;

@media screen and (max-width: 760px){
    display:flex; 
    font-size:30px;
    padding-right:30px;
    cursor:pointer;

}
`

const UserFace=styled.div`
width:100%;
height:70px;
display:flex;
align-items:flex-end;
flex-direction:column;
margin-top:15px;
margin-right:30px;
cursor:pointer;

img{
    width:40px;
    height:40px;
    object-fit: cover;
    border-radius:50%;
}
span{
    display:none;
    opacity:1;
   
}
&:hover{
    span{
    font-size:12px;
    font-weight:bold;
    display:block;
    opacity:0;
    transition: all 350ms;
}
&:hover{
    span{
        opacity:1
    }
}
}
@media screen and (max-width: 760px){
    display:none
}
`;


const SubMenu =styled.div`
display:none;

@media screen and (max-width:768px){
    width:250px;
    height:80%;
    background-color:#090b13;
    float:right;
   ;
    display:flex;
    flex-direction:column;
    padding-left:20px;
    z-index: 1;
    opacity: 0.6;
    a{
        width:100%;
        height:40px;
        display:flex;
        align-items:center;
        margin-top:30px;
        img{
          width:25px;
          height:25px;
          object-fit:15px;
          opacity:0.4;
          transition:all 350ms;  
        }
        span{
            margin-left:30px;
            text-transform:uppercase;
            font-weight:bold;
            color:rgba (249,249,249,0.6);
        }
        &:hover{
            cursor:pointer;
            span{
                color:white;
            }
            img{
                opacity:1;            }
        }

        }
    }

`

const Container= styled.main`
width:100vw;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
// align-items:center;
`

const Logo= styled.img`
width:50px;
object-fit:contain;
margin-left:30px;
align-items:center;

`

const Wrapper=styled.div`
display:flex;
margin-left:20px;
// flex:1;



a{
height:100%;
width:100%;
display:flex;
align-items:center;
cursor:pointer;
margin-left:20px;


img{
    width:20px;
    height:20px;
    object-fit:contain;
}
span{
    font-weight:bold;
    font-size:15px;
    margin-left:5px;
    position:relative;
    letter-spacing:1.2px;
    text-transform:uppercase;
    color: rgba(249,249,249,0.4);

          &:after{
        content:"";
        height:2px;
        background-color:rgba(249,249,249,0.4);
        position:absolute;
        // top:0;
        left:0;
        right:0;
        bottom:-3px;
        opacity:0;
        transition: all 450ms cubic-bezier(0.25,0.46,0.45,0.95) 0s;
        transform:scaleX(1);
        transform-origin:ceneter left;

   }

}
&:hover{
    cursor:pointer;
    span{
        color:white;
    }
    span:after{
        opacity:1;
        background-color:white;
        transform: scaleX(1.2);

    }

}

@media screen and(max-width: 760px){
    display:none;
}
`

