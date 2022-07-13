import emailjs from "emailjs-com";
import { FormButton, FormContainer, FormInput, FormWrapper, InputSection, PersonalInformation, SubmitButton, SuccessSubmit, TextArea } from "./form.styles";
import close from '../../assets/icons/close.svg';
import substract from '../../assets/icons/subtract.svg'
const Form =()=>{
	function sendEmail(e){
		 e.preventDefault();

   	 emailjs.sendForm('service_f7hkc0k', 'template_9p2okdf', e.target, '5S_E5yM1kAqzL27Ml')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
		e.target.reset()
	}

	return(
		<FormWrapper>
			<FormContainer onSubmit={sendEmail}>
				<h2>Оставьте заявку на бесплатную консультацию</h2>
				<PersonalInformation>
					<InputSection className="jumi">
						<label htmlFor="phone">Ваш номер телефона*</label>
						<FormInput id='phone' name="phone" type='number' placeholder="068 584 828" autoComplete="off" required/>
					</InputSection>
					
					<InputSection className="jumi">
						<label htmlFor="name">Ваше имя</label>
						<FormInput id='name' name='name' type='text' placeholder="Юрий..." autoComplete="off" required/>
					</InputSection>
				</PersonalInformation>
				<InputSection>
					<label htmlFor="car-model">Укажите модель вашего авто</label>
					<FormInput id="car-model" name="carModel" type='text' autoComplete="off" placeholder="Например: Ford Mustang 2018 года, полный привод" required/>
				</InputSection>
				<InputSection>

					<label htmlFor="problem">Расскажите нам о вашей проблеме</label>
					<TextArea id="problem" name="problem" required type='textarea' autoComplete="off" placeholder="Например: У меня взорвались передние амортизаторы, а ещё они стучат, и машина не держит дорогу. Стуки начались со вчерашнего дня...">
					</TextArea>
				</InputSection>
				<SuccessSubmit>
					<div>
					<img src={substract} alt="" />
					<span>Ваша заявка была успешна отправлена! Ожидайте ответа.</span>
					</div>				
					<img src={close} alt="" />
				</SuccessSubmit>
				<SubmitButton>
				<FormButton children='Отправить'/>
				</SubmitButton>
			</FormContainer>
		</FormWrapper>
	)
}

export default Form;