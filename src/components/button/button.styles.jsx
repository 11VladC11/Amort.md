import styled from "styled-components";

export const BaseButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 24px;
font-size:1rem ;
color: #ffffff;
font-weight:500 ;
width: 191px;
height: 51px;
border:none ;
outline:none ;
cursor:pointer ;
border-radius: 12px;
transition:all 0.3s ease ;
background: linear-gradient(96.18deg, #1756CF 1.56%, #174BCF 86.86%);
box-shadow: 0px 9px 14px rgba(20, 52, 167, 0.25);
&:hover{
transition:all 0.3s ease ;
box-shadow:none ;
}


`