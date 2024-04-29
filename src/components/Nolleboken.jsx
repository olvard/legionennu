import { Card, CardContent, CardTitle, CardHeader } from './ui/card'

export default function Nolleboken() {
	return (
		<div className='flex w-9/12'>
			<Card className=' h-96 border-0 shadow-none'>
				<CardHeader>
					<CardTitle className='text-5xl font-bold text-white'>Nolleboken</CardTitle>
				</CardHeader>

				<CardContent className='flex text-white'>
					<p className='opacity-50'>
						Här kan Nollan läsa en digital version av nolleboken, om det är så att nollan tappat bort sin
						Nollebok, eller bara är sugen på att läsa den igen. Oroa dig icke, den är minst lika snygg som
						den tryckta boken!
					</p>
				</CardContent>
			</Card>
			<img
				className='transition duration-150 ease-in-out hover:scale-125 hover:cursor-pointer'
				src='book.svg'
				alt='book'
			></img>
		</div>
	)
}
