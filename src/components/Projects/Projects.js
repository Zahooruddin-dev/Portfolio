import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Aethos from '../../Assets/Projects/aethos.png';
import photographer from '../../Assets/Projects/photographer.jpg';
import mizua from '../../Assets/Projects/mizua.jpg';
import foam from '../../Assets/Projects/foramexperts.jpg';
import dashboard from '../../Assets/Projects/dashboard.jpg';
import hair from '../../Assets/Projects/hair.png';
import Mizs from '../../Assets/Projects/mizscribe.jpg';
import MultiLLm from '../../Assets/Projects/multllm.png';
import wiki from '../../Assets/Projects/wiki.png';
import emp from '../../Assets/Projects/emp.png';
import mizukatypes from '../../Assets/Projects/mizuka-types.png';
import legalMindPro from '../../Assets/Projects/poster.jpg';
import quizai from '../../Assets/Projects/mizuka.jpg';
import Eduportal from '../../Assets/Projects/Eduportal.jpg';
import bedrock from '../../Assets/Projects/Bedrock.jpg';
import mizukaConnect from '../../Assets/Projects/mizuka-connect.jpg';
function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mizukaConnect}
							isBlog={false}
							title='Mizuka Connect'
							description='A streamlined PERN-stack real-time collaboration platform designed to unify communication within the Mizuka software ecosystem. It features multi-institute management, persistent channel-based discussions, and secure P2P networking with instant delivery via Socket.io. The system utilizes advanced PostgreSQL fan-out search and Cloudinary for automated asset management, all secured by Zod validation and JWT authentication. With a responsive, dark-themed Tailwind interface, Connect-Mizuka provides teams with a scalable infrastructure to eliminate workflow friction. This project represents Mizuka’s commitment to building data-driven tools that simplify institutional collaboration and enhance real-time productivity.'
							ghLink='https://github.com/Zahooruddin-dev/Connect-Mizuka'
							demoLink='https://connect-mizuka.vercel.app/'
						/>
					</Col>
								<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={bedrock}
							isBlog={false}
							title='Bedrock SQL-Bridge'
							description='An advanced AI utility translating natural language into complex SQL queries via Amazon Bedrock. This project leverages AWS to enable intuitive data exploration without manual coding. It features a secure API designed for schema mapping and query optimization through high-performance LLM integration. Developed as a personal exploration into Generative AI, the system demonstrates practical cloud-native AI applications in modern environments. While the live API is restricted for cost security, the repository provides full documentation and architectural insights into building AI-powered backend solutions.'
							ghLink='https://github.com/Zahooruddin-dev/Text-To-SQL-AWS-Bedrock'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={quizai}
							isBlog={false}
							title='M i z u k a'
							description='A B2B SaaS solution designed to help educators and institutions create, share, and manage interactive quizzes and assessments efficiently. Teachers can upload text, PDFs, or DOCX files to auto-generate multiple-choice, true/false, and short-answer questions, then edit and distribute them online or as downloadable files. The platform saves educators up to 70% of assessment preparation time and provides instant grading, class management, and detailed performance analytics. With a responsive design for desktop and mobile, it streamlines workflows, supports collaborative class sharing, and ensures a seamless assessment experience for both teachers and students.'
							demoLink='https://quiz-mizuka.vercel.app/dashboard'
						/>
					</Col>
		
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={legalMindPro}
							isBlog={false}
							title='Legal Mind Pro'
							description='Legal Mind Pro is an AI-powered legal assistant platform designed to streamline research, case analysis, and document management for lawyers, paralegals, and law students. Users can upload legal documents, contracts, or case files to automatically extract key clauses, generate summaries, and receive intelligent recommendations for relevant precedents. The platform also enables drafting of contracts and legal briefs, interactive Q&A on documents, collaborative workspaces, and secure cloud storage. With instant insights, responsive design, and intuitive organization features, Legal Mind Pro helps legal professionals save time, reduce manual work, and make more informed decisions.'
							demoLink='https://legal-mind-pro-ten.vercel.app/'
							ghLink='https://github.com/Zahooruddin-dev/Legal-Contract-Analyzer-AI'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={MultiLLm}
							isBlog={false}
							title='MULTI LLM AI ASSISTANT'
							description='An AI assistant platform built with React that allows users to interact with multiple leading language models simultaneously, including DeepSeek, OpenAI, Gemini, and Claude. Users can switch between models, compare outputs side by side, and analyze results in real time. Designed with an intuitive interface and live updates, it supports experimentation, productivity, and research for developers, students, and AI enthusiasts.'
							ghLink='https://github.com/Zahooruddin-dev/MULTI-LLM-CHATBOT'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Aethos}
							isBlog={false}
							title='Aethos (Fusion AI Model)'
							description='An advanced chat application powered by the Fusion AI model, featuring multilingual support and context-aware responses. Integrates Firebase authentication, PDF generation, and real-time message handling. Built with React for optimal performance and a seamless user experience across devices.'
							ghLink='https://github.com/Zahooruddin-dev/Aethos'
							/* 							demoLink='https://clinet-portfolio.vercel.app/'
							 */
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={emp}
							isBlog={false}
							title='Emphatic Listner'
							description='An AI-powered empathetic chat platform using React.js and Google Gemini API. Features voice input/output, sentiment analysis, and quick summarization commands. Includes customizable presets, local storage for chat history, and a responsive interface for consistent performance across devices.'
							ghLink='https://github.com/Zahooruddin-dev/Empathic-listener/tree/main'
							/* 							demoLink='https://empathic-listener-liard.vercel.app/'
							 */
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mizukatypes}
							isBlog={false}
							title='Mizuka Types'
							description='A React-based typing application designed to improve speed and accuracy through engaging practice modes and customizable experiences. It offers word, sentence, and free typing challenges with adjustable timers from 15–90 seconds, alongside Ultra-Zen and Focused Modes for distraction-free training. Users can personalize themes, track progress with persistent local settings, and enjoy a fully responsive design that adapts across devices. Built to combine productivity and fun, Mizuka Types supports both casual learners and serious typists seeking improvement.'
							ghLink='https://github.com/Zahooruddin-dev/Mizuka-Typing-2.0'
							demoLink='https://mizuka-types-2-0.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={mizua}
							isBlog={false}
							title='M I Z U A'
							description='A modern restaurant landing page built with React.js, featuring an interactive table reservation system and real-time availability updates. Implements styled-components and React hooks for a responsive, user-friendly dining experience.'
							ghLink='https://github.com/Zahooruddin-dev/mizua'
							demoLink='https://mizua.vercel.app//'
						/>
					</Col>{' '}
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={foam}
							isBlog={false}
							title='Foam Experts'
							description='A service booking platform developed in React.js with dynamic package selection and appointment scheduling. Features a responsive design, real-time updates, and streamlined navigation for efficient service management.'
							ghLink='https://github.com/Zahooruddin-dev/FoamexDetaliing'
							demoLink='https://foamex-detaliing.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={photographer}
							isBlog={false}
							title='Photographer'
							description='A photography portfolio and booking platform showcasing projects with seamless appointment scheduling. Built with React.js, featuring responsive design and interactive galleries. Includes contact forms and hiring options.'
							ghLink='https://github.com/Zahooruddin-dev/Photographer'
							demoLink='https://photographer-bay-alpha.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={Mizs}
							isBlog={false}
							title='MizScribe'
							description='A browser-based transcription app using React.js and web workers for local AI processing. Supports real-time speech-to-text conversion and multilingual translation, ensuring complete privacy with offline functionality.'
							ghLink='https://github.com/Zahooruddin-dev/Mizscribe'
							demoLink='https://mizscribe.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={wiki}
							isBlog={false}
							title='Wikipedia Simplified'
							description='A multilingual Wikipedia search application supporting eight languages. Features autocomplete suggestions, search history tracking, and popular queries display. Built with vanilla JavaScript for optimal performance.'
							ghLink='https://github.com/Zahooruddin-dev/Wikipedia-search-JS-VANILA'
							demoLink='https://wikipedia-search-js-vanila.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={dashboard}
							isBlog={false}
							title='Dashboard UI'
							description='A modern admin dashboard built with React.js, featuring reusable components and responsive design. Implements state management for dynamic updates and clean CSS styling for professional presentation.'
							ghLink='https://github.com/Zahooruddin-dev/Dashbaord-React'
							demoLink='https://dashbaord-react-three.vercel.app/'
						/>
					</Col>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={hair}
							isBlog={false}
							title='Hair Stylist Booking ( Demo )'
							description='A React-based salon booking system with calendar scheduling and simulated payments. Supports English and Romanian languages, featuring accessibility enhancements and mobile-first responsive design.'
							ghLink='https://github.com/Zahooruddin-dev/Premium-Hair-Salon-V.2'
							demoLink='https://premium-hair-salon-v-2.vercel.app/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
