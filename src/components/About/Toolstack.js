import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	SiVercel,
	SiGithub,
	SiAmazonaws,
	SiPostman,
	SiStackoverflow,
	SiGoogle,
	SiMdnwebdocs,
	SiNetlify,
	SiRender,
	SiFigma,
	SiVisualstudiocode,
	SiNpm,
	SiDocker,
	SiNotion,
} from 'react-icons/si';
import { TbBrandGithubCopilot } from 'react-icons/tb';

const tools = [
	{ name: 'GitHub Copilot', Icon: TbBrandGithubCopilot },
	{ name: 'GitHub', Icon: SiGithub },
	{ name: 'AWS Console', Icon: SiAmazonaws },
	{ name: 'Vercel', Icon: SiVercel },
	{ name: 'Netlify', Icon: SiNetlify },
	{ name: 'Render', Icon: SiRender },
	{ name: 'Postman', Icon: SiPostman },
	{ name: 'VS Code', Icon: SiVisualstudiocode },
	{ name: 'Figma', Icon: SiFigma },
	{ name: 'Docker', Icon: SiDocker },
	{ name: 'npm', Icon: SiNpm },
	{ name: 'Notion', Icon: SiNotion },
	{ name: 'Google', Icon: SiGoogle },
	{ name: 'MDN Docs', Icon: SiMdnwebdocs },
	{ name: 'Stack Overflow', Icon: SiStackoverflow },
];

function Toolstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			{tools.map(({ name, Icon }) => (
				<Col xs={4} md={3} lg={2} className='tech-icons tech-icon-card' key={name}>
					<div className='tech-icon-symbol' title={name} aria-label={name}>
						<Icon />
					</div>
					<p className='tech-icon-label'>{name}</p>
				</Col>
			))}
		</Row>
	);
}

export default Toolstack;
