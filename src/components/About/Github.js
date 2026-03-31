import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
	const [selectedDay, setSelectedDay] = useState(null);

	function handleCalendarClick(event) {
		const target = event.target;
		if (!(target instanceof Element)) {
			return;
		}

		const rect = target.closest('rect[data-date]');
		if (!rect) {
			return;
		}

		const date = rect.getAttribute('data-date');
		const titleText = rect.querySelector('title')?.textContent || '';
		const matchedCount = titleText.match(/(\d+)\s+contribution/i);
		const count = matchedCount ? Number(matchedCount[1]) : 0;

		if (!date) {
			return;
		}

		setSelectedDay({
			date,
			count,
			titleText,
		});
	}

	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1 className='project-heading' style={{ paddingBottom: '20px' }}>
				Days I <strong className='purple'>Code</strong>
			</h1>
			<p className='calendar-hint'>
				Tap or click a day square to view commits for that date.
			</p>
			<div className='github-calendar-wrapper' onClick={handleCalendarClick}>
				<GitHubCalendar
					username='zahooruddin-dev'
					blockSize={15}
					blockMargin={5}
					color='#c084f5'
					fontSize={16}
				/>
			</div>
			{selectedDay ? (
				<div className='calendar-day-details'>
					<strong>{selectedDay.date}</strong>
					<span>{selectedDay.count} commits</span>
				</div>
			) : (
				<div className='calendar-day-details calendar-day-details-muted'>
					Select a day to inspect commit activity.
				</div>
			)}
		</Row>
	);
}

export default Github;
