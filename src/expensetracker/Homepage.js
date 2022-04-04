import React from 'react'
import styled from "styled-components"

const Homepage = () => {
  return (
  <Container>
      <Title>My Budget Planner</Title>
<MainCard>
<Buttons>
    <Budget>Budget: #300,000
    </Budget>
    <Remain>Remaining: #150,000</Remain>
    <Spent>Spent so far: #150,000</Spent>
</Buttons>
<Sub>Add Expenses</Sub>
<Inputer>
<Name>
    <span>Name</span><br/>
    <input/>
</Name>
</Inputer>

</MainCard>
  </Container>
  )
}

export default  Homepage

const Name = styled.div``
const Inputer = styled.div``;
const Sub = styled.div`
font-size: 20px;
font-weight: 500;
margin-top: 40px;
padding-left: 10px ;
`;
const Spent = styled.div`
display:flex ;
align-items: center ;
font-size: 14px;
justify-content: center ;
height: 50px;
width:150px ;
font-weight: 500;
background-color:#E2E3E5;
border-radius: 5px;

`


const Remain = styled.div`
font-size: 15px ;
display:flex ;
align-items: center ;
justify-content: center ;
height: 50px;
width:150px ;
font-weight: 500;
background-color:#D4EDDA;
border-radius: 5px;

`
const Budget = styled.div`
display:flex ;
align-items: center ;
justify-content: center ;
height: 50px;
width:150px ;
font-weight: 500;
background-color:#CCE5FF;
border-radius: 5px;

`

const Buttons = styled.div`
width: 80%;
height: 70px;
display:flex ;
align-items: center;
justify-content: space-around ;
padding-top:10px ;
`;
const Title = styled.div`
color:white ;
font-size: 30px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Open Sans', 'Helvetica Neue',;
font-weight:bold ;
margin-bottom: 60px ;

`
const MainCard = styled.div`
height: 500px;
width: 800px;
background-color:white;
border-radius: 10px;
display:flex ;
flex-direction: column;
`

const Container = styled.div`
background-color:#009DDB ;
height:100vh;
width:100vw;

display:flex;
/* justify-content: center ; */
align-items:center ;
flex-direction: column;

`