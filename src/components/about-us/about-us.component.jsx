import { useContext } from "react";
import { AboutUsContacts, AboutUsContainer, AboutUsImg, AboutUsInfo, AboutUsText, AboutUsWrapper, SmokeEffect } from "./about-us.styles";
import amortizatoareLogo from '../../assets/img/amor-min.png';
import amortizatoareLogoRo from '../../assets/img/amor-min-ro.png';
import Button from "../button/button.component";
import externalLink from '../../assets/icons/icon-external-link-blue.svg'
import smokeEffect from '../../assets/img/smoke-left-min.png';
import { Link } from "react-scroll";
import { LanguageContext } from "../../contexts/language.context";
const AboutUs =({props})=>{
	const {romanianLanguage} = useContext(LanguageContext)
	return(
		<AboutUsWrapper>
			<AboutUsContainer>
				<AboutUsImg>
					<img src={romanianLanguage ? amortizatoareLogoRo : amortizatoareLogo} alt="" />
				</AboutUsImg>
				<AboutUsInfo>
					<AboutUsText>
						<h2 id="about-us">{props[1]}</h2>
						<p>{props[2]}</p>
						<h2 id="products">{props[3]}</h2>
						<p>{props[4]}<span> {props[4.1]} </span> {props[4.2]}</p>
						<h2>{props[5]}</h2>
						<p>{props[6]}</p>
					</AboutUsText>
					<AboutUsContacts>
						<Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>
							<Button children={props[7]}/>
						</Link>
						<a rel="noreferrer" target='_blank' href="https://www.google.com/maps/place/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%90%D0%BC%D0%BE%D1%80%D1%82%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2/@46.9831422,28.8976928,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMu_RqICjuL9_0XYRX-fTfXgu-1ez6okHoZsVpf!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMu_RqICjuL9_0XYRX-fTfXgu-1ez6okHoZsVpf%3Dw114-h86-k-no!7i2048!8i1534!4m5!3m4!1s0x0:0xd667d7f83ea69793!8m2!3d46.983099!4d28.8975976">
							<button className="purpleBtn">
								<span>{props[8]}</span>
								<img src={externalLink} alt=""/>
							</button>
						</a>
					</AboutUsContacts>
				</AboutUsInfo>
			</AboutUsContainer>
			<SmokeEffect>
				<img src={smokeEffect} alt="" />
			</SmokeEffect>
		</AboutUsWrapper>
	)
}

export default AboutUs;