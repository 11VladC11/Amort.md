import styled from "styled-components";
export const NavigationContainer = styled.div`
	width: 77rem ;
	margin: 0.375rem auto 0 auto;
	display:flex ;
	align-items:center ;

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
	display:flex ;
		margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 1.40625rem;
	 font-weight:500 ;
	li{
		margin-left:3.125rem ;
		&:first-child{
			margin-left: 0rem;
			padding-top: 0.1rem;
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
	transform:translate(-60%,-50%) ;
}

	.whatsap{
			background: linear-gradient(180deg, #61FD7D 0%, #2BB826 100%);
			img{
					transform:translate(-50%,-50%) ;

			}
	}	

	&:first-child{
		margin-right:0.75rem ;
	}
	}
`