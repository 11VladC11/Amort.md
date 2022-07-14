import { Amortizatoare, FirstReview,WReviewsContainer, SecondReview, ThirdReview, WhyUsContainer, WhyUsWrapper, WInfo, WReviews } from "./why-us.styles";
import newIcon from '../../assets/icons/new-icon.svg';
import mechanic from '../../assets/icons/mechanic-icon.svg';
import reward from '../../assets/icons/reward-icon.svg';
import discount from '../../assets/icons/discount-icon.svg';
import externalLink from '../../assets//icons/icon-external-link.svg'; 

import logo from '../../assets/img/logo-min.jpg'
import firstReview from '../../assets/img/first-review-min.jpg'
import secondReview from '../../assets/img/second-review-min.jpg'
import thirdReview from '../../assets/img/third-review-min.jpg'
import amortizatoare from '../../assets/img/amortizatore-min.png'
import Button from "../button/button.component";
import { Link } from "react-scroll";
const WhyUs =({props})=>{
	const reviews = 'https://www.google.com/maps/place/Ремонт+Амортизаторов/@46.9827624,28.8958451,16z/data=!4m7!3m6!1s0x0:0xd667d7f83ea69793!8m2!3d46.983099!4d28.8975976!9m1!1b1'
return(
	<WhyUsWrapper>
		<WhyUsContainer id="why-us">
			<WInfo>
				<ul>
					<li>
						<h2>{props[1]}</h2>					
					</li>
					<li>
						<span className="img">
							<img src={newIcon} alt="" />
						</span>
						<span className="text">{props[2]}</span>
					</li>
					<li>
						<span className="img">
							<img src={mechanic} alt="" />
						</span>
						<span className="text">{props[3]}</span>
					</li>
					<li>
						<span className="img">
							<img src={reward} alt="" />
						</span>
						<span className="text">{props[4]}</span>
					</li>
					<li>
						<span className="img">
							<img src={discount} alt="" />
						</span>
						<span className="text">{props[5]}</span>
					</li>
					<li>
						<Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>
							<Button children={props[6]}/>
						</Link>
					</li>
				</ul>
				<Amortizatoare>
					<img src={amortizatoare} alt="" />
				</Amortizatoare>
			</WInfo>
			<WReviews>
				<WReviewsContainer>
					<h2>{props[7]}</h2>
					<FirstReview>
						<img className="logo" src={logo} alt="" />
						<img className="firstReview" src={firstReview} alt="" />
					</FirstReview>

					<SecondReview>
						<img src={secondReview} alt="" />
					</SecondReview>

					<ThirdReview>
						<img className="thirdReview" src={thirdReview} alt="" />
						<a href={reviews} target="_blank" rel="noreferrer">
							<button>{props[8]}<img src={externalLink} alt="" /></button>
						</a>
					</ThirdReview>
				</WReviewsContainer>
			</WReviews>
		</WhyUsContainer>
	</WhyUsWrapper>
)
}

export default WhyUs;