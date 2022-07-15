import styled from "styled-components";


export const MobileNavigationWrapper = styled.div`
width:100% ;
background: linear-gradient(180deg, #050F1E 0%, #050B1E 100%);
box-shadow: 0px 8px 31px rgba(119, 119, 119, 0.05);
position:fixed ;
top:0 ;
left:0 ;
z-index:10000 ;
	@media screen and (min-width:1000px){
		display:none ;
	}	
`

export const MobileNavigationContainer = styled.div`
	height: 4.6428571rem;
	width	:20.428571rem ;
	margin:0 auto ;
	display:flex ;
	justify-content:space-between ;
	align-items:center ;

.logoContainer{
		position:relative ;
		img{
		width: 9.714285rem;
		height:auto ;
		border-radius:0.6rem ;
		position: relative;
		}
	}
	.logoAbsoluteText{
		position: absolute ;
		bottom:0.30rem ;
		left:50% ;
		font-weight:500 ;
		letter-spacing: 0.03rem;
		text-transform: uppercase;
		line-height: 1.375rem;
		font-size:0.29rem ;
		transform:translateX(-50%) ;
		width: 7.57rem;
	}
`

export const BurgerMenuWrapper = styled.div`
width: 3rem;
	height: 3rem;
	position: relative;
	z-index:1001 ;
`

export const BurgerMenuContainer = styled.div`
position:absolute ;
left:50% ;
top:50% ;
transform:translate(-50%, -50%) ;
display:flex ;
flex-direction:column ;
gap:0.645rem ;
width: 1.714285rem;
height: 1.714285rem;

	.line{
		display:block ;
		background: #D5DCF5;
		height: 0.142857rem ;
		width: 100%;
		transition:all 0.3s ease ;

	}
	.line1{
		width:1rem ;
		align-self:flex-start ;

	}
	.line3{
		width:1rem ;
		align-self:flex-end ;
	}
	&.active{
		.line{
			scale:1.2 ;
		}
		.line1{
			transform: rotate(42deg);
			transform-origin: top left;

		}
		.line2{
			transform: rotate(-42deg);
			transform-origin: center;
			
		}
		.line3{
			transform: rotate(42deg);
			transform-origin: bottom right;
		}
	}
`

export const LogoContainer = styled.div`
`

export const BurgerItemsWrapper = styled.div`
position: fixed ;
top:0rem ;
left:0 ;
width:100% ;
height: 100%;
z-index:1000 ;
background-color:black ;

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
export const BurgerItemsContainer = styled.ul`
height: 100px;
width: 100%;
	padding: 5rem 0rem 0 0rem ;
	text-align:center ;
	li{
		margin-bottom:1.5rem ;
		font-size:1.5rem ;
		
		.phone{
			width: 100%;
			margin-top:2rem ;
			a{
				display:block ;
				margin:0 auto ;
			}
		}
		.socialLinks{
			margin-top:2rem ;
			width: 100%;
			margin-left:0 ;
			div{
				display:flex ;
				margin:0 auto ;
				scale:1.4 ;
			}
		}
	}
`