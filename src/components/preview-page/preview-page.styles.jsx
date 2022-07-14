import styled from "styled-components";
export const PreviewPageWrapper = styled.div`
position:relative ;
	@media screen and (max-width:1000px){
		margin-top:10.714285rem ;
	}
`
export const PreviewPageContainer = styled.div`
	width: 77rem ;
	margin:0 auto ;
	height:45rem ; 
	position: relative;
	display:flex ;
	align-items: center ;
	@media screen and (max-width:1000px){
		flex-direction:column ;
		width: 100% ;
		margin:0;
		height:auto ; 


	}
`
export const PreviewPageInfo = styled.div`
	width: 31.5rem;
	margin-right:3.5rem ;
	@media screen and (max-width:1000px){
		width: 100% ;
		margin-right:0 ;
	}
`


export const InfoText = styled.div`
h1{
	font-size:2.5rem ;
	margin-bottom: 1.9375rem ;
	font-weight:500 ;
	@media screen and (max-width:1000px){
		font-size:1.714285rem ;
		text-align:center ;
		margin-block-start: 0em;
		margin-block-end: 1.8rem;

	}
	span{
		color: #E52B2B;
	}
}
span.intro{
	display:block ;
		width: 28.125rem;
		@media screen and (max-width:1000px){
			width: 80% ;
			margin:0 auto ;
			text-align:center ;
			font-size:1.142857rem ;
		}
}
`

export const InfoContacts = styled.div`
	display: flex;
	align-items:center ;
	margin-top:2.6875rem ;

	@media screen and (max-width:1000px){
		flex-direction:column ;
		width: 100%;
		text-align:center ;
		margin-top:2.5rem ;
		
		a{
		width: 100%;
			button{
				margin:0 auto 1.285714rem auto ;
			}
		}
	}
`

export const Telephone = styled.div`
margin-bottom:-0.5rem ;
	margin-left:1.5625rem ;
	padding-bottom:0.5rem ;
	border-bottom: 0.125rem solid #ffffff;
	border-radius:1px ;
	img{
		width:1.029375rem ;
		height:1.029375rem ;
		margin-right:0.798125rem ;
	}
	a{
		display:flex ;
		align-items:center ;
		
	}
	@media screen and (max-width:1000px){
		margin:0 auto ;
	border-bottom: 0.16rem solid #ffffff;

	}	
	`
export const Smoke = styled.div`
z-index:-1 ;
	position:absolute ;
	right: 0;
	bottom: -0.25rem;
	img{
		width: 29.25rem;
	}
	@media screen and (max-width:1000px){
			display:none ;
		}
	`
export const Car = styled.div`
img{
	width: 51.25rem;
	margin-left:2rem ;
	@media screen and (max-width:1000px){
	width:100% ;
	margin-left:0 ;
	position:relative ;
	}
}
z-index:2 ;
`
export const Trust = styled.div`
 img{
	 width:30.625rem ;
	 margin-top:-1.5rem ;
	 @media screen and (max-width:1000px){
		 width: 100% ;
		 margin-top:-1.2rem ;
		}
	}
	`
export const PreviewPageIllustration = styled.div`
	padding-top:9.5rem ;
	@media screen and (max-width:1000px){
		padding-top:3rem ;
		}
	.background{
		top: 2.5rem;
		position: absolute ;
		z-index:-1 ;
		width: 47.5rem;
		height: 39.839375rem;
		border-radius:333rem ;
		background: linear-gradient(180deg, #CFA717 0%, #CF1717 26.56%, #3C17CF 68.23%, #1761CF 100%);
		filter: blur(9.375rem);
		@media screen and (max-width:1000px){
			width: 100% ;
			height: 16.714285rem;
			filter: blur(4.375rem);
			top:0 ;

		}
	}
	
`

export const IllustrationMinus = styled.div`
	margin-right:-11rem ;
		@media screen and (max-width:1000px){
			width: 100% ;
			margin-right:0 ;
			position: relative;
		}
`