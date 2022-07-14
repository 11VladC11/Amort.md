import { useState } from "react";
import AllComponentsWrapper from "./all-components-wrapper.component";
import { languageChangerObject } from "./language";

function App() {
	const [romanianLanguage, setRomanianLanguage] = useState(false);
	const {russian, romanian} = languageChangerObject;
	return (
    <div className="App">
		{
			!romanianLanguage ? (
				<AllComponentsWrapper props={romanian}/>
			):(
				<AllComponentsWrapper props={russian}/>
			)
		}
		
    </div>
  );
}

export default App;
