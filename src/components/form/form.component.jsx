import { FormButton, FormContainer, FormInput, FormWrapper, InputSection, PersonalInformation, SubmitButton, SuccessSubmit, TextArea } from "./form.styles";
import close from '../../assets/icons/close.svg';
import substract from '../../assets/icons/subtract.svg'

const Form =()=>{
	return(
		<FormWrapper>
			<FormContainer>
				<h2>Оставьте заявку на бесплатную консультацию</h2>
				<PersonalInformation>
					<InputSection className="jumi">
						<label htmlFor="phone">Ваш номер телефона*</label>
						<FormInput id='phone' name="phone" type='number' placeholder="068 584 828" required/>
					</InputSection>
					
					<InputSection className="jumi">
						<label htmlFor="name">Ваше имя</label>
						<FormInput id='name' name='name' type='text' placeholder="Юрий..." required/>
					</InputSection>
				</PersonalInformation>
				<InputSection>
					<label htmlFor="car-model">Укажите модель вашего авто</label>
					<FormInput id="car-model" name="car-model" type='text' placeholder="Например: Ford Mustang 2018 года, полный привод" required/>
				</InputSection>
				<InputSection>

					<label htmlFor="problem">Расскажите нам о вашей проблеме</label>
					<TextArea id="problem" name="problem" required type='textarea' placeholder="Например: У меня взорвались передние амортизаторы, а ещё они стучат, и машина не держит дорогу. Стуки начались со вчерашнего дня...">
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