import Contact from "../contact/contact.component";
import Form from "../form/form.component";
import { ContactPageContainer, ContactPageWrapper } from "./contact-page.styles"


const ContactPage =()=>{
	return(
		<ContactPageWrapper>
			<ContactPageContainer id="contacts">
				<Form/>
				<Contact/>
			</ContactPageContainer>
		</ContactPageWrapper>
	)
}

export default ContactPage;