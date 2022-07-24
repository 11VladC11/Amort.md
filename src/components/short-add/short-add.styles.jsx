import styled from "styled-components";
import { BaseButton } from "../button/button.styles";
import { Telephone } from "../preview-page/preview-page.styles";

export const ShortAddWrapper = styled.div`
box-sizing:border-box ;
width: 100%;
height: 13.25rem;
.mob{
	display:none ;
}
background: linear-gradient(89.56deg, rgba(107, 92, 209, 0) 75.92%, #8171E3 82.66%), 
				linear-gradient(89.56deg, #8171E3 41.21%, rgba(107, 92, 209, 0) 62.58%), url(car-doctor-with-stethoscope-car-showroom.jpg), 
				linear-gradient(90.26deg, rgba(129, 113, 227, 0.1) 0%, rgba(107, 92, 209, 0.1) 100%);

@media screen and (max-width:1000px){
	position: relative;
	/* display:none ; */
	/* padding: 1.714285rem; */
	.mob{
	display:block;

}
.mob{
	position:absolute ;
	top:0 ;
	right:0 ;
	z-index:-1 ;
		img{
	height: 13.25rem;
	@media screen and (max-width:1000px){
		height:100% ;
		margin:0 auto;
	}
	}
	@media screen and (max-width:1000px){
		overflow:hidden; 
		height:100% ;
		
		width:100%;
		 overflow-x:hidden;
    display: flex;
    justify-content: center;
}
}
.pc{
	display:none;
}
background: linear-gradient(90.26deg, rgba(129, 113, 227, 0.6) 0%, rgba(107, 92, 209, 0.6) 100%);
	box-sizing:border-box;
		height:17rem;

}
`

export const ShortAddContainer = styled.div`
position: relative;
	width: 77rem ;
	margin:0 auto ;
	@media screen and (max-width:1000px){
		box-sizing:border-box ;
		flex-direction:column ;
		height:100% ; 
		width	:20.428571rem ;
		margin:0 auto ;
		padding:2.28rem 0 0 0;
	}
`

export const AddContainer = styled.div`
	margin-left:9.75rem ;
	width: 31.75rem;
	@media screen and (max-width:1000px){
		width: 100%;
		box-sizing:border-box ;
		margin-left:0rem ;
		/* padding:1.714285rem; */
	}
	`

export const AddInfo = styled.div`
padding-top	:1.1875rem ;
	@media screen and (max-width:1000px){
		padding-top:0rem ;
	}
	
h2{
	font-size: 1.5rem;
    margin-block-start: 0em;
    margin-block-end: 0em;
	 font-weight:500 ;
	 color:#F8F8F8 ;
	 margin-bottom:0.8rem ;
	@media screen and (max-width:1000px){
		font-size:1.428571rem ;
	}
	 
}
@media screen and (max-width:1000px){
		text-align:center;
	}
span{
	font-weight:400 ;
	color: #E9E9E9;
	font-size:1rem ;
	line-height:1.4rem ;

}
`

export const AddContacts = styled.div`
margin-top: 1.5rem;
display:flex ;
align-items: center ;
@media screen and (max-width:1000px){
margin-top: 1.5rem;
a{
	button{
		width: 9.285714rem;
		height: 3.285714rem;
	}
}
}
`

export const BackgroundImage = styled.div`
	position:absolute ;
	top:0 ;
	right:0 ;
	z-index:-1 ;
	
	img{
	height: 13.25rem;
	@media screen and (max-width:1000px){
		height:17rem ;
		margin:0 auto;
	}
	}
	@media screen and (max-width:1000px){
		overflow:hidden; 
		height:17rem ;
		
		width:100%;
		 overflow-x:hidden;
    display: flex;
    justify-content: center;
}

`

export const ButtonViolet = styled(BaseButton)`
	background: linear-gradient(96.18deg, #644EE6 1.56%, #5544BB 86.86%);
	box-shadow: 0px 9px 14px rgba(20, 52, 167, 0.25);
	width:auto ;
	height:auto ;
	font-size:1rem ;
	padding: 1.25rem 1.5rem;
	font-weight:500 ;
`

export const TelephoneAdd = styled(Telephone)`
margin-bottom:0rem ;
`