import Container from 'react-bootstrap/Container';
import './css/contact.css'
import { Col, Row } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';

export const Contact = () => {

	const [sucessMsg, setSucessMsg] = useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();

		setSucessMsg(true);

		const formData = new FormData(event.target);

		formData.append("access_key", "8a2f6cf0-bb20-44c7-968f-5e9c500549c7");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: json
		}).then((res) => res.json());

		if (res.success) {
			event.target.reset();
		}
	};

	return (
		<Container id='contact'>
			<Row>
				<Col style={{ position: 'relative' }}>
					<ToastContainer className="p-1" position={'bottom-center'} style={{ zIndex: 1 }}>
						<Toast style={{ width: 'fit-content', backgroundColor: 'green' }} onClose={() => setSucessMsg(false)} show={sucessMsg} delay={3000} autohide>
							<Toast.Header style={{ color: 'white', backgroundColor: 'green' }}>Email sent successfully</Toast.Header>
						</Toast>
					</ToastContainer>
					<form className='text-center text-white d-flex flex-column justify-content-center align-items-center my-5' onSubmit={onSubmit}>
						<div className="h1 mb-4">Contact</div>
						<div className="contact-form">
							<h4>sent me an email</h4>
							<div className="name">
								<input type="text" name='name' placeholder='Your Name' required />
							</div>
							<div className="email">
								<input type="email" name='email' placeholder='Email' required />
							</div>
							<div className="subject">
								<input type="text" name='subject' placeholder='Subject' required />
							</div>
							<div className="message">
								<textarea name="message" placeholder='Message' id=""></textarea>
							</div>
							<div className='mt-2'>
								<button type='submit'>submit</button>
							</div>
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	)
}
