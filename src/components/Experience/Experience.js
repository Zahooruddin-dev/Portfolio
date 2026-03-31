import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function getDurationLabel(startDate, endDate = new Date()) {
	const startMonthIndex = startDate.getFullYear() * 12 + startDate.getMonth();
	const endMonthIndex = endDate.getFullYear() * 12 + endDate.getMonth();
	const totalMonths = Math.max(0, endMonthIndex - startMonthIndex);
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	if (years > 0 && months > 0) {
		return `${years} yr${years > 1 ? 's' : ''} ${months} mo${
			months > 1 ? 's' : ''
		}`;
	}

	if (years > 0) {
		return `${years} yr${years > 1 ? 's' : ''}`;
	}

	return `${months} mo${months !== 1 ? 's' : ''}`;
}

function formatPeriod(startDate, startLabel, isPresent, endDate, endLabel) {
	if (isPresent) {
		return `${startLabel} - Present · ${getDurationLabel(startDate)}`;
	}

	return `${startLabel} - ${endLabel} · ${getDurationLabel(startDate, endDate)}`;
}

const experienceData = [
	{
		company: 'Mizuka Enterprise',
		role: 'Founding Engineer (Full-Stack)',
		type: 'Full-time',
		startDate: new Date(2025, 3, 1),
		startLabel: 'Apr 2025',
		isPresent: true,
		location: 'On-site',
		description:
			'Building an AI-driven EdTech SaaS that automates grading and lesson planning, saving educators 15+ hours weekly. Leading the end-to-end product lifecycle from architecting the PERN stack to securing funding and scaling user growth through teacher-centric product design. Currently responsible for 2 production applications and 1 active in-development product inside the Mizuka ecosystem.',
		highlights: [
			{
				title: 'Mizuka Connect',
				meta: 'Feb 2026 - Present · Associated with Mizuka Enterprise',
				text: 'A streamlined PERN-stack real-time collaboration platform for the Mizuka software ecosystem. It includes multi-institute management, persistent channel discussions, secure P2P networking with Socket.io, PostgreSQL fan-out search, Cloudinary asset automation, and JWT + Zod secured workflows. This product is deployed in production.',
			},
			{
				title: 'Mizuka (Quiz SaaS)',
				meta: 'Production',
				text: 'A SaaS quiz platform enabling teachers and students to create, share, and complete interactive quizzes. Teachers can upload text or PDFs to auto-generate MCQs, edit questions, and distribute online or as downloadable PDF/DOCX files with class sharing, instant grading, and responsive design.',
			},
			{
				title: 'Mizuka Portal',
				meta: 'In Development',
				text: 'An ongoing product focused on operational workflows and platform expansion across the Mizuka ecosystem.',
			},
		],
	},
	{
		company: 'Freelance',
		role: 'Full Stack Engineer',
		type: 'Contracted freelance work',
		startDate: new Date(2024, 8, 1),
		startLabel: 'Sep 2024',
		isPresent: false,
		endDate: new Date(2025, 11, 1),
		endLabel: 'Dec 2025',
		location: 'Remote',
		description:
			'Delivered contracted freelance full-stack solutions for businesses, including SEO-optimized platforms, secure booking workflows with anti-spam controls, and integrated admin dashboards for reporting, order tracking, and automated customer communication.',
	},
	{
		company: 'Aruma Software Agency',
		role: 'Front End Web Developer',
		type: 'Freelance',
		startDate: new Date(2023, 10, 1),
		startLabel: 'Nov 2023',
		isPresent: false,
		endDate: new Date(2024, 6, 1),
		endLabel: 'Jul 2024',
		location: 'Remote',
		description:
			'Optimized development workflows by migrating 7+ React projects from CRA to Vite, achieving near-instantaneous build times and better performance on legacy hardware like Raspberry Pi. Architected engagement-focused features, including custom notifications and targeted email marketing integrations.',
	},
	{
		company: 'Mizuka',
		role: 'Career Transition',
		type: 'Career break',
		startDate: new Date(2021, 1, 1),
		startLabel: 'Feb 2021',
		isPresent: false,
		endDate: new Date(2023, 7, 1),
		endLabel: 'Aug 2023',
		location: 'Pakistan',
		description:
			'Moving from full stack game development and game design to front end web development while also focusing on college studies.',
	},
	{
		company: 'Freelance',
		role: 'Project Code Lead Maintainer',
		type: 'Freelance',
		startDate: new Date(2021, 1, 1),
		startLabel: 'Feb 2021',
		isPresent: false,
		endDate: new Date(2022, 4, 1),
		endLabel: 'May 2022',
		location: 'Remote',
		description:
			'Successfully managed end-to-end technical handovers of complex codebases, created comprehensive documentation, and guided incoming developers through architecture and design patterns while ensuring zero downtime during transitions.',
	},
	{
		company: 'Mizuka',
		role: 'Game Developer',
		type: 'Freelance',
		startDate: new Date(2018, 3, 1),
		startLabel: 'Apr 2018',
		isPresent: false,
		endDate: new Date(2021, 2, 1),
		endLabel: 'Mar 2021',
		location: 'Remote',
		description:
			'Led the full-cycle development of 17+ diverse projects, including 3 mobile RPGs, from initial architecture to global deployment. Specialized in extreme optimization, doubling frame rates from 30 FPS to a stable 60 FPS on low-tier mobile hardware through efficient memory and asset strategies.',
	},
];

function Experience() {
	return (
		<Container fluid className='experience-section'>
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
											<p className='experience-company'>{item.company}</p>
										</div>

										<div className='experience-meta'>
											<span>{item.type}</span>
											<span>
												{formatPeriod(
													item.startDate,
													item.startLabel,
													item.isPresent,
													item.endDate,
													item.endLabel
												)}
											</span>
											<span>{item.location}</span>
										</div>

										<p className='experience-description'>{item.description}</p>

										{item.highlights?.map((highlight) => (
											<div className='experience-highlight' key={highlight.title}>
												<h4>{highlight.title}</h4>
												{highlight.meta ? (
													<p className='experience-highlight-meta'>{highlight.meta}</p>
												) : null}
												<p>{highlight.text}</p>
											</div>
										))}
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