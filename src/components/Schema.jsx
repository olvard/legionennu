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

	return (
		<div>
			<h1>Upcoming Events</h1>
			<ul>
				{events.map((event, index) => (
					<Card key={index} className='w-4/12'>
						<CardHeader>
							<CardTitle className='text-2xl font-bold text-white'>{event.summary}</CardTitle>
						</CardHeader>
						<CardFooter>
							{formatDateTime(event.start.dateTime || event.start.date)[0]} |{' '}
							{formatDateTime(event.start.dateTime || event.start.date)[1]} -{' '}
							{formatDateTime(event.end.dateTime || event.end.date)[1]}
						</CardFooter>
					</Card>
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
