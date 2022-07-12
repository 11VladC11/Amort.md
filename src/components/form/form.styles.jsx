import styled from "styled-components";
import { BaseButton } from "../button/button.styles";
export const FormWrapper = styled.div`
width: 50%;
`
export const FormContainer = styled.form`
width: 100%;
	h2{
		font-weight:500 ;
		color:#F2F2F2 ;
		font-size:1.5rem ;

		margin-block-start: 0rem;
    margin-block-end: 0rem;
	}
	
	
	`
export const PersonalInformation = styled.div`
	display:flex ;
	justify-content:space-between ;
	gap:2.5rem ;
	.jumi{
		width:50% ;
	}
	`
export const FormInput = styled.input`
	padding: 1rem 0.625rem 1rem 1rem;
	background: #061124;
	border-radius: 0.75rem;
	color:white ;
	outline:none ;
	width:100% ;
	font-family: 'Rubik', sans-serif;
	font-size:1rem ;
	box-sizing:border-box ;
	transition:all 0.3s ease;
	border: 1px solid transparent;
	&:hover{
		background:#050D1B ;
	}
	
	&:focus{
		color:#2F80ED ;
		border:1px solid #2F80ED ;
	}


`
export const InputSection = styled.div`
margin-top:2.375rem ;
label{
	color:#F2F2F2 ;
	font-size: 1rem;
	font-weight:400 ;
	display:block ;
	margin-bottom:0.75rem ;
}

#problem{
	height:9.5rem ;
}


`

export const SuccessSubmit = styled.div`
margin:1rem 0 ;
background: #2FA62D;
border-radius: 0.75rem;
width: 100%;
padding:0.75rem ;
display:flex ;
align-items:center ;
	box-sizing:border-box ;

justify-content:space-between ;
div{
	display:flex ;
	align-items:center ;
	img{
		width: 1rem;
		margin-right:0.625rem ;
		cursor:default ;
	}
}
img{
	width: 1rem;
	cursor: pointer;
}
`
export const TextArea = styled.textarea`
	resize:none ;
	height: 9rem;
	padding: 1rem 1.625rem 1rem 1rem;
	background: #061124;
	border-radius: 0.75rem;
	color:white ;
	outline:none ;
	width:100% ;
	font-family: 'Rubik', sans-serif;
	font-size:1rem ;
	box-sizing:border-box ;
	transition:all 0.3s ease;
	border: 1px solid transparent;

	&:hover{
		background:#050D1B ;
	}
	&:focus{
		color:#2F80ED ;
		border:1px solid #2F80ED ;
	}
`

export const FormButton = styled(BaseButton)`
margin:0 0 0 auto  ;
`

export const SubmitButton = styled.div`
width: 100%;
`