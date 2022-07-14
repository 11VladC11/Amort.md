import styled from "styled-components";

export const BaseButton = styled.button`
display: flex;
	font-family: 'Rubik', sans-serif;

flex-direction: row;
justify-content: center;
align-items: center;
padding: 1.25rem 1.5rem;
font-size:1rem ;
color: #ffffff;
font-weight:500 ;
width: 11.9375rem;
height: 3.1875rem;
border:none ;
outline:none ;
cursor:pointer ;
border-radius: 0.75rem;
transition:all 0.3s ease ;
background: linear-gradient(96.18deg, #1756CF 1.56%, #174BCF 86.86%);
box-shadow: 0px 0.5625rem 0.875rem rgba(20, 52, 167, 0.25);
&:hover{
transition:all 0.3s ease ;
box-shadow:none ;
}
	@media screen and (max-width:1000px){
	width: 100%;
padding: 1.25rem 1.5rem;
	width: 286px;
height: 46px;
	
	}	


`