import { FooterContainer, FooterWrapper } from "./footer.styles";

const Footer = ({props})=> {
	return(
		<FooterWrapper>
			<FooterContainer>
				{props[1]}<a href="mailto:awsteammd@gmail.com">  «Awesome Team»</a>
			</FooterContainer>

		</FooterWrapper>
	)
}

export default Footer;