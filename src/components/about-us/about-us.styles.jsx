import styled from "styled-components";

export const AboutUsWrapper = styled.div`
position:relative ;
	width: 100%;
	height: 45rem;
	background: #E5EFFE;
	color: #091427;
	@media screen and (max-width:1000px){
/* display	: none; */
	height: 100%;
	padding:1.714285rem;
	box-sizing:border-box;
}
`

export const AboutUsContainer = styled.div`
height: 100%;

	width: 77rem ;
	margin:0 auto ;
	display:flex ;
	align-items: center;
	@media screen and (max-width:1000px){
		flex-direction:column-reverse ;
		width	:20.428571rem ;
		margin:0 auto ;
	}
`

export const AboutUsImg = styled.div`
	@media screen and (max-width:1000px){
		margin-top:2rem ;
	}
	img{
		width: 38rem;
	@media screen and (max-width:1000px){
		width: 100%;
	}
	}
`

export const AboutUsInfo = styled.div`
margin-left:1.5rem ;
	@media screen and (max-width:1000px){
		margin-left:0 ;
	}
`

export const AboutUsText = styled.div`
	h2{
		font-size:1.5rem ;
		font-weight:500 ;
	@media screen and (max-width:1000px){
		font-size:1.428571rem ;
	}
	}
	p{
		font-size:1rem ;
		font-weight:400 ;
		margin-bottom:2rem ;
		span{
			font-weight:500 ;
		}
	}
`
export const AboutUsContacts = styled.div`
	display: flex;
	align-items:center ;
	gap:1rem;
	@media screen and (max-width:1000px){
		flex-direction:column ;
	}
	.purpleBtn{
		display: flex;
		align-items: center;
		padding: 1.25rem 1.5rem;
		gap: 0.625rem;
		height: 3.1875rem;
		border-radius: 0.75rem;
		color:#174BCF ;
		border:none;
		font-size:1rem ;
		font-weight:500 ;
		outline:none ;
		background-color:transparent;
		font-family: 'Rubik', sans-serif;
		transition: all 0.3s ease;
		img{
			width: 1.125rem;
		}
&:hover{
		transition: all 0.3s ease;

	background-color:#DCDEFA ;
}
	}
`
export const SmokeEffect = styled.div`
	position:absolute ;
	bottom: -0.25rem;

	left:0 ;
	img{
		width: 22.5rem;
	@media screen and (max-width:1000px){
		width: 8.571428rem;
	}
		
	}
`