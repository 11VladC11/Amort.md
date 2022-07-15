import { AddContainer, ButtonViolet, AddInfo,AddContacts, ShortAddContainer, ShortAddWrapper, BackgroundImage, TelephoneAdd } from "./short-add.styles";
import carDoctor from '../../assets/img/car-doctor-min.jpg';
import telefon from '../../assets/icons/phone.svg';
import { Link } from "react-scroll";
const ShortAdd =({props})=>{
	return(
		<ShortAddWrapper>
			<ShortAddContainer>
				<AddContainer>
					<AddInfo>
						<h2>{props[1]}</h2>
						<span>{props[2]}</span>
					</AddInfo>
					<AddContacts>
						<Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>
							<ButtonViolet children={props[3]}/>
						</Link>
						<TelephoneAdd>
					<a href="tel:+37367309001">
						<img src={telefon} alt="" /> 
						<span>067 309 001</span>
					</a>
					</TelephoneAdd>
					</AddContacts>
				</AddContainer>
				<BackgroundImage className="pc">
					<img src={carDoctor} alt="" />
				</BackgroundImage>
			</ShortAddContainer>
			<BackgroundImage className="mob">
					<img src={carDoctor} alt="" />
				</BackgroundImage>
		</ShortAddWrapper>
	)
}


export default ShortAdd;