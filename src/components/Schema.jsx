import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationNext, PaginationPrevious, PaginationContent, PaginationItem } from './ui/pagination'

function GetEvents({ viewMode, currentDate, setCurrentDate, query }) {
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
	}, [query, currentDate])

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

	const uniqueDates = Object.keys(eventsByDate).sort()

	return (
		<div className=''>
			<div className={`${viewMode === 'day' ? 'flex flex-col' : 'grid grid-cols-4 gap-5'}`}>
				{/* Render current date */}
				{viewMode === 'day' ? (
					<div>
						<h2 className='font-bold'>{currentDate}</h2>
						{/* Render events for the current date */}
						{eventsByDate[currentDate]?.map((event, eventIndex) => (
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
								<CardHeader className='p-3 pb-0'>
									<CardTitle className='text-sm font-bold text-white'>{event.summary}</CardTitle>
								</CardHeader>
								<CardDescription className='mb-2 pl-3 text-xs font-thin'>
									{event.location}
								</CardDescription>
								<CardFooter className='text-xs pl-3'>
									{formatDateTime(event.start.dateTime || event.start.date)[1]} -{' '}
									{formatDateTime(event.end.dateTime || event.end.date)[1]}
								</CardFooter>
							</Card>
						))}
					</div>
				) : (
					/* Render dates and events in week mode */
					uniqueDates.map((date, index) => (
						<div key={index}>
							<h2 className='font-bold'>{date}</h2>
							{/* Render events for the date */}
							{eventsByDate[date]?.map((event, eventIndex) => (
								<Card
									key={eventIndex}
									className={`mb-4  ${
										parseFloat(formatDateTime(event.end.dateTime || event.end.date)[1]) -
											parseFloat(formatDateTime(event.start.dateTime || event.start.date)[1]) >
										2
											? 'h-44'
											: 'h-20'
									}`}
								>
									<CardHeader className='p-3 pb-0'>
										<CardTitle className='text-sm font-bold text-white'>{event.summary}</CardTitle>
									</CardHeader>
									<CardDescription className='mb-2 pl-3 text-xs font-thin'>
										{event.location}
									</CardDescription>
									<CardFooter className='text-xs pl-3'>
										{formatDateTime(event.start.dateTime || event.start.date)[1]} -{' '}
										{formatDateTime(event.end.dateTime || event.end.date)[1]}
									</CardFooter>
								</Card>
							))}
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default function Schema() {
	const [viewMode, setViewMode] = useState('day')
	const [query, setQuery] = useState('MT') // Default query
	const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])

	const handleNextDate = () => {
		const nextDate = new Date(currentDate)
		nextDate.setDate(nextDate.getDate() + 1)
		setCurrentDate(nextDate.toISOString().split('T')[0])
	}

	const handlePreviousDate = () => {
		const previousDate = new Date(currentDate)
		previousDate.setDate(previousDate.getDate() - 1)
		setCurrentDate(previousDate.toISOString().split('T')[0])
	}

	return (
		<div id='schema' className='w-9/12 h-max'>
			<div className='sm:flex-row flex-col flex justify-between sm:items-center'>
				<h1 className='text-5xl font-bold text-white mb-4'>Schema</h1>
				<div>
					<Button
						className={`lg:inline-block hidden mx-4 ${viewMode === 'day' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setViewMode('day')}
					>
						Dag
					</Button>
					<Button
						className={`lg:inline-block hidden mx-4 ${viewMode === 'week' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setViewMode('week')}
					>
						Vecka
					</Button>
					{/* Additional buttons to change the query parameter */}
					<Button
						className={`ml-0 mr-4 mb-4 sm:mx-4 ${query === 'MT' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setQuery('MT')}
					>
						MT
					</Button>
					<Button
						className={`sm:mx-4 ${query === 'GDK' ? 'bg-accent text-white' : ''}`}
						variant='outline'
						onClick={() => setQuery('GDK')}
					>
						GDK
					</Button>
					<Pagination className={`${viewMode === 'week' ? 'sm:hidden' : ''}`}>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									onClick={handlePreviousDate}
									// disabled={currentDate === new Date().toISOString().split('T')[0]}
									className={currentDate === new Date().toISOString().split('T')[0] ? 'hidden' : ''}
								/>
							</PaginationItem>
							<PaginationItem>
								<PaginationNext onClick={handleNextDate} />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</div>

			<GetEvents viewMode={viewMode} currentDate={currentDate} setCurrentDate={setCurrentDate} query={query} />
		</div>
	)
}
