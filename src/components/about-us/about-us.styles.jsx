import styled from "styled-components";

export const AboutUsWrapper = styled.div`
position:relative ;
	width: 100%;
	height: 45rem;
	background: #E5EFFE;
	color: #091427;
`

export const AboutUsContainer = styled.div`
height: 100%;

	width: 77rem ;
	margin:0 auto ;
	display:flex ;
	align-items: center;
`

export const AboutUsImg = styled.div`
	img{
		width: 38rem;
	}
`

export const AboutUsInfo = styled.div`
margin-left:1.5rem ;
`

export const AboutUsText = styled.div`
	h2{
		font-size:1.5rem ;
		font-weight:500 ;
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
	.purpleBtn{
		display: flex;
		align-items: center;
		padding: 1.25rem 1.5rem;
		gap: 10px;
		height: 51px;
		border-radius: 12px;
		color:#174BCF ;
		border:none;
		font-size:1rem ;
		font-weight:500 ;
		outline:none ;
		font-family: 'Rubik', sans-serif;
		img{
			width: 1.125rem;
		}
&:hover{
	background-color:#DCDEFA ;
}
	}
`
export const SmokeEffect = styled.div`
	position:absolute ;
	bottom:0;
	left:0 ;
	img{
		width: 22.5rem;
		
	}
`