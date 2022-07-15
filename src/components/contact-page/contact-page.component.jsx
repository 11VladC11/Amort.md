import Contact from "../contact/contact.component";
import Form from "../form/form.component";
import { ContactPageContainer, ContactPageWrapper } from "./contact-page.styles"


const ContactPage =({props})=>{
	// console.log('props', props)
	const {form, contacts} = props;
	return(
		<ContactPageWrapper>
			<ContactPageContainer>
				<Form props={form}/>
				<Contact props={contacts}/>
			</ContactPageContainer>
		</ContactPageWrapper>
	)
}

export default ContactPage;