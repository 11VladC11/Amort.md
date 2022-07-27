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
						<Link to="form" spy={true} smooth={true} offset={0} duration={500}>
							<Button children={props[7]}/>
						</Link>
						<a rel="noreferrer" target='_blank' href="https://docs.google.com/document/d/1YJpYhOyVK7dvbNsJK8R1sQcQOcPYZSyBv4UecnTto-k/edit">
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