import { useContext, useState } from "react";
import { Container } from "./language.styles";
import languageSvg from '../../assets/icons/language-svg.svg'
import { LanguageContext } from "../../contexts/language.context";
const Language = ()=>{
	const {setRomanianLanguage} = useContext(LanguageContext);
	const [languageState, setLanguageState] = useState("");
	const onChangeLanguageHandler = (e)=>{
		const selectedLanguage = e.target.value;
		setLanguageState(selectedLanguage);
		// console.log('languageState', languageState)
		if(selectedLanguage === 'romanian'){
			setRomanianLanguage(true)
		}else{
			setRomanianLanguage(false)
		}
	}
	return(
		<Container>
		<img src={languageSvg} alt="" />
			<select name="language"  id="language" onChange={onChangeLanguageHandler}>
				<option value="romanian" >Ro</option>
				<option  value="russian" >Ru</option>
			</select>
		</Container>
	)
}

export default Language;