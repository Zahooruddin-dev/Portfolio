import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am{' '}
						<span className='purple'> Zahooruddin Nizamani </span>
						from <span className='purple'> Hyderabad, Pakistan.</span>
						<br />
						<br />I am now graduated and currently working as a{' '}
						<strong className='purple'>Full Stack Engineer</strong>, mostly in the{' '}
						<strong className='purple'>PERN stack</strong>.
						<br />
						<br />I also work with <strong className='purple'>MongoDB</strong>,
						<strong className='purple'> Axios</strong>,
						<strong className='purple'> WebSockets</strong>, and
						<strong className='purple'> WebRTC</strong> for real-time, scalable
						products.
						<br />
						<br />
						Some of my favorite projects I've developed and worked
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Mizuka (Quiz SaaS)
						</li>
						<li className='about-activity'>
							<ImPointRight /> Mizuka Connect
						</li>
						<li className='about-activity'>
							<ImPointRight /> Edu Portal
						</li>
						<li className='about-activity'>
							<ImPointRight /> Multi LLM AI Agent
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Failure is not the opposite of success it's just a part of it"{' '}
					</p>
					<footer className='blockquote-footer'>Ariana Huffington</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
