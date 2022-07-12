import { Attention, ContactContainer, Contacts, GoogleMaps } from "./contact.styles";
import phone from '../../assets/icons/phone.svg'
import location from '../../assets/icons/location-icon.svg'
import mail from '../../assets/icons/mail.svg'
import mapLocation from '../../assets/img/map-location-min.png'
import attention from '../../assets/icons/atention.svg'
const Contact = ()=>{
	return(
		<ContactContainer>
			<h2>Контакты</h2>
			<Contacts>
			<ul>
				<li><img src={phone} alt="" /><span>067 309 001</span></li>
				<li><img src={mail} alt="" /><span>amortmd@gmail.com </span></li>
				<li><img src={location} alt="" /><span>г. Кишинёв, сек. Ботаника, ул. Мунчешть 255А</span></li>
			</ul>
			</Contacts>
			<GoogleMaps>
				<img src={mapLocation} alt="" />
			</GoogleMaps>
			<Attention><img src={attention} alt="" />В стоимость ремонта амортизатора не входит замена пыльников/отбойников, подшипников, верхней опоры амортизатора или других его внешних комплектующих. Цену за них стоит уточнять отдельно.</Attention>
		<div className="background"></div>
		</ContactContainer>
	)
}

export default Contact;