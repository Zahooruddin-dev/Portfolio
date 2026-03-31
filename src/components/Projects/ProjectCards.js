import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
	return (
		<Card className='project-card-view'>
			{props.featured && <span className='project-badge'>Featured</span>}
			<Card.Img
				variant='top'
				src={props.imgPath}
				alt={`${props.title} preview`}
				loading='lazy'
				decoding='async'
			/>
			<Card.Body className='project-card-body'>
				<Card.Title>{props.title}</Card.Title>
				{props.tags?.length ? (
					<div className='project-tag-list'>
						{props.tags.map((tag) => (
							<span className='project-tag' key={`${props.title}-${tag}`}>
								{tag}
							</span>
						))}
					</div>
				) : null}
				<Card.Text style={{ textAlign: 'justify' }}>
					{props.description}
				</Card.Text>
				<div className='project-actions'>
					{props.ghLink && (
						<Button
							variant='primary'
							href={props.ghLink}
							target='_blank'
							title='Source code'
							aria-label='Source code'
						>
							<BsGithub /> &nbsp;
							{props.isBlog ? 'Blog' : 'GitHub'}
						</Button>
					)}

					{!props.isBlog && props.demoLink && (
						<Button
							variant='primary'
							href={props.demoLink}
							target='_blank'
							title='Live demo'
							aria-label='Live demo'
						>
							<CgWebsite /> &nbsp;
							Demo
						</Button>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
export default React.memo(ProjectCards);
