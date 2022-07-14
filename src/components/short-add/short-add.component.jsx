import { AddContainer, ButtonViolet, AddInfo,AddContacts, ShortAddContainer, ShortAddWrapper, BackgroundImage, TelephoneAdd } from "./short-add.styles";
import carDoctor from '../../assets/img/car-doctor-min.jpg';
import telefon from '../../assets/icons/phone.svg';
const ShortAdd =()=>{
	return(
		<ShortAddWrapper>
			<ShortAddContainer>
				<AddContainer>
					<AddInfo>
						<h2>Надоело слышать стуки в машине?</h2>
						<span>Запишитесь на диагностику амортизаторов или позвоните по номеру ниже</span>
					</AddInfo>
					<AddContacts>
						<a href="tel:+37367309001">
							<ButtonViolet children='Записаться'/>
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