import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

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

	function formatDateTime(dateTimeString) {
		const dateObj = new Date(dateTimeString)
		const year = dateObj.getFullYear()
		const month = String(dateObj.getMonth() + 1).padStart(2, '0') // Month is zero-based
		const day = String(dateObj.getDate()).padStart(2, '0')
		const hours = String(dateObj.getHours()).padStart(2, '0')
		const minutes = String(dateObj.getMinutes()).padStart(2, '0')
		return [`${year}-${month}-${day}`, `${hours}:${minutes}`]
	}

	const eventsByDate = {}
	events.forEach((event) => {
		const date = formatDateTime(event.start.dateTime || event.start.date)[0]
		if (!eventsByDate[date]) {
			eventsByDate[date] = []
		}
		eventsByDate[date].push(event)
	})

	// Extract unique dates from events
	const uniqueDates = Object.keys(eventsByDate)

	return (
		<div className='overflow-x-auto'>
			<div className='grid grid-cols-4 gap-5 max-h-[600px] grid-flow'>
				{/* Render dates */}
				{uniqueDates.map((date, index) => (
					<div key={index}>
						<h2 className='font-bold '>{date}</h2>
						{/* Render events for the date */}
						{eventsByDate[date].map((event, eventIndex) => (
							<Card key={eventIndex} className='mb-4'>
								<CardHeader>
									<CardTitle className='text-sm font-bold text-white'>{event.summary}</CardTitle>
								</CardHeader>
								<CardFooter className='text-xs'>
									{formatDateTime(event.start.dateTime || event.start.date)[1]} -{' '}
									{formatDateTime(event.end.dateTime || event.end.date)[1]}
								</CardFooter>
							</Card>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default function Schema() {
	return (
		<div className='w-9/12 h-96'>
			<h1 className='text-5xl font-bold text-white mb-4'>Schema</h1>
			{GetEvents()}
		</div>
	)
}
