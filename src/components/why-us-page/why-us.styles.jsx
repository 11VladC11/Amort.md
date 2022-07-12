import styled from "styled-components";

export const WhyUsWrapper = styled.div`
width:100% ;
background: #DBDCFA;
color:#091427 ;
padding-top:5.625rem ;
`
export const WhyUsContainer = styled.div`
	width: 77rem ;
	height: 45rem;
	margin:0 auto;
	display:flex ;
	h2{
		font-size:1.5rem ;
		font-weight:500 ;
	}
`

export const WInfo = styled.div`
z-index:4 ;
position: relative;
	width: 50%;
	ul{
		z-index:100 ;
		margin-block-start: 0rem;
		margin-block-end: 0rem;
	    padding-inline-start: 0rem;
		 margin-left:9.75rem ;

		li{
			&:last-child{
				margin-top:2rem ;
			}

			display:flex ;
			align-items:center ;
			margin-bottom:1rem ;
			img{
				width:2.625rem ;
			}
			.text{
				margin-left:0.875rem ;
				font-size:1.125rem ;
			}

			button{
				z-index:100 ;
			}
		}
		
	}
`

export const WReviews = styled.div`
	width: 50%;
	display: flex;
	justify-content:flex-end ;

`
export const Amortizatoare = styled.div`
 position:absolute ;
 z-index:-1 ;
 bottom:5rem ;
 left: 0%;
 img{
	width:37.5rem;
 }
`

export const FirstReview = styled.div`
position: relative;
		width: 27.75rem;

	img.logo{
		width: 12rem;
		position:absolute ;
		top:-1.6rem ;
		right:-3.9rem ;
		border-radius:0.8rem ;
	}
	img.firstReview{
		width: 27.75rem;
		border-radius:1.75rem ;
	}
`

export const SecondReview = styled.div`
margin-top:1rem ;
	margin-left:-1.75rem ;
	margin-bottom:1rem ;
img{
	width: 31.25rem;
		border-radius:1.75rem ;

}
`

export const ThirdReview = styled.div`
position: relative;
img.thirdReview{
		width: 27.75rem;
		border-radius:1.75rem ;


}
a{
	position:absolute ;
	bottom: -1rem;
	left:50% ;
	transform: translateX(-50%) ;
	button{
		display:flex ;
		align-items:center ;
		justify-content:space-between ;
padding: 10px 20px;
border:none ;
outline:none ;
color:#ffffff ;
font-size:1rem ;
width: 240px;
height: 43px;
cursor:pointer ;
	font-family: 'Rubik', sans-serif;

font-weight:500 ;
background: linear-gradient(96.18deg, #2BB514 1.56%, #1AB502 86.86%);
border-radius: 12px;
	}
}
`

export const WReviewsContainer = styled.div`
	margin-right:1.75rem ;

`