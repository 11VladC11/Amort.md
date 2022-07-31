import {useState, createContext} from 'react';


export const LanguageContext = createContext({
	romanianLanguage:true,
	setRomanianLanguage:()=>{},
})

export const LanguageProvider = ({children})=>{
	const [romanianLanguage, setRomanianLanguage] = useState(true);
	const value ={
		romanianLanguage,
		setRomanianLanguage,
	}

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}