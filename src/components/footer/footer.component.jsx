import { FooterContainer, FooterWrapper } from "./footer.styles";

const Footer = ({props})=> {
	return(
		<FooterWrapper>
			<FooterContainer>
				{props[1]}<a href="mailto:awsteammd@gmail.com">  «Awesome Team»</a> {props[2]} <a href="https://xsort.md">Xsort Web Studio</a>
			</FooterContainer>

		</FooterWrapper>
	)
}

export default Footer;