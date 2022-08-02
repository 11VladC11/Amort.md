import { FooterContainer, FooterWrapper } from "./footer.styles";

const Footer = ({props})=> {
	return(
		<FooterWrapper>
			<FooterContainer>
				{props[1]}<a href="mailto:awsteammd@gmail.com">  «Awesome Team»</a>&nbsp;{props[2]}<a href="https://xsort.md" rel="noreferrer" target='_blank'> Xsort Web Studio</a>
			</FooterContainer>

		</FooterWrapper>
	)
}

export default Footer;