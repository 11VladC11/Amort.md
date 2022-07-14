import { AboutUsContacts, AboutUsContainer, AboutUsImg, AboutUsInfo, AboutUsText, AboutUsWrapper, SmokeEffect } from "./about-us.styles";
import amortizatoareLogo from '../../assets/img/amor-min.png';
import Button from "../button/button.component";
import externalLink from '../../assets/icons/icon-external-link-blue.svg'
import smokeEffect from '../../assets/img/smoke-left-min.png';
import { Link } from "react-scroll";
const AboutUs =({props})=>{
	return(
		<AboutUsWrapper>
			<AboutUsContainer>
				<AboutUsImg>
					<img src={amortizatoareLogo} alt="" />
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
						<button className="purpleBtn">
							<span>{props[8]}</span>
							<img src={externalLink} alt=""/>
						</button>
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