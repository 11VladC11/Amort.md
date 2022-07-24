import {LogoImg, NavigationContainer, NavigationWrapper,NavigationLinks,NavigationContacts , NavigationLinksContainer, Phone, SocialLinks} from './navigation.styles'
import MainLogoRu  from '../../assets/logo/logo-ru-min.png';
import MainLogoRo  from '../../assets/logo/logo-ro-min.png';
import Language from '../language/language.component';
import phone from '../../assets/icons/phone.svg'
import telegram from '../../assets/icons/telegram.svg';
import whatsap from '../../assets/icons/whatsapp.svg';
import { Link } from 'react-scroll';
import { useContext } from 'react';
import {LanguageContext} from '../../contexts/language.context'
const Navigation =({props})=>{
	// console.log('props', props)
	const {romanianLanguage} = useContext(LanguageContext);
	return(
		<NavigationWrapper>
			<NavigationContainer>
				<Link className='logoContainer' to="home" spy={true} smooth={true} offset={0} duration={500}>
					<LogoImg src={romanianLanguage ? MainLogoRo : MainLogoRu} alt='main-logo' />
				</Link>
				<NavigationLinksContainer>
					<NavigationLinks>
						<ul>
							<li><Language/></li>
							<li><Link to="why-us" spy={true} smooth={true} offset={-150} duration={500}>{props[1]}</Link></li>
							<li><Link to="about-us" spy={true} smooth={true} offset={-150} duration={500}>{props[2]}</Link></li>
							<li><Link to="products" spy={true} smooth={true} offset={-150} duration={500}>{props[3]}</Link></li>
							<li><Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>{props[4]}</Link></li>
						</ul>
					</NavigationLinks>
					<NavigationContacts>
						<Phone>
							<a href="tel:+37367309001">
								<img src={phone} alt="" />
								<span>067 309 001</span> 
							</a>
						</Phone>
						<SocialLinks>
							<a href="https://telegram.me/" className='telega'><span><img src={telegram} alt="" /></span></a>
							<a href="https://wa.me/067309001" ><span className='whatsap'><img src={whatsap} alt="" /></span></a>
						</SocialLinks>
					</NavigationContacts>
				</NavigationLinksContainer>
			</NavigationContainer>
		</NavigationWrapper>
	)
}
export default Navigation;