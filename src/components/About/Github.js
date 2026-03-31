import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
	const [selectedDay, setSelectedDay] = useState(null);

	const calendarEventHandlers = {
		onClick: () => (contribution) => {
			setSelectedDay({
				date: contribution.date,
				count: contribution.count,
			});
		},
		onTouchStart: () => (contribution) => {
			setSelectedDay({
				date: contribution.date,
				count: contribution.count,
			});
		},
	};

	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1 className='project-heading' style={{ paddingBottom: '20px' }}>
				Days I <strong className='purple'>Code</strong>
			</h1>
			<div className='github-calendar-wrapper'>
				<GitHubCalendar
					username='zahooruddin-dev'
					blockSize={15}
					blockMargin={5}
					color='#c084f5'
					fontSize={16}
					eventHandlers={calendarEventHandlers}
				/>
			</div>
			{selectedDay && (
				<div className='calendar-day-details'>
					<strong>{selectedDay.date}</strong>
					<span>{selectedDay.count} commits</span>
				</div>
			)}
		</Row>
	);
}

export default Github;
