import { useContext } from "react";
import Language from "../language/language.component";
import { BurgerMenuContainer,  BurgerMenuWrapper ,BurgerItemsWrapper, MobileNavigationContainer, MobileNavigationWrapper, BurgerItemsContainer, } from "./mobile-navigation.styles";
import { Link } from "react-scroll";
import MainLogo  from '../../assets/logo/big-logo-min.jpg'
import { LogoImg } from "../navigation/navigation.styles";
import { CartContext } from "../../contexts/cart.context";
import { Phone, SocialLinks } from "../navigation/navigation.styles";
import phone from '../../assets/icons/phone.svg'
import telegram from '../../assets/icons/telegram.svg';
import whatsap from '../../assets/icons/whatsapp.svg';
const MobileNavigation =({props})=>{
	const {isCartOpen, setIsCartOpen} = useContext(CartContext);
	return(
		<MobileNavigationWrapper>
			<MobileNavigationContainer>
				<BurgerMenuWrapper onClick={()=> setIsCartOpen(!isCartOpen)}>
					<BurgerMenuContainer className={isCartOpen && 'active'}>
						<button type="button" class="nav-toggler">
							<span></span>
						</button>
					</BurgerMenuContainer>
				</BurgerMenuWrapper>

				
				<Link className='logoContainer logo' to="home" spy={true} smooth={true} offset={-150} duration={500}>
					<LogoImg src={MainLogo} alt='main-logo' />
					<span className='logoAbsoluteText'>{props[0]}</span>
				</Link>
				<Language/>

				{
					isCartOpen &&
				<BurgerItemsWrapper>
					<BurgerItemsContainer>
						<li><Link to="why-us" spy={true} smooth={true} offset={-150} duration={500} onClick={()=> setIsCartOpen(!isCartOpen)}>{props[1]}</Link></li>
						<li><Link to="about-us" spy={true} smooth={true} offset={-150} duration={500} onClick={()=> setIsCartOpen(!isCartOpen)}>{props[2]}</Link></li>
						<li><Link to="products" spy={true} smooth={true} offset={-150} duration={500} onClick={()=> setIsCartOpen(!isCartOpen)} >{props[3]}</Link></li>
						<li><Link to="contacts" spy={true} smooth={true} offset={0} duration={500} onClick={()=> setIsCartOpen(!isCartOpen)}>{props[4]}</Link></li>
						<li>
							<Phone className="phone">
								<a href="tel:+37367309001">
									<img src={phone} alt="" />
									<span>067 309 001</span> 
								</a>
							</Phone>
						</li>
						<li>
							<SocialLinks className="socialLinks">
								<div>
								<a href="#contacts" className='telega'><span><img src={telegram} alt="" /></span></a>
								<a href="#contacts" ><span className='whatsap'><img src={whatsap} alt="" /></span></a>
								</div>
							</SocialLinks>
						</li>
					</BurgerItemsContainer>
					<div className="background"></div>
				</BurgerItemsWrapper>
				}
			</MobileNavigationContainer>
		</MobileNavigationWrapper>
	)
}

export default MobileNavigation;