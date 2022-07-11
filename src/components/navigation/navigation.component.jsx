import {LogoImg, NavigationContainer, NavigationWrapper,NavigationLinks,NavigationContacts , NavigationLinksContainer, Phone, SocialLinks} from './navigation.styles'
import MainLogo  from '../../assets/logo/big-logo-min.jpg'
import Language from '../language/language.component';
import phone from '../../assets/icons/phone.svg'
import telegram from '../../assets/icons/telegram.svg';
import whatsap from '../../assets/icons/whatsapp.svg';
const Navigation =()=>{
	return(
		<NavigationWrapper>
			<NavigationContainer>
				<LogoImg src={MainLogo} alt='main-logo' />
				<NavigationLinksContainer>
					<NavigationLinks>
						<ul>
							<li><Language/></li>
							<li><a href="#why-us">Почему мы?</a></li>
							<li><a href="#about-us">О компании</a></li>
							<li><a href="#products">Услуги</a></li>
							<li><a href="#contacts">Контакты</a></li>
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