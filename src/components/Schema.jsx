import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationNext, PaginationPrevious, PaginationContent, PaginationItem } from './ui/pagination'
import { Input } from './ui/input'
import { useToast } from '@/components/ui/use-toast'

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
						<h2 className='font-bold sm:text-center'>{currentDate}</h2>
						{/* Render events for the current date */}
						{eventsByDate[currentDate]?.map((event, eventIndex) => (
							<Card
								key={eventIndex}
								className={`mb-4 sm:w-1/2 sm:mx-auto h-full bg-foreground text-white border-0 ${
									parseFloat(formatDateTime(event.end.dateTime || event.end.date)[1]) -
										parseFloat(formatDateTime(event.start.dateTime || event.start.date)[1]) >
									2
										? 'h-44'
										: 'h-full'
								}`}
							>
								<CardHeader className='p-3 pb-0'>
									<CardTitle className='text-sm md:text-xl font-bold text-white'>
										{event.summary}
									</CardTitle>
								</CardHeader>
								<CardDescription className='mb-2 pl-3 text-xs font-thin'>
									{event.location}
								</CardDescription>
								<CardFooter className='text-s pl-3'>
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
									className={`mb-4 bg-foreground text-white border-0 ${
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

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 1099px)')
		const handleMediaChange = (e) => {
			if (e.matches) {
				setViewMode('day')
			} else {
				setViewMode('week')
			}
		}

		// Check initial screen size
		handleMediaChange(mediaQuery)

		// Listen for screen size changes
		mediaQuery.addEventListener('change', handleMediaChange)

		// Clean up the event listener on component unmount
		return () => mediaQuery.removeEventListener('change', handleMediaChange)
	}, [])

	const { toast } = useToast()

	return (
		<div id='schema' className='w-10/12 sm:w-8/12 h-max'>
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

			<h3 className='text-orange-100 font-semibold mt-4'>Prenumerera på kalendern: </h3>
			<div className='flex space-x-8 py-2'>
				<Button
					variant='secondary'
					className='overflow-clip text-white font-bold bg-accent hover:bg-orange-600'
					onClick={() => {
						toast({
							title: 'Schema för MT kopierat till urklipp!',
						})
						navigator.clipboard.writeText(
							'https://calendar.google.com/calendar/ical/a5ceffd219c864222c7717aa24e386d764f31b47e3e5a4ec51ac2831e7ccc9ad%40group.calendar.google.com/public/basic.ics'
						)
					}}
				>
					För MT
				</Button>

				<Button
					variant='secondary'
					className='overflow-clip text-white font-bold bg-accent hover:bg-green-700'
					onClick={() => {
						toast({
							title: 'Schema för GDK kopierat till urklipp!',
						})
						navigator.clipboard.writeText(
							'https://calendar.google.com/calendar/ical/b3c47233db7d035dfbd4d0052f7224bbfb63cefd6de0d9d72a0c11123141913f%40group.calendar.google.com/public/basic.ics'
						)
					}}
				>
					För GDK
				</Button>
			</div>
			<p className='text-orange-100 opacity-50'>
				Du kan prenumerera på kalendern genom att lägga till en ny kalender i din kalenderapp och klistra in
				länken, som du får genom att klicka på ditt program ovan.
				{/* om det inte funkar som det ska
				kan du manuellt lägga till en ny kalender från webbadress och kopiera länken där. */}
			</p>
		</div>
	)
}
