import { Card } from './ui/card'

export default function Spons() {
	return (
		<div className='w-11/12 pb-8'>
			<Card className='h-56 border-0 shadow-none bg-orange-100 flex items-center justify-between'>
				<img src='strommen.svg' alt='Strömmen' className='w-1/4 h-1/3 md:h-2/3 mx-0' />
				<img src='skylt.png' alt='skylt' className='w-1/4 ' />
				<img src='korps.png' alt='korps' className='w-1/4  mr-4 animate-fade' />
			</Card>
		</div>
	)
}
