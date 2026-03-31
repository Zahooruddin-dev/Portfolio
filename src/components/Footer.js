import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className='footer'>
			<Row className='footer-content'>
				<Col md='4' className='footer-copywright'>
					<h3>Designed and Developed by Zahooruddin Nizamani</h3>
				</Col>
				<Col md='4' className='footer-copywright'>
					<h3>Copyright © {year} MZ</h3>
				</Col>
				<Col md='4' className='footer-body'>
					<ul className='footer-icons'>
						<li className='social-icons'>
							<a
								href='https://github.com/Zahooruddin-dev'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
							>
								<AiFillGithub />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.linkedin.com/in/zahooruddinmizuka/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.instagram.com/zahooruddin18/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
