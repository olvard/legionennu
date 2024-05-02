import React, { useState, useEffect } from 'react'

function GetEvents() {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const res = await fetch('/api/googlecal')
				if (res.ok) {
					const data = await res.json()
					setEvents(data)
				} else {
					console.error('Failed to fetch events:', res.statusText)
				}
			} catch (error) {
				console.error('Error fetching events:', error)
			}
		}

		fetchEvents()
	}, [])

	return (
		<div>
			<h1>Upcoming Events</h1>
			<ul>
				{events.map((event, index) => (
					<li key={index}>
						{event.summary} - {event.start.dateTime || event.start.date}
					</li>
				))}
			</ul>
		</div>
	)
}

export default function Schema() {
	return (
		<div className='w-9/12 h-96'>
			<h1 className='text-5xl font-bold text-white'>Schema</h1>
			{GetEvents()}
		</div>
	)
}
