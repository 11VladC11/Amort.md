import styled from "styled-components";

export const ContactContainer = styled.div`
box-sizing:border-box ;
	padding-left:4.375rem;
position:relative ;
width:50% ;
height:auto ;
z-index:5 ;
	@media screen and (max-width:1000px){
	width: 100%;
	padding-left:0rem;
	padding-top:3rem ;

	}
ul{
	margin-block-start: 2.4rem;
	margin-block-end: 0em;
	    padding-inline-start: 0px;
		 li{
			display:flex ;
			align-items:center ;
			gap:0.65rem;
			margin-bottom:1.1875rem ;
			font-size:1rem ;
			img{
				width: 1rem;
			}
		 }
}
h2{
	margin-block-start: 0em;
    margin-block-end: 0em;
	 font-weight:500 ;
}
.background{
	position:absolute ;
		top: 2.5rem;
		z-index:-1 ;
		width: 47.5rem;
		height: 30.839375rem;
		border-radius:333rem ;
		background: linear-gradient(180deg, #CFA717 0%, #CF1717 26.56%, #3C17CF 68.23%, #1761CF 100%);
		filter: blur(10.375rem);
		@media screen and (max-width:1000px){
			width: 100%;
		filter: blur(6.375rem);

		}
	}
`
export const Contacts = styled.div`

`
export const GoogleMaps = styled.div`
	img{
		width: 100%;
	}
`

export const Attention = styled.div`
margin-top:1rem ;
	display:flex ;
	align-items:flex-start ;
	gap:0.5625rem ;
	background: #E8864D;
border-radius: 0.75rem;
font-size:0.875rem ;
padding:0.6875rem 1.125rem ;
`