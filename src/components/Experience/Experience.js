import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';

const experienceData = [
	{
		company: 'Mizuka Enterprise',
		companyDuration: '1 yr 7 mos',
		role: 'Founding Engineer (Full-Stack)',
		type: 'Full-time',
		period: 'Apr 2025 - Present · 1 yr 1 mo',
		location: 'On-site',
		description:
			'Building an AI-driven EdTech SaaS that automates grading and lesson planning, saving educators 15+ hours weekly. Leading the end-to-end product lifecycle from PERN architecture to funding readiness and teacher-centric growth.',
		highlightTitle: 'Mizuka | Save Teacher Time with AI Exam Generation',
		highlight:
			'A B2B SaaS platform for creating, sharing, and managing interactive assessments. Educators can upload text, PDF, or DOCX files to generate question sets, run instant grading, manage classes, and track performance analytics with a responsive cross-device experience.',
	},
	{
		company: 'Freelance',
		role: 'Full Stack Engineer',
		type: 'Freelance',
		period: 'Sep 2024 - Dec 2025 · 1 yr 4 mos',
		location: 'Remote',
		description:
			'Architected end-to-end web solutions for small businesses, including SEO-focused platforms and custom booking engines with anti-spam security. Delivered integrated admin dashboards for reporting, order tracking, and automated customer communications.',
		highlightTitle: 'Foam Experts',
		highlight:
			'A service booking platform built with React and streamlined appointment workflows, dynamic package selection, responsive design, and real-time interaction updates.',
	},
	{
		company: 'Aruma Software Agency',
		role: 'Front End Web Developer',
		type: 'Freelance',
		period: 'Nov 2023 - Jul 2024 · 9 mos',
		location: 'Remote',
		description:
			'Migrated 7+ React projects from CRA to Vite to unlock near-instant build times and improved performance on legacy hardware. Built engagement-oriented features including custom notifications and targeted email integration workflows.',
		highlightTitle: 'Selected Product Work',
		highlight:
			'Contributed to polished product interfaces such as fine-dining and menu systems, with focus on UX responsiveness and delivery speed.',
	},
	{
		company: 'Mizuka',
		companyDuration: '2 yrs 7 mos',
		role: 'Career Transition',
		type: 'Career break',
		period: 'Feb 2021 - Aug 2023 · 2 yrs 7 mos',
		location: 'Pakistan',
		description:
			'Transitioned from full stack game development and game design into front end web development while focusing on college studies.',
	},
	{
		company: 'Freelance',
		role: 'Project Code Lead Maintainer',
		type: 'Freelance',
		period: 'Feb 2021 - May 2022 · 1 yr 4 mos',
		location: 'Remote',
		description:
			'Led technical handovers for complex codebases, produced deep documentation, and mentored incoming developers through architecture and patterns to ensure zero-downtime transitions.',
	},
	{
		company: 'Mizuka',
		role: 'Game Developer',
		type: 'Freelance',
		period: 'Apr 2018 - Mar 2021 · 3 yrs',
		location: 'Remote',
		description:
			'Led full-cycle development of 17+ projects including mobile RPGs, improving low-tier device performance from 30 FPS to a stable 60 FPS using memory and asset optimization strategies.',
		highlightTitle: 'Presidential Combat',
		highlight:
			'Delivered performance-first gameplay systems and production-ready release pipelines for real-world mobile constraints.',
	},
];

function Experience() {
	return (
		<Container fluid className='experience-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My <strong className='purple'>Experience</strong>
				</h1>
				<p className='experience-subtitle'>
					A stepped timeline of roles, impact, and product delivery.
				</p>

				<Row className='justify-content-center pb-4'>
					<Col lg={10}>
						<div className='experience-timeline'>
							{experienceData.map((item, index) => (
								<article className='experience-step' key={`${item.role}-${index}`}>
									<div className='experience-step-marker'>{index + 1}</div>
									<div className='experience-card'>
										<div className='experience-header'>
											<h3>{item.role}</h3>
											<p className='experience-company'>
												{item.company}
												{item.companyDuration ? ` · ${item.companyDuration}` : ''}
											</p>
										</div>

										<div className='experience-meta'>
											<span>{item.type}</span>
											<span>{item.period}</span>
											<span>{item.location}</span>
										</div>

										<p className='experience-description'>{item.description}</p>

										{item.highlightTitle && item.highlight && (
											<div className='experience-highlight'>
												<h4>{item.highlightTitle}</h4>
												<p>{item.highlight}</p>
											</div>
										)}
									</div>
								</article>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Experience;