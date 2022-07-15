import { Attention, ContactContainer, Contacts, GoogleMaps } from "./contact.styles";
import phone from '../../assets/icons/phone.svg'
import location from '../../assets/icons/location-icon.svg'
import mail from '../../assets/icons/mail.svg'
import mapLocation from '../../assets/img/map-location-min.png'
import attention from '../../assets/icons/atention.svg'
const Contact = ({props})=>{
	return(
		<ContactContainer id="contacts">
			<h2>{props[1]}</h2>
			<Contacts>
			<ul>
				<li><img src={phone} alt="" /><span>067 309 001</span></li>
				<li><img src={mail} alt="" /><span>amortmd@gmail.com </span></li>
				<li><img src={location} alt="" /><span>{props[2]}</span></li>
			</ul>
			</Contacts>
			<a href="https://www.google.com/maps/place/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%90%D0%BC%D0%BE%D1%80%D1%82%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2/@46.9827624,28.8958451,16z/data=!4m5!3m4!1s0x0:0xd667d7f83ea69793!8m2!3d46.983099!4d28.8975976" target='_blank' rel="noreferrer">
				<GoogleMaps>
					<img src={mapLocation} alt="" />
				</GoogleMaps>
			</a>
			<Attention><img src={attention} alt="" />{props[3]}</Attention>
		<div className="background"></div>
		</ContactContainer>
	)
}

export default Contact;