import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function GetEvents({ viewMode, setViewMode, query, setQuery }) {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const res = await fetch(`/api/googlecal?q=${query}`)
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
	}, [query])

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
	const currentDate = new Date()
	const currentDateString = formatDateTime(currentDate.toISOString())[0]
	const uniqueDates = viewMode === 'day' ? [currentDateString] : Object.keys(eventsByDate)

	return (
		<div className=''>
			<div className={`${viewMode === 'day' ? 'flex flex-col' : 'grid grid-cols-4 gap-5'}`}>
				{/* Render dates */}
				{uniqueDates.map((date, index) => (
					<div key={index}>
						<h2 className='font-bold '>{date}</h2>
						{/* Render events for the date */}
						{eventsByDate[date]?.map((event, eventIndex) => (
							<Card
								key={eventIndex}
								className={`mb-4 ${
									parseFloat(formatDateTime(event.end.dateTime || event.end.date)[1]) -
										parseFloat(formatDateTime(event.start.dateTime || event.start.date)[1]) >
									2
										? 'h-44'
										: 'h-20'
								}`}
							>
								<CardHeader className='p-3'>
									<CardTitle className='text-sm font-bold text-white '>{event.summary}</CardTitle>
								</CardHeader>
								<CardFooter className='text-xs pl-3'>
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
	const [viewMode, setViewMode] = useState('day')
	const [query, setQuery] = useState('MT') // Default query

	return (
		<div className='w-9/12 h-96'>
			<div className='flex justify-between items-center'>
				<h1 className='text-5xl font-bold text-white mb-4'>Schema</h1>
				<div>
					<Button
						className={`mx-4 ${viewMode === 'day' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setViewMode('day')}
					>
						Dag
					</Button>
					<Button
						className={`mx-4 ${viewMode === 'week' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setViewMode('week')}
					>
						Vecka
					</Button>
					{/* Additional buttons to change the query parameter */}
					<Button
						className={`mx-4 ${query === 'MT' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setQuery('MT')}
					>
						MT
					</Button>
					<Button
						className={`mx-4 ${query === 'GDK' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setQuery('GDK')}
					>
						GDK
					</Button>
				</div>
			</div>

			<GetEvents viewMode={viewMode} setViewMode={setViewMode} query={query} setQuery={setQuery} />
		</div>
	)
}
