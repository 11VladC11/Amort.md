import { AboutUsContacts, AboutUsContainer, AboutUsImg, AboutUsInfo, AboutUsText, AboutUsWrapper, SmokeEffect } from "./about-us.styles";
import amortizatoareLogo from '../../assets/img/amor-min.png';
import Button from "../button/button.component";
import externalLink from '../../assets/icons/icon-external-link-blue.svg'
import smokeEffect from '../../assets/img/smoke-left-min.png';
import { Link } from "react-scroll";
const AboutUs =()=>{
	return(
		<AboutUsWrapper>
			<AboutUsContainer>
				<AboutUsImg>
					<img src={amortizatoareLogo} alt="" />
				</AboutUsImg>
				<AboutUsInfo>
					<AboutUsText>
						<h2 id="about-us">О компании</h2>
						<p>«Amort.md» является профессиональным сервис центром, который предоставляет услуги по диагностике и ремонту амортизаторов от квалифицированных специалистов. Наши мастера проходили стажировку в авто центрах Италии (г. Милан)</p>
						<h2 id="products">Услуги</h2>
						<p>Предоставляем услуги по<span> диагностики и ремонту системы амортизации </span> автомобилей, работая с проф. итальянским оборудыванием.</p>
						<h2>Что ремонтируем</h2>
						<p>К востановлению подлежат практически все виды амортизаторов: гидравлические доводчики дверей, амортизаторы мотоциклов, квадроциклов, траков, внедорожников, легковых авто, с автоматической регулировкой клиренса, жёсткости и др. типы амортизаторов.</p>
					</AboutUsText>
					<AboutUsContacts>
						<Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>
							<Button children='Узнать стоимость'/>
						</Link>
						<button className="purpleBtn">
							<span>Посмотреть работы</span>
							<img src={externalLink} alt=""/>
						</button>
					</AboutUsContacts>
				</AboutUsInfo>
			</AboutUsContainer>
			<SmokeEffect>
				<img src={smokeEffect} alt="" />
			</SmokeEffect>
		</AboutUsWrapper>
	)
}

export default AboutUs;