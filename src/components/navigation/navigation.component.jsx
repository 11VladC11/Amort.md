import {LogoImg, NavigationContainer, NavigationWrapper,NavigationLinks,NavigationContacts , NavigationLinksContainer, Phone, SocialLinks} from './navigation.styles'
import MainLogo  from '../../assets/logo/big-logo-min.jpg'
import Language from '../language/language.component';
import phone from '../../assets/icons/phone.svg'
import telegram from '../../assets/icons/telegram.svg';
import whatsap from '../../assets/icons/whatsapp.svg';
import { Link } from 'react-scroll';
const Navigation =()=>{
	return(
		<NavigationWrapper>
			<NavigationContainer>
				<Link to="home" spy={true} smooth={true} offset={0} duration={500}>
					<LogoImg src={MainLogo} alt='main-logo' />
				</Link>
				<NavigationLinksContainer>
					<NavigationLinks>
						<ul>
							<li><Language/></li>
							<li><Link to="why-us" spy={true} smooth={true} offset={-150} duration={500}>Почему мы?</Link></li>
							<li><Link to="about-us" spy={true} smooth={true} offset={-150} duration={500}>О компании</Link></li>
							<li><Link to="products" spy={true} smooth={true} offset={-150} duration={500}>Услуги</Link></li>
							<li><Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>Контакты</Link></li>
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
							<a href="#contacts" className='telega'><span><img src={telegram} alt="" /></span></a>
							<a href="#contacts" ><span className='whatsap'><img src={whatsap} alt="" /></span></a>
						</SocialLinks>
					</NavigationContacts>
				</NavigationLinksContainer>
			</NavigationContainer>
		</NavigationWrapper>
	)
}
export default Navigation;