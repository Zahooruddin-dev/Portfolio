import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	SiJavascript,
	SiReact,
	SiExpress,
	SiPostgresql,
	SiNodedotjs,
	SiMongodb,
	SiAxios,
	SiSocketdotio,
	SiWebrtc,
	SiTailwindcss,
	SiBootstrap,
	SiGit,
	SiGithub,
	SiTypescript,
	SiRedux,
	SiVite,
} from 'react-icons/si';

const skills = [
	{ name: 'JavaScript', Icon: SiJavascript },
	{ name: 'TypeScript', Icon: SiTypescript },
	{ name: 'React', Icon: SiReact },
	{ name: 'Node.js', Icon: SiNodedotjs },
	{ name: 'Express.js', Icon: SiExpress },
	{ name: 'PostgreSQL', Icon: SiPostgresql },
	{ name: 'MongoDB', Icon: SiMongodb },
	{ name: 'Axios', Icon: SiAxios },
	{ name: 'Socket.io', Icon: SiSocketdotio },
	{ name: 'WebRTC', Icon: SiWebrtc },
	{ name: 'Redux', Icon: SiRedux },
	{ name: 'Tailwind CSS', Icon: SiTailwindcss },
	{ name: 'Bootstrap', Icon: SiBootstrap },
	{ name: 'Vite', Icon: SiVite },
	{ name: 'Git', Icon: SiGit },
	{ name: 'GitHub', Icon: SiGithub },
];

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			{skills.map(({ name, Icon }) => (
				<Col xs={6} md={3} lg={2} className='tech-icons tech-icon-card' key={name}>
					<div className='tech-icon-symbol' title={name} aria-label={name}>
						<Icon />
					</div>
					<p className='tech-icon-label'>{name}</p>
				</Col>
			))}
		</Row>
	);
}

export default Techstack;
