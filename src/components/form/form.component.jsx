import { useState } from "react";
import emailjs from "emailjs-com";
import { FormButton, FormContainer, FormInput, FormWrapper, InputSection, PersonalInformation, SubmitButton, SuccessSubmit, TextArea } from "./form.styles";
import close from '../../assets/icons/close.svg';
import substract from '../../assets/icons/subtract.svg'
const Form =({props})=>{
	const [isActive, setIsActive] = useState(false);
	const [phone, setPhone] = useState('');
	const [error, setError] = useState(false);
	const handleClick =()=>{
		setIsActive(false)
	};
	function sendEmail(e){
		 e.preventDefault();
		if(!phone){
			setError(true);
			return;
		}
   	 emailjs.sendForm('service_f7hkc0k', 'template_9p2okdf', e.target, '5S_E5yM1kAqzL27Ml')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
		e.target.reset()
		setIsActive(current => !current)
		setError(false);
		setPhone('');

	}

	return(
		<FormWrapper>
			<FormContainer onSubmit={sendEmail}>
				<h2>{props[1]}</h2>
				<PersonalInformation>
					<InputSection className="jumi " >
						<div className="phoneInput">
							<label htmlFor="phone">{props[2]}</label>
							<FormInput id='phone' name="phone" type='number' value={phone} style={
								{
									border: error ? '1px solid #D63535' : '',

								}
								} onChange={(e) => {
									setPhone(e.target.value);
									setError(false)}
								} placeholder="068 584 828" autoComplete="off"/>
							{
								error ? (
									<div className="error">* Это поле обязательно для заполнения</div>
									):('')
							}
						</div>
					</InputSection>
					
					<InputSection className="jumi">
						<label htmlFor="name">{props[3]}</label>
						<FormInput id='name' name='name' type='text' placeholder={props[4]} autoComplete="off"/>
					</InputSection>
				</PersonalInformation>
				<InputSection>
					<label htmlFor="car-model">{props[5]}</label>
					<FormInput id="car-model" name="carModel" type='text' autoComplete="off" placeholder={props[6]}/>
				</InputSection>
				<InputSection>

					<label htmlFor="problem">{props[7]}</label>
					<TextArea id="problem" name="problem" type='textarea' autoComplete="off" placeholder={props[8]} >
					</TextArea>
				<SubmitButton>
					<FormButton children={props[10]}/>
				</SubmitButton>
				</InputSection>
				<div style={
						{
							cursor: isActive ? '' :'default',
						}
						}>
					<SuccessSubmit style={
						{
							opacity: isActive ? '1' :'0',
						}
						}>
						<div>
						<img src={substract} alt="" />
						<span>{props[9]}</span>
						</div>				
						<img src={close} alt="" onClick={handleClick}
						style={
						{
							cursor: isActive ? 'pointer' :'default',
						}
						}/>
						
						
					</SuccessSubmit>
				</div>

			</FormContainer>
		</FormWrapper>
	)
}

export default Form;