import {useState, createContext} from 'react';


export const LanguageContext = createContext({
	romanianLanguage:false,
	setRomanianLanguage:()=>{},
})

export const LanguageProvider = ({children})=>{
	const [romanianLanguage, setRomanianLanguage] = useState(false);
	const value ={
		romanianLanguage,
		setRomanianLanguage,
	}

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}