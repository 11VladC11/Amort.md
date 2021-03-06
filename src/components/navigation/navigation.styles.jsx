import styled from "styled-components";
export const NavigationWrapper = styled.div`
	width: 100%;
	position:fixed ;
	z-index:1000 ;
	@media screen and (max-width:1000px){
		display: none ;
	}
`


export const NavigationContainer = styled.div`
	width: 77rem ;
	margin: 0.375rem auto 0 auto;
	display:flex ;
	align-items:center ;
	.logoContainer{
		position:relative ;
	}
	.logoAbsoluteText{
		position: absolute ;
		bottom:0.625rem ;
		left:50% ;
		font-weight:500 ;
		letter-spacing: 0.03rem;
		text-transform: uppercase;
		line-height: 1.375rem;
		
		font-size:0.5625rem ;
		transform:translateX(-50%) ;
		width: 13.75rem;
	}

`

export const LogoImg = styled.img`
	width:17.6875rem;
	height:5.3125rem;
	border-radius:0.9rem ;

`
export const NavigationLinksContainer = styled.div`
	background: rgba(28,28,30, 0.4);
	border-bottom-right-radius: 0.875rem;
	border-top-right-radius: 0.875rem;
	display: flex ;
	width: 100%;
	
`
export const NavigationLinks = styled.div`
	
ul{
	width: 36.75rem;
	margin-block-start: 1em;
	margin-block-end: 1em;
	padding-inline-start: 1.40625rem;
	font-weight:500 ;
	display:flex ;
	 justify-content:space-between ;
	 li{
		/* margin-left:3.125rem ; */
		&:first-child{
			margin-left: 0rem;
			padding-top: 0.1rem;
		}
		a{

			opacity: 1;
			transition:all 0.3s ease ;
			&:hover{
			transition:all 0.3s ease ;

				opacity:0.7 ;
			}
		}
	}
}

`
export const NavigationContacts = styled.div`
 display:flex ;
 align-items:center ;
 padding-left: 2.728125rem ;
`

export const Phone = styled.div`
a{
	
	display:flex ;
	align-items:center ;
	img{
		width: 1.356875rem;
		height: 1.356875rem;
		margin-right:0.853125rem ;
	}
	span{
		font-size:1.510625rem ;
		font-weight: 500;
	}
}
`

export const SocialLinks = styled.div`
	margin-left: 1.3125rem ;
	display:flex ;
	a{
		position: relative;
		span{
			display: block;
			position: relative;
			background: linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%);
			width: 2.0625rem;
			height: 2.0625rem;
			border-radius:30rem ;

		}
img{
	position:absolute ;
	top:50% ;
	left: 50%;
	width:1.121875rem ;
	transform:translate(-60%,-50%) ;
}

	.whatsap{
			background: linear-gradient(180deg, #61FD7D 0%, #2BB826 100%);
			img{
					transform:translate(-50%,-50%) ;
				width:1.371875rem ;
			}
	}	

	&:first-child{
		margin-right:0.75rem ;
	}
	}
`