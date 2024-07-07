import { Card, CardContent, CardTitle, CardHeader, CardFooter } from './ui/card'

export default function Nolleboken() {
	return (
		<div id='nolleboken' className='flex flex-col w-10/12 sm:w-8/12'>
			<Card className=' h-96 border-0 shadow-none bg-secondary'>
				<CardHeader>
					<CardTitle className='text-5xl font-bold text-white'>Nolleboken</CardTitle>
				</CardHeader>
				<CardContent className='flex text-white'>
					<p className='opacity-70'>Här kan Nollan läsa en digital version av nolleboken.</p>
				</CardContent>
				<CardFooter>Tryck på boken för att öppna den!</CardFooter>
				<div className='flex'>
					<a href='nollebok_gdk_webb.pdf' target='_blank' rel='noreferrer' className='block w-1/2 h-fit'>
						<img
							className='w-56 h-1/2  transition duration-150 ease-in-out hover:scale-125 hover:cursor-pointer ml-auto mr-auto'
							src='gdkbook.svg'
							alt='book'
						></img>
					</a>
					<a href='nollebok_mt_webb.pdf' target='_blank' rel='noreferrer' className='block w-1/2 h-fit'>
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
