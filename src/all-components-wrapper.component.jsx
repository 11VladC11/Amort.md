import AboutUs from "./components/about-us/about-us.component";
import ContactPage from "./components/contact-page/contact-page.component";
import Footer from "./components/footer/footer.component";
import MobileNavigation from "./components/mobile-navigation/mobile-navigation.component";
import Navigation from "./components/navigation/navigation.component";
import PreviewPage from "./components/preview-page/preview-page.component";
import ShortAdd from "./components/short-add/short-add.component";
import WhyUs from "./components/why-us-page/why-us.component";

// import { useContext } from "react";
// import { CartContext } from "./contexts/cart.context";
function AllComponentsWrapper({props}) {
	const { navigation, previewPage, whyUs, shortAdd, aboutUs, contactsPage, footer } = props;
	// console.log('props', props)
	// console.log('navigation', navigation)
	// console.log('whyUs', whyUs)
	// console.log('previewPage', previewPage)
	// const {isCartOpen} = useContext(CartContext);

	return (
    <div className="App">
		<MobileNavigation props={navigation}/>
		<Navigation props={navigation}/>
		<PreviewPage props={previewPage}/>
		<WhyUs props={whyUs}/>
		<ShortAdd props={shortAdd}/>
		<AboutUs props={aboutUs}/>
		<ContactPage props={contactsPage}/>
		<Footer props={footer}/>
    </div>
  );
}

export default AllComponentsWrapper;