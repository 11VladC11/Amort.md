import styled from "styled-components";

export const FooterWrapper = styled.div`
	width: 100%;
	background: linear-gradient(180deg, #050F1E 0%, #050B1E 100%);
	box-shadow: 0px 8px 31px rgba(119, 119, 119, 0.05);
	box-sizing:border-box ;
	/* @media screen and (min-width:1000px){
		height: 3rem;
	} */
`

export const FooterContainer = styled.div`
width	:20.428571rem ;
margin:0 auto ;
	box-sizing:border-box ;

height: 100%;
text-align:center ;
padding:0.5rem 2.5rem ;
line-height:0.8rem ;
	@media screen and (min-width:1000px){
		width: 77rem ;
		margin:0 auto ;
		padding:1rem  ;
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




