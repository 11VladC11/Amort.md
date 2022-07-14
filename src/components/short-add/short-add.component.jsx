import { AddContainer, ButtonViolet, AddInfo,AddContacts, ShortAddContainer, ShortAddWrapper, BackgroundImage, TelephoneAdd } from "./short-add.styles";
import carDoctor from '../../assets/img/car-doctor-min.jpg';
import telefon from '../../assets/icons/phone.svg';
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
						<a href="tel:+37367309001">
							<ButtonViolet children={props[3]}/>
						</a>
						<TelephoneAdd>
					<a href="tel:+37367309001">
						<img src={telefon} alt="" /> 
						<span>067 309 001</span>
					</a>
					</TelephoneAdd>
					</AddContacts>
				</AddContainer>
				<BackgroundImage>
					<img src={carDoctor} alt="" />
				</BackgroundImage>
			</ShortAddContainer>
		</ShortAddWrapper>
	)
}


export default ShortAdd;