import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatarme2.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							LET ME <span className='purple'> INTRODUCE </span> MYSELF
						</h1>
						<p className='home-about-body'>
							I started as a self-taught programmer in 2013 with Unity game
							engine and Microsoft Visual Basic, then expanded into web
							development in 2014 to better showcase my games at inter-school IT
							exhibitions.
							<br />
							<br />
							Honored with best software development awards for 10 consecutive
							years, from 2013 to 2024.
							<i>
								<br />
								<br />
								<b className='purple'>
									{' '}
									The very first strokes on NotePad <span></span>{' '}
									<span>&lt;html&gt;&lt;/html&gt;</span>{' '}
								</b>
							</i>
							<br />
							<br />
							I'm passionate about building new &nbsp;
							<i>
								<b className='purple'>Web Technologies</b>,{' '}
								<b className='purple'>Game Development</b>, and occasionally
								working on <b className='purple'>F1 Simulation Environments</b>.
							</i>
							<br />
							<br />
							Whenever possible, I also apply my passion for developing products
							with <b className='purple'>LLMs</b> and
							<i>
								<b className='purple'>
									{' '}
									Modern Javascript Library and Frameworks
								</b>
							</i>
							&nbsp; like
							<i>
								<b className='purple'> React.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className='myAvtar'>
						<Tilt>
							<img src={myImg} className='img-fluid' alt='avatar' />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>FIND ME ON</h1>
						<p>
							Feel free to{' '}
							<span className='purple'>
								<a
									href='https://www.linkedin.com/in/zahooruddinmizuka/'
									target='_blank'
									rel='noreferrer'
									className='purple'
								>
									{' '}
									connect
								</a>{' '}
							</span>
							with me
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/Zahooruddin-dev'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/zahooruddinmizuka/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.instagram.com/zahooruddin18/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
