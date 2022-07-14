import Button from "../button/button.component";
import { Car, IllustrationMinus, InfoContacts, InfoText, PreviewPageContainer, PreviewPageIllustration, PreviewPageInfo, PreviewPageWrapper, Smoke , Telephone, Trust} from "./preview-page.styles";
import telefon from '../../assets/icons/phone.svg';
import smoke from '../../assets/img/smoke-min.png';
import car from '../../assets/img/car-min.png';
import trust from '../../assets/img/trust-min.png';
import { Link } from "react-scroll";
const PreviewPage =({props})=>{
	// console.log('props', props)

	return(
		<PreviewPageWrapper id="home">
		<PreviewPageContainer>
			<PreviewPageInfo>
				<InfoText>
					<h1>{props[1]}<br/><span>{props[2]}</span></h1>
					<span className="intro">{props[3]}</span>
				</InfoText>
				<InfoContacts>				
					<Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>
						<Button children={props[4]}/>
					</Link>
					 
					<Telephone>
					<a href="tel:+37367309001">
						<img src={telefon} alt="" /> 
						<span>067 309 001</span>
					</a>
					</Telephone>
				</InfoContacts>
			</PreviewPageInfo>

			<PreviewPageIllustration>
			<IllustrationMinus>
			<div className="background"></div>
				<Car>
					<img src={car} alt="" />
				</Car>
				<Link to="why-us" spy={true} smooth={true} offset={-150} duration={500}>
					<Trust>
						<img src={trust} alt="" />
					</Trust>
				</Link>
			</IllustrationMinus>
			</PreviewPageIllustration>
			</PreviewPageContainer>	
			<Smoke>
			<img src={smoke} alt="smoke" />
			</Smoke>
		</PreviewPageWrapper>	
	)
}

export default PreviewPage;