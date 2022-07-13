import styled from "styled-components";
export const PreviewPageWrapper = styled.div`
position:relative ;
`
export const PreviewPageContainer = styled.div`
	width: 77rem ;
	margin:0 auto ;
	height:45rem ; 
	position: relative;
	display:flex ;
	align-items: center ;
`
export const PreviewPageInfo = styled.div`
	width: 31.5rem;
	margin-right:3.5rem ;
`


export const InfoText = styled.div`
h1{
	font-size:2.5rem ;
	margin-bottom: 1.9375rem ;
	font-weight:500 ;
	span{
		color: #E52B2B;
	}
}
`

export const InfoContacts = styled.div`
	display: flex;
	align-items:center ;
	margin-top:2.6875rem ;
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
	`
export const Smoke = styled.div`
z-index:-1 ;
	position:absolute ;
	right: 0;
	bottom: 0;
	img{
		width: 29.25rem;
	}
	`
export const Car = styled.div`
img{
	width: 51.25rem;
	margin-left:2rem ;
}
z-index:2 ;
`
export const Trust = styled.div`
 img{
	 width:30.625rem ;
	 margin-top:-1.5rem ;
	}
	`
export const PreviewPageIllustration = styled.div`
	padding-top:9.5rem ;

	.background{
		top: 2.5rem;
		position: absolute ;
		z-index:-1 ;
		width: 47.5rem;
		height: 39.839375rem;
		border-radius:333rem ;
		background: linear-gradient(180deg, #CFA717 0%, #CF1717 26.56%, #3C17CF 68.23%, #1761CF 100%);
		filter: blur(9.375rem);
	}
	
`

export const IllustrationMinus = styled.div`
margin-right:-11rem ;
`