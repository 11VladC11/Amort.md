import { Container } from "./language.styles";
import languageSvg from '../../assets/icons/language-svg.svg'

const Language = ()=>{
	return(
		<Container>
		<img src={languageSvg} alt="" />
			<select name="language" id="language">
				<option value="russian">Ru</option>
				<option value="romanian">Ro</option>
				<option value="english">En</option>
			</select>
		</Container>
	)
}

export default Language;