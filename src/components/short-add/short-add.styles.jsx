import styled from "styled-components";
import { BaseButton } from "../button/button.styles";
import { Telephone } from "../preview-page/preview-page.styles";
export const ShortAddWrapper = styled.div`
box-sizing:border-box ;
width: 100%;
height: 13.25rem;
background: linear-gradient(89.56deg, rgba(107, 92, 209, 0) 75.92%, #8171E3 82.66%), linear-gradient(89.56deg, #8171E3 41.21%, rgba(107, 92, 209, 0) 62.58%), url(car-doctor-with-stethoscope-car-showroom.jpg), linear-gradient(90.26deg, rgba(129, 113, 227, 0.7) 0%, rgba(107, 92, 209, 0.7) 100%);

`

export const ShortAddContainer = styled.div`
position: relative;
	width: 77rem ;
	margin:0 auto ;
`

export const AddContainer = styled.div`
	margin-left:9.75rem ;
	width: 31.75rem;
	`

export const AddInfo = styled.div`
padding-top	:2.1875rem ;
h2{
	font-size: 1.5rem;
    margin-block-start: 0em;
    margin-block-end: 0em;
	 font-weight:500 ;
	 color:#F8F8F8 ;
	 margin-bottom:1rem ;
	 
}
span{
	font-weight:400 ;
	color: #E9E9E9;
	font-size:1rem ;
}
`

export const AddContacts = styled.div`
margin-top: 1.5rem;
display:flex ;
align-items: center ;
`

export const BackgroundImage = styled.div`
	position:absolute ;
	top:0 ;
	right:0 ;
	z-index:-1 ;
	img{
	height: 13.25rem;
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