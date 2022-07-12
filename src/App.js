import AboutUs from "./components/about-us/about-us.component";
import ContactPage from "./components/contact-page/contact-page.component";
import Navigation from "./components/navigation/navigation.component";
import PreviewPage from "./components/preview-page/preview-page.component";
import ShortAdd from "./components/short-add/short-add.component";
import WhyUs from "./components/why-us-page/why-us.component";

function App() {
  return (
    <div className="App">
		<Navigation/>
		<PreviewPage/>
		<WhyUs/>
		<ShortAdd/>
		<AboutUs/>
		<ContactPage/>
    </div>
  );
}

export default App;
