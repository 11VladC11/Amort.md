import Button from "../button/button.component";
import { Car, IllustrationMinus, InfoContacts, InfoText, PreviewPageContainer, PreviewPageIllustration, PreviewPageInfo, PreviewPageWrapper, Smoke , Telephone, Trust} from "./preview-page.styles";
import telefon from '../../assets/icons/phone.svg';
import smoke from '../../assets/img/smoke-min.png';
import car from '../../assets/img/car-min.png';
import trust from '../../assets/img/trust-min.png';
const PreviewPage =()=>{
	return(
		<PreviewPageWrapper>
		<PreviewPageContainer>
			<PreviewPageInfo>
				<InfoText>
					<h1>Хватит ловить дорогу!<span>Почини аморты!</span></h1>
					<span>Квалифицированные услуги по диагностике и ремонту амортизаторов</span>
				</InfoText>
				<InfoContacts>				
					<a href="tel:+37367309001">
						<Button children='Узнать стоимость'/>
					</a> 
					<Telephone>
					<a href="tel:+37367309001">
						<img src={telefon} alt="" /> 
						<span>067 309 001</span>
					</a>
					</Telephone>
				</InfoContacts>
			</PreviewPageInfo>

			<PreviewPageIllustration>
			<div className="background"></div>
			<IllustrationMinus>
				<Car>
					<img src={car} alt="" />
				</Car>
				<Trust>
					<img src={trust} alt="" />
				</Trust>
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