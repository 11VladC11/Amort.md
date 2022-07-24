import styled from "styled-components";

export const FooterWrapper = styled.div`
	width: 100%;
	background: linear-gradient(180deg, #050F1E 0%, #050B1E 100%);
	box-shadow: 0px 8px 31px rgba(119, 119, 119, 0.05);
	height: 2rem;
	box-sizing:border-box ;
	@media screen and (min-width:1000px){
		height: 3rem;
	}
`

export const FooterContainer = styled.div`
width	:20.428571rem ;
margin:0 auto ;
height: 100%;
display:flex ;
align-items:center ;
justify-content:center ;
	@media screen and (min-width:1000px){
		width: 77rem ;
		margin:0 auto ;
	}
color:#BDBDBD ;
	font-size:0.6rem  ;
	font-weight:500 ;
	@media screen and (min-width:1000px){
	font-size:0.875rem ;
	}
	a{
		margin-left:0.2rem ;
		color: white;
		text-decoration:none ;
		opacity:1 ;
		transition:all 0.3s ease ;
		&:hover{
			opacity:0.5 ;
			text-decoration:none ;
		}
	}

`




