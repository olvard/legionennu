import { Card, CardContent, CardTitle, CardHeader, CardFooter } from './ui/card'

export default function Nolleboken() {
	return (
		<div id='nolleboken' className='flex flex-col w-9/12'>
			<Card className=' h-96 border-0 shadow-none bg-secondary'>
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
				<CardFooter>Tryck på boken för att öppna den!</CardFooter>
				<div className='flex'>
					<a href='nollebokgdk.pdf' target='_blank' rel='noreferrer' className='block w-1/2 h-fit'>
						<img
							className='w-56 h-1/2  transition duration-150 ease-in-out hover:scale-125 hover:cursor-pointer ml-auto mr-auto'
							src='gdkbook.svg'
							alt='book'
						></img>
					</a>
					<a href='nollebokgdk.pdf' target='_blank' rel='noreferrer' className='block w-1/2 h-fit'>
						<img
							className='w-56  h-1/2  transition duration-150 ease-in-out hover:scale-125 hover:cursor-pointer ml-auto mr-auto'
							src='mtbook.svg'
							alt='book'
						></img>
					</a>
				</div>
			</Card>
		</div>
	)
}
